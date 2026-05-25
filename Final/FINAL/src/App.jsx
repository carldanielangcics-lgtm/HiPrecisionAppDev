import { useCallback, useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import LoginScreen from './components/LoginScreen';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Toast from './components/Toast';
import {
  ApptModal,
  BillingModal,
  EditPatientModal,
  ExportModal,
  PatientModal,
  renderPatientTabContent,
} from './components/Modals';
import DashboardPage from './pages/DashboardPage';
import PatientsPage from './pages/PatientsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import QueuePage from './pages/QueuePage';
import RegistrationPage from './pages/RegistrationPage';
import BillingPage from './pages/BillingPage';
import ReportsPage from './pages/ReportsPage';
import UxAuditPage from './pages/UxAuditPage';
import { supabase } from './lib/supabase';
import {
  fullName,
  normalizeAppt,
  normalizeInvoice,
  normalizePatient,
  normalizeQueue,
} from './utils/helpers';
import {
  patientsDB as initialPatients,
  queueDB as initialQueue,
  appointmentsDB as initialAppointments,
  invoicesDB as initialInvoices,
  labResultsDB as initialLabResults,
  vitalSignsDB as initialVitalSigns,
  certificatesDB as initialCertificates,
} from './data/initialData';

const EMPTY_REG = {
  lastName: '',
  firstName: '',
  middleName: '',
  suffix: 'None',
  dob: '',
  sex: '',
  civil: 'Single',
  nationality: 'Filipino',
  mobile: '',
  email: '',
  address: '',
  emergencyName: '',
  emergencyRel: '',
  emergencyPhone: '',
  discount: 'No',
  hmo: 'None / Walk-in',
  hmoCard: '',
  service: '',
  doctor: '-- Walk-in (no referral) --',
  apptDate: '',
  apptTime: 'Walk-in / ASAP',
  complaint: '',
  payment: 'Cash',
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [toast, setToast] = useState({ message: '', visible: false });
  const toastTimer = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [patients, setPatients] = useState(initialPatients);
  const [queue, setQueue] = useState(initialQueue);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [invoices, setInvoices] = useState(initialInvoices);
  const [labResults] = useState(initialLabResults);
  const [vitalSigns] = useState(initialVitalSigns);
  const [certificates] = useState(initialCertificates);

  const [patientChipFilter, setPatientChipFilter] = useState('all');
  const [patientPage, setPatientPage] = useState(1);
  const [patientSearch, setPatientSearch] = useState('');
  const [patientServiceFilter, setPatientServiceFilter] = useState('');
  const [patientDoctorFilter, setPatientDoctorFilter] = useState('');

  const [billingChipFilter, setBillingChipFilter] = useState('all');
  const [billingPage, setBillingPage] = useState(1);
  const [billingSearch, setBillingSearch] = useState('');

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  const [calYear, setCalYear] = useState(todayYear);
  const [calMonth, setCalMonth] = useState(todayMonth);
  const [selectedCalDay, setSelectedCalDay] = useState(todayDay);

  const [wizardStep, setWizardStep] = useState(1);
  const [regForm, setRegForm] = useState(EMPTY_REG);
  const [consentChecked, setConsentChecked] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [regSummary, setRegSummary] = useState({ name: '—', dob: '—', contact: '—', service: '—', appt: '—' });

  const [modals, setModals] = useState({
    patient: false,
    edit: false,
    appt: false,
    billing: false,
    export: false,
  });
  const [patientModalId, setPatientModalId] = useState(null);
  const [patientTab, setPatientTab] = useState('visits');
  const [editForm, setEditForm] = useState({ id: '', lastName: '', firstName: '', contact: '', status: '', service: '', doctor: '' });
  const [apptForm, setApptForm] = useState({ patientId: '', service: '', doctor: 'Dr. Cruz', date: '', time: '8:00 AM', notes: '' });
  const [invForm, setInvForm] = useState({ patientId: '', service: 'CBC', amount: '', method: 'Cash', discount: 'None', remarks: '' });

  const contentRef = useRef(null);
  const queueChannelRef = useRef(null);

  const showToast = useCallback((msg) => {
    setToast({ message: msg, visible: true });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast({ message: msg, visible: false }), 5000);
  }, []);

  const getBadgeVal = useCallback(
    (key) => {
      if (key === 'queue') {
        const n = queue.filter((q) => q.status === 'Waiting').length;
        return n || '';
      }
      if (key === 'patients') return patients.length;
      return '';
    },
    [queue, patients]
  );

  const routeMap = {
    dashboard: '/dashboard',
    patients: '/patients',
    appointments: '/appointments',
    queue: '/queue',
    registration: '/registration',
    billing: '/billing',
    reports: '/reports',
    'ux-audit': '/ux-audit',
  };

  const navigateTo = useCallback(
    (page) => {
      setCurrentPage(page);
      navigate(routeMap[page] || '/dashboard');
      if (contentRef.current) contentRef.current.scrollTop = 0;
    },
    [navigate]
  );

  useEffect(() => {
    const path = location.pathname.replace(/^\/+/, '');
    setCurrentPage(path === '' ? 'dashboard' : path);
  }, [location.pathname]);

  const openModal = (id) => setModals((m) => ({ ...m, [id]: true }));
  const closeModal = (id) => setModals((m) => ({ ...m, [id]: false }));

  const loadPatients = async () => {
    const { data, error } = await supabase.from('patients').select('*').order('created_at', { ascending: false });
    if (!error && data) setPatients(data.map(normalizePatient));
  };
  const loadAppointments = async () => {
    const { data, error } = await supabase.from('appointments').select('*').order('date', { ascending: true });
    if (!error && data) setAppointments(data.map(normalizeAppt));
  };
  const loadQueue = async () => {
    const { data, error } = await supabase.from('queue').select('*').order('queue_num', { ascending: true });
    if (!error && data) setQueue(data.map(normalizeQueue));
  };
  const loadInvoices = async () => {
    const { data, error } = await supabase.from('invoices').select('*').order('created_at', { ascending: false });
    if (!error && data) setInvoices(data.map(normalizeInvoice));
  };
  const loadAll = async () => {
    await Promise.all([loadPatients(), loadAppointments(), loadQueue(), loadInvoices()]);
  };

  const subscribeQueueRealtime = () => {
    if (queueChannelRef.current) supabase.removeChannel(queueChannelRef.current);
    queueChannelRef.current = supabase
      .channel('queue-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'queue' }, async () => {
        await loadQueue();
      })
      .subscribe();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-username')?.value?.trim();
    const password = document.getElementById('login-password')?.value;
    setLoginError('');
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoginError(error.message || 'Invalid email or password.');
      return;
    }
    setIsLoggedIn(true);
    await loadAll();
    subscribeQueueRealtime();
    navigate('/dashboard');
  };

  const signOut = async () => {
    if (!confirm('Sign out of Hi-Precision Diagnostics?')) return;
    if (queueChannelRef.current) {
      supabase.removeChannel(queueChannelRef.current);
      queueChannelRef.current = null;
    }
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setRegForm((f) => ({ ...f, apptDate: f.apptDate || today }));
    setApptForm((f) => ({ ...f, date: f.date || today }));

    (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setIsLoggedIn(true);
        await loadAll();
        subscribeQueueRealtime();
      }
    })();

    return () => {
      if (queueChannelRef.current) supabase.removeChannel(queueChannelRef.current);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.stat-card,.panel,.pp-card,.consult-note-card,.billing-kpi-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${i * 0.05}s`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage, isLoggedIn]);

  const getPatient = (pid) => patients.find((p) => p.id === pid);

  const openPatientModal = (pid) => {
    setPatientModalId(pid);
    setPatientTab('visits');
    openModal('patient');
  };

  const openEditPatient = (pid) => {
    const p = getPatient(pid);
    if (!p) return;
    setEditForm({
      id: pid,
      lastName: p.lastName,
      firstName: p.firstName,
      contact: p.contact,
      status: p.status,
      service: p.service,
      doctor: p.doctor,
    });
    openModal('edit');
  };

  const saveEditPatient = async () => {
    const updates = {
      last_name: editForm.lastName,
      first_name: editForm.firstName,
      contact: editForm.contact,
      status: editForm.status,
      service: editForm.service,
      doctor: editForm.doctor,
    };
    const { error } = await supabase.from('patients').update(updates).eq('id', editForm.id);
    if (error) {
      showToast('Error updating patient: ' + error.message);
      return;
    }
    setPatients((list) =>
      list.map((p) =>
        p.id === editForm.id
          ? { ...p, lastName: updates.last_name, firstName: updates.first_name, contact: updates.contact, status: updates.status, service: updates.service, doctor: updates.doctor }
          : p
      )
    );
    closeModal('edit');
    showToast(`Patient ${editForm.lastName}, ${editForm.firstName} updated.`);
  };

  const saveAppointment = async () => {
    if (!apptForm.patientId || !apptForm.service || !apptForm.date) {
      showToast('Please fill in all required fields.');
      return;
    }
    const p = getPatient(apptForm.patientId);
    if (!p) {
      showToast('Selected patient not found.');
      return;
    }
    const today = new Date().toISOString().split('T')[0];
    const isToday = apptForm.date === today;
    const row = {
      patient_id: apptForm.patientId,
      patient_name: fullName(p),
      service: apptForm.service,
      doctor: apptForm.doctor,
      date: apptForm.date,
      time: apptForm.time,
      status: isToday ? 'Waiting' : 'Confirmed',
      complaint: apptForm.notes,
    };
    const { data, error } = await supabase.from('appointments').insert([row]).select().single();
    if (error) {
      showToast('Warning: Could not save to database (' + error.message + '). Added locally only.');
      // Fall through — still add to local state so UI works
    }
    const normalized = normalizeAppt(data || { ...row, id: 'LOCAL-' + Date.now() });
    setAppointments((a) => [...a, normalized]);

    // If appointment is for today, also add to the queue
    if (isToday) {
      const qNum = queue.filter((q) => q.status === 'Waiting').length + 1;
      const { data: savedQ } = await supabase
        .from('queue')
        .insert([{
          patient_id: apptForm.patientId,
          name: fullName(p),
          service: apptForm.service,
          doctor: apptForm.doctor,
          status: 'Waiting',
          wait_min: 0,
          queue_num: qNum,
          urgent: false,
        }])
        .select()
        .single();
      if (savedQ) setQueue((q) => [...q, normalizeQueue(savedQ)]);
    }

    closeModal('appt');
    setApptForm({ patientId: '', service: '', doctor: 'Dr. Cruz', date: today, time: '8:00 AM', notes: '' });
    showToast(`Appointment scheduled for ${fullName(p)} on ${apptForm.date} at ${apptForm.time}${isToday ? ' — added to queue' : ''}`);
  };

  const markDone = async (qid) => {
    const q = queue.find((x) => x.id === qid);
    if (!q || !confirm(`Mark ${q.name} as completed?`)) return;
    const endTime = new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' });
    const { error } = await supabase.from('queue').update({ status: 'Done', end_time: endTime }).eq('id', qid);
    if (error) {
      showToast('Error updating queue: ' + error.message);
      return;
    }
    setQueue((list) => {
      const updated = list.map((x) => (x.id === qid ? { ...x, status: 'Done', endTime } : x));
      const next = updated.filter((x) => x.status === 'Waiting').sort((a, b) => a.queueNum - b.queueNum)[0];
      if (next) {
        const startTime = new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' });
        supabase.from('queue').update({ status: 'In Progress', start_time: startTime }).eq('id', next.id);
        return updated.map((x) => (x.id === next.id ? { ...x, status: 'In Progress', startTime } : x));
      }
      return updated;
    });
    showToast(`${q.name} marked as done.`);
    await loadQueue();
  };

  const prioritize = async (qid) => {
    const q = queue.find((x) => x.id === qid);
    if (!q) return;
    if (queue.find((x) => x.status === 'In Progress')) {
      showToast('Finish current patient before prioritizing.');
      return;
    }
    const startTime = new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' });
    const { error } = await supabase.from('queue').update({ status: 'In Progress', start_time: startTime }).eq('id', qid);
    if (error) {
      showToast('Error updating queue: ' + error.message);
      return;
    }
    setQueue((list) => list.map((x) => (x.id === qid ? { ...x, status: 'In Progress', startTime } : x)));
    showToast(`${q.name} prioritized.`);
  };

  const moveUp = async (qid) => {
    const waiting = queue.filter((x) => x.status === 'Waiting').sort((a, b) => a.queueNum - b.queueNum);
    const idx = waiting.findIndex((x) => x.id === qid);
    if (idx <= 0) {
      showToast('Already at the top.');
      return;
    }
    const a = waiting[idx];
    const b = waiting[idx - 1];
    const tmp = a.queueNum;
    await supabase.from('queue').update({ queue_num: b.queueNum }).eq('id', a.id);
    await supabase.from('queue').update({ queue_num: tmp }).eq('id', b.id);
    setQueue((list) =>
      list.map((x) => {
        if (x.id === a.id) return { ...x, queueNum: b.queueNum };
        if (x.id === b.id) return { ...x, queueNum: tmp };
        return x;
      })
    );
    showToast('Queue updated.');
  };

  const validateRegStep = (from) => {
    const req = {
      1: ['lastName', 'firstName', 'dob', 'sex'],
      2: ['mobile', 'address'],
    };
    let ok = true;
    (req[from] || []).forEach((field) => {
      if (!String(regForm[field] || '').trim()) ok = false;
    });
    if (!ok) showToast('Please fill in all required fields.');
    return ok;
  };

  const nextRegStep = (from) => {
    if (!validateRegStep(from)) return;
    if (from === 2) {
      setRegSummary({
        name: `${regForm.lastName}, ${regForm.firstName}`,
        dob: regForm.dob || '—',
        contact: regForm.mobile || '—',
        service: regForm.service || '—',
        appt: regForm.apptDate ? `${regForm.apptDate} ${regForm.apptTime}` : '—',
      });
      setShowSummary(true);
    }
    setWizardStep(from + 1);
  };

  const submitRegistration = async () => {
    if (!consentChecked) {
      showToast('Please confirm patient consent.');
      return;
    }
    if (!regForm.service) {
      showToast('Please select a service.');
      return;
    }
    if (!regForm.apptDate) {
      showToast('Please enter an appointment date.');
      return;
    }
    const doc = regForm.doctor.replace('-- Walk-in (no referral) --', 'Dr. Cruz');
    const age = new Date().getFullYear() - new Date(regForm.dob).getFullYear();
    const patientRow = {
      last_name: regForm.lastName,
      first_name: regForm.firstName,
      age,
      sex: regForm.sex[0] || 'M',
      contact: regForm.mobile,
      service: regForm.service,
      service_category: 'Laboratory',
      doctor: doc,
      status: 'Waiting',
      time: regForm.apptTime,
      dob: regForm.dob,
      address: regForm.address,
      hmo: regForm.hmo,
    };
    const { data: savedPat, error } = await supabase.from('patients').insert([patientRow]).select().single();
    if (error) {
      showToast('Error saving patient: ' + error.message);
      return;
    }
    const pid = savedPat.id;
    const norm = normalizePatient(savedPat);
    setPatients((p) => [norm, ...p]);

    const qNum = queue.filter((q) => q.status === 'Waiting').length + 1;
    const qRow = {
      patient_id: pid,
      name: `${regForm.lastName}, ${regForm.firstName}`,
      service: regForm.service,
      doctor: doc,
      status: 'Waiting',
      wait_min: 0,
      queue_num: qNum,
      urgent: false,
    };
    const { data: savedQ } = await supabase
      .from('queue')
      .insert([qRow])
      .select()
      .single();
    setQueue((q) => [...q, normalizeQueue(savedQ || { ...qRow, id: 'LOCAL-Q-' + Date.now() })]);

    const apptRow = {
      patient_id: pid,
      patient_name: `${regForm.lastName}, ${regForm.firstName}`,
      service: regForm.service,
      doctor: doc,
      date: regForm.apptDate,
      time: regForm.apptTime,
      status: 'Waiting',
      complaint: regForm.complaint,
    };
    const { data: savedAppt } = await supabase
      .from('appointments')
      .insert([apptRow])
      .select()
      .single();
    setAppointments((a) => [...a, normalizeAppt(savedAppt || { ...apptRow, id: 'LOCAL-A-' + Date.now() })]);

    const registeredName = `${patientRow.last_name}, ${patientRow.first_name}`;
    setRegForm(EMPTY_REG);
    setConsentChecked(false);
    setShowSummary(false);
    setWizardStep(1);
    showToast(`Patient ${registeredName} registered — ID ${pid}`);
    navigateTo('patients');
  };

  const collectPayment = async (iid) => {
    const inv = invoices.find((i) => i.id === iid);
    if (!inv || !confirm(`Mark ${inv.id} as paid for ${inv.patientName}?`)) return;
    const { error } = await supabase.from('invoices').update({ status: 'Paid' }).eq('id', iid);
    if (error) {
      showToast('Error updating invoice: ' + error.message);
      return;
    }
    setInvoices((list) => list.map((i) => (i.id === iid ? { ...i, status: 'Paid' } : i)));
    showToast(`${inv.id} marked as paid.`);
  };

  const saveInvoice = async () => {
    if (!invForm.patientId || !invForm.amount) {
      showToast('Please fill in all required fields.');
      return;
    }
    const p = getPatient(invForm.patientId);
    const row = {
      patient_id: invForm.patientId,
      patient_name: fullName(p),
      service: invForm.service,
      amount: parseFloat(invForm.amount),
      method: invForm.method,
      status: 'Pending',
      date: 'May 18',
    };
    const { data, error } = await supabase.from('invoices').insert([row]).select().single();
    if (error) {
      showToast('Error creating invoice: ' + error.message);
      return;
    }
    setInvoices((i) => [normalizeInvoice(data), ...i]);
    closeModal('billing');
    showToast(`Invoice created for ${fullName(p)}`);
  };

  const changeCalMonth = (dir) => {
    setCalMonth((m) => {
      let next = m + dir;
      let nextYear = calYear;
      if (next > 11) {
        next = 0;
        nextYear += 1;
      }
      if (next < 0) {
        next = 11;
        nextYear -= 1;
      }
      setCalYear(nextYear);
      const daysInNextMonth = new Date(nextYear, next + 1, 0).getDate();
      setSelectedCalDay((day) => Math.min(day, daysInNextMonth));
      return next;
    });
  };

  const modalPatient = patientModalId ? getPatient(patientModalId) : null;
  const tabContent = modalPatient
    ? renderPatientTabContent(patientTab, patientModalId, {
        appointments,
        vitalSigns,
        labResults,
        certificates,
        invoices,
      })
    : null;

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage patients={patients} queue={queue} appointments={appointments} onNavigate={navigateTo} />;
      case 'patients':
        return (
          <PatientsPage
            patients={patients}
            patientChipFilter={patientChipFilter}
            patientPage={patientPage}
            patientSearch={patientSearch}
            patientServiceFilter={patientServiceFilter}
            patientDoctorFilter={patientDoctorFilter}
            onSetChip={(v) => {
              setPatientChipFilter(v);
              setPatientPage(1);
            }}
            onSearchChange={(v) => {
              setPatientSearch(v);
              setPatientPage(1);
            }}
            onServiceFilterChange={setPatientServiceFilter}
            onDoctorFilterChange={setPatientDoctorFilter}
            onSetPage={setPatientPage}
            onNavigate={navigateTo}
            onOpenExport={() => openModal('export')}
            onOpenPatient={openPatientModal}
            onOpenEdit={openEditPatient}
          />
        );
      case 'appointments':
        return (
          <AppointmentsPage
            appointments={appointments}
            calYear={calYear}
            calMonth={calMonth}
            selectedCalDay={selectedCalDay}
            onChangeMonth={changeCalMonth}
            onSelectDay={setSelectedCalDay}
            onOpenApptModal={() => openModal('appt')}
          />
        );
      case 'queue':
        return (
          <QueuePage
            queue={queue}
            onOpenApptModal={() => openModal('appt')}
            onRefresh={loadAll}
            onMarkDone={markDone}
            onPrioritize={prioritize}
            onMoveUp={moveUp}
          />
        );
      case 'registration':
        return (
          <RegistrationPage
            wizardStep={wizardStep}
            showSummary={showSummary}
            summary={regSummary}
            onNavigate={navigateTo}
            onNext={nextRegStep}
            onPrev={(from) => setWizardStep(from - 1)}
            onSubmit={submitRegistration}
            regForm={regForm}
            onRegChange={(field, value) => setRegForm((f) => ({ ...f, [field]: value }))}
            consentChecked={consentChecked}
            onConsentChange={(e) => setConsentChecked(e.target.checked)}
          />
        );
      case 'billing':
        return (
          <BillingPage
            invoices={invoices}
            billingChipFilter={billingChipFilter}
            billingPage={billingPage}
            billingSearch={billingSearch}
            onSetChip={(v) => {
              setBillingChipFilter(v);
              setBillingPage(1);
            }}
            onSearchChange={(v) => {
              setBillingSearch(v);
              setBillingPage(1);
            }}
            onSetPage={setBillingPage}
            onOpenBillingModal={() => openModal('billing')}
            onCollect={collectPayment}
            onToast={showToast}
          />
        );
      case 'reports':
        return <ReportsPage onToast={showToast} />;
      case 'ux-audit':
        return <UxAuditPage />;
      default:
        return <DashboardPage patients={patients} queue={queue} appointments={appointments} onNavigate={navigateTo} />;
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <LoginScreen
          onLogin={handleLogin}
          loginError={loginError}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword((s) => !s)}
        />
        <Toast message={toast.message} visible={toast.visible} />
      </>
    );
  }

  return (
    <>
      <Topbar />
      <div className="main container-fluid" id="main-app">
        <Sidebar currentPage={currentPage} onNavigate={navigateTo} getBadgeVal={getBadgeVal} onSignOut={signOut} />
        <div className="content position-relative" id="content" ref={contentRef}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage patients={patients} queue={queue} appointments={appointments} onNavigate={navigateTo} />} />
            <Route path="/patients" element={<PatientsPage
              patients={patients}
              patientChipFilter={patientChipFilter}
              patientPage={patientPage}
              patientSearch={patientSearch}
              patientServiceFilter={patientServiceFilter}
              patientDoctorFilter={patientDoctorFilter}
              onSetChip={(v) => {
                setPatientChipFilter(v);
                setPatientPage(1);
              }}
              onSearchChange={(v) => {
                setPatientSearch(v);
                setPatientPage(1);
              }}
              onServiceFilterChange={setPatientServiceFilter}
              onDoctorFilterChange={setPatientDoctorFilter}
              onSetPage={setPatientPage}
              onNavigate={navigateTo}
              onOpenExport={() => openModal('export')}
              onOpenPatient={openPatientModal}
              onOpenEdit={openEditPatient}
            />} />
            <Route path="/appointments" element={<AppointmentsPage
              appointments={appointments}
              calYear={calYear}
              calMonth={calMonth}
              selectedCalDay={selectedCalDay}
              onChangeMonth={changeCalMonth}
              onSelectDay={setSelectedCalDay}
              onOpenApptModal={() => openModal('appt')}
            />} />
            <Route path="/queue" element={<QueuePage
              queue={queue}
              onOpenApptModal={() => openModal('appt')}
              onRefresh={loadAll}
              onMarkDone={markDone}
              onPrioritize={prioritize}
              onMoveUp={moveUp}
            />} />
            <Route path="/registration" element={<RegistrationPage
              wizardStep={wizardStep}
              showSummary={showSummary}
              summary={regSummary}
              onNavigate={navigateTo}
              onNext={nextRegStep}
              onPrev={(from) => setWizardStep(from - 1)}
              onSubmit={submitRegistration}
              regForm={regForm}
              onRegChange={(field, value) => setRegForm((f) => ({ ...f, [field]: value }))}
              consentChecked={consentChecked}
              onConsentChange={(e) => setConsentChecked(e.target.checked)}
            />} />
            <Route path="/billing" element={<BillingPage
              invoices={invoices}
              billingChipFilter={billingChipFilter}
              billingPage={billingPage}
              billingSearch={billingSearch}
              onSetChip={(v) => {
                setBillingChipFilter(v);
                setBillingPage(1);
              }}
              onSearchChange={(v) => {
                setBillingSearch(v);
                setBillingPage(1);
              }}
              onSetPage={setBillingPage}
              onOpenBillingModal={() => openModal('billing')}
              onCollect={collectPayment}
              onToast={showToast}
            />} />
            <Route path="/reports" element={<ReportsPage onToast={showToast} />} />
            <Route path="/ux-audit" element={<UxAuditPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </div>

      <PatientModal
        open={modals.patient}
        onClose={() => closeModal('patient')}
        patient={modalPatient}
        activeTab={patientTab}
        onTabChange={setPatientTab}
        tabContent={tabContent}
        onViewBilling={() => {
          closeModal('patient');
          navigateTo('billing');
        }}
      />
      <EditPatientModal
        open={modals.edit}
        onClose={() => closeModal('edit')}
        editForm={editForm}
        onEditChange={(field, value) => setEditForm((f) => ({ ...f, [field]: value }))}
        onSave={saveEditPatient}
      />
      <ApptModal
        open={modals.appt}
        onClose={() => closeModal('appt')}
        patients={patients}
        apptForm={apptForm}
        onApptChange={(field, value) => setApptForm((f) => ({ ...f, [field]: value }))}
        onSave={saveAppointment}
      />
      <BillingModal
        open={modals.billing}
        onClose={() => closeModal('billing')}
        patients={patients}
        invForm={invForm}
        onInvChange={(field, value) => setInvForm((f) => ({ ...f, [field]: value }))}
        onSave={saveInvoice}
      />
      <ExportModal
        open={modals.export}
        onClose={() => closeModal('export')}
        onExport={() => {
          closeModal('export');
          showToast('Export started — file will be ready shortly.');
        }}
      />

      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
