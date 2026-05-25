import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabase';
import {
  initialAppointments,
  initialCertificates,
  initialInvoices,
  initialLabResults,
  initialPatients,
  initialQueue,
  initialVitalSigns,
} from '../data/seedData';
import {
  fullName,
  normalizeAppt,
  normalizeInvoice,
  normalizePatient,
  normalizeQueue,
} from '../utils/helpers.jsx';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const [patientsDB, setPatientsDB] = useState(initialPatients);
  const [queueDB, setQueueDB] = useState(initialQueue);
  const [appointmentsDB, setAppointmentsDB] = useState(initialAppointments);
  const [invoicesDB, setInvoicesDB] = useState(initialInvoices);
  const [vitalSignsDB] = useState(initialVitalSigns);
  const [labResultsDB] = useState(initialLabResults);
  const [certificatesDB] = useState(initialCertificates);

  const [openModals, setOpenModals] = useState({});
  const [patientModalId, setPatientModalId] = useState(null);
  const [patientModalTab, setPatientModalTab] = useState('visits');

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    setToastVisible(true);
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => setToastVisible(false), 5000);
  }, []);

  const openModal = useCallback((id) => {
    setOpenModals((m) => ({ ...m, [id]: true }));
  }, []);

  const closeModal = useCallback((id) => {
    setOpenModals((m) => ({ ...m, [id]: false }));
  }, []);

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
    document.getElementById('content')?.scrollTo(0, 0);
  }, []);

  const getPatient = useCallback((pid) => patientsDB.find((p) => p.id === pid) || null, [patientsDB]);

  const getBadgeVal = useCallback(
    (key) => {
      if (key === 'queue') return queueDB.filter((q) => q.status === 'Waiting').length || '';
      if (key === 'patients') return patientsDB.length;
      return '';
    },
    [queueDB, patientsDB]
  );

  const loadPatients = useCallback(async () => {
    const { data, error } = await supabase.from('patients').select('*').order('created_at', { ascending: false });
    if (!error && data) setPatientsDB(data.map(normalizePatient));
  }, []);

  const loadAppointments = useCallback(async () => {
    const { data, error } = await supabase.from('appointments').select('*').order('date', { ascending: true });
    if (!error && data) setAppointmentsDB(data.map(normalizeAppt));
  }, []);

  const loadQueue = useCallback(async () => {
    const { data, error } = await supabase.from('queue').select('*').order('queue_num', { ascending: true });
    if (!error && data) setQueueDB(data.map(normalizeQueue));
  }, []);

  const loadInvoices = useCallback(async () => {
    const { data, error } = await supabase.from('invoices').select('*').order('created_at', { ascending: false });
    if (!error && data) setInvoicesDB(data.map(normalizeInvoice));
  }, []);

  const loadAll = useCallback(async () => {
    await Promise.all([loadPatients(), loadAppointments(), loadQueue(), loadInvoices()]);
  }, [loadPatients, loadAppointments, loadQueue, loadInvoices]);

  const subscribeQueueRealtime = useCallback(() => {
    return supabase
      .channel('queue-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'queue' }, async () => {
        await loadQueue();
      })
      .subscribe();
  }, [loadQueue]);

  const sbInsertPatient = async (row) => {
    const { data, error } = await supabase.from('patients').insert([row]).select().single();
    if (error) {
      showToast('Error saving patient: ' + error.message);
      return null;
    }
    return data;
  };

  const sbUpdatePatient = async (id, updates) => {
    const { error } = await supabase.from('patients').update(updates).eq('id', id);
    if (error) showToast('Error updating patient: ' + error.message);
    return !error;
  };

  const sbInsertAppointment = async (row) => {
    const { data, error } = await supabase.from('appointments').insert([row]).select().single();
    if (error) {
      showToast('Error saving appointment: ' + error.message);
      return null;
    }
    return data;
  };

  const sbInsertQueueItem = async (row) => {
    const { data, error } = await supabase.from('queue').insert([row]).select().single();
    if (error) {
      showToast('Error adding to queue: ' + error.message);
      return null;
    }
    return data;
  };

  const sbUpdateQueue = async (id, updates) => {
    const { error } = await supabase.from('queue').update(updates).eq('id', id);
    if (error) showToast('Error updating queue: ' + error.message);
    return !error;
  };

  const sbInsertInvoice = async (row) => {
    const { data, error } = await supabase.from('invoices').insert([row]).select().single();
    if (error) {
      showToast('Error creating invoice: ' + error.message);
      return null;
    }
    return data;
  };

  const sbUpdateInvoice = async (id, updates) => {
    const { error } = await supabase.from('invoices').update(updates).eq('id', id);
    if (error) showToast('Error updating invoice: ' + error.message);
    return !error;
  };

  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message || 'Invalid email or password.');
    setSession(data.session);
    setLoggedInUser(data.user?.email || email);
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user.id).single();
    const role = (profile?.role || 'frontdesk').toLowerCase();
    if (role !== 'frontdesk') {
      await supabase.auth.signOut();
      throw new Error('This account is not authorized for Front Desk access.');
    }
    await loadAll();
    subscribeQueueRealtime();
    setCurrentPage('dashboard');
  };

  const signOut = async () => {
    if (!confirm('Sign out of Hi-Precision Diagnostics?')) return;
    supabase.removeAllChannels();
    await supabase.auth.signOut();
    setSession(null);
    setLoggedInUser(null);
  };

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session: s } }) => {
      if (!s) return;
      setSession(s);
      setLoggedInUser(s.user?.email || '');
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', s.user.id).single();
      const role = (profile?.role || 'frontdesk').toLowerCase();
      if (role === 'frontdesk') {
        await loadAll();
        subscribeQueueRealtime();
      } else {
        await supabase.auth.signOut();
      }
    });
  }, [loadAll, subscribeQueueRealtime]);

  const value = useMemo(
    () => ({
      session,
      loggedInUser,
      currentPage,
      navigateTo,
      toastMsg,
      toastVisible,
      showToast,
      patientsDB,
      setPatientsDB,
      queueDB,
      setQueueDB,
      appointmentsDB,
      setAppointmentsDB,
      invoicesDB,
      setInvoicesDB,
      vitalSignsDB,
      labResultsDB,
      certificatesDB,
      openModals,
      openModal,
      closeModal,
      patientModalId,
      setPatientModalId,
      patientModalTab,
      setPatientModalTab,
      getPatient,
      getBadgeVal,
      loadAll,
      fullName,
      sbInsertPatient,
      sbUpdatePatient,
      sbInsertAppointment,
      sbInsertQueueItem,
      sbUpdateQueue,
      sbInsertInvoice,
      sbUpdateInvoice,
      handleLogin,
      signOut,
      normalizeAppt,
      normalizeQueue,
      normalizeInvoice,
      normalizePatient,
    }),
    [
      session,
      loggedInUser,
      currentPage,
      navigateTo,
      toastMsg,
      toastVisible,
      showToast,
      patientsDB,
      queueDB,
      appointmentsDB,
      invoicesDB,
      vitalSignsDB,
      labResultsDB,
      certificatesDB,
      openModals,
      openModal,
      closeModal,
      patientModalId,
      patientModalTab,
      getPatient,
      getBadgeVal,
      loadAll,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
