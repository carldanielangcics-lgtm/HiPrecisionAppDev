import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { normalizeAppt, normalizePatient, normalizeQueue } from '../utils/helpers';

export default function RegistrationPage() {
  const {
    navigateTo,
    showToast,
    patientsDB,
    setPatientsDB,
    queueDB,
    setQueueDB,
    appointmentsDB,
    setAppointmentsDB,
    sbInsertPatient,
    sbInsertQueueItem,
    sbInsertAppointment,
    loadAll,
  } = useApp();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    dob: '',
    sex: '',
    mobile: '',
    email: '',
    address: '',
    service: '',
    doctor: 'Dr. Cruz',
    apptDate: new Date().toISOString().split('T')[0],
    apptTime: 'Walk-in / ASAP',
    complaint: '',
    consent: false,
  });
  const [showSummary, setShowSummary] = useState(false);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const validate = (fields) => {
    let ok = true;
    fields.forEach((key) => {
      if (!String(form[key] || '').trim()) ok = false;
    });
    if (!ok) showToast('Please fill in all required fields.');
    return ok;
  };

  const submit = async () => {
    if (!form.consent) {
      showToast('Please confirm patient consent.');
      return;
    }
    if (!form.service || !form.apptDate) {
      showToast('Please complete service and appointment date.');
      return;
    }
    const age = new Date().getFullYear() - new Date(form.dob).getFullYear();
    const patientRow = {
      last_name: form.lastName,
      first_name: form.firstName,
      age,
      sex: form.sex[0] || 'M',
      contact: form.mobile,
      service: form.service,
      service_category: 'Laboratory',
      doctor: form.doctor,
      status: 'Waiting',
      time: form.apptTime,
      dob: form.dob,
      address: form.address,
      hmo: 'None',
      email: form.email,
    };
    const savedPat = await sbInsertPatient(patientRow);
    if (!savedPat) return;
    const pid = savedPat.id;
    const norm = normalizePatient(savedPat);
    setPatientsDB([norm, ...patientsDB]);

    const qNum = queueDB.filter((q) => q.status === 'Waiting').length + 1;
    const savedQ = await sbInsertQueueItem({
      patient_id: pid,
      name: `${form.lastName}, ${form.firstName}`,
      service: form.service,
      doctor: form.doctor,
      status: 'Waiting',
      wait_min: 0,
      queue_num: qNum,
      urgent: false,
    });
    if (savedQ) setQueueDB([...queueDB, normalizeQueue(savedQ)]);

    const savedAppt = await sbInsertAppointment({
      patient_id: pid,
      patient_name: `${form.lastName}, ${form.firstName}`,
      service: form.service,
      doctor: form.doctor,
      date: form.apptDate,
      time: form.apptTime,
      status: 'Waiting',
      complaint: form.complaint,
    });
    if (savedAppt) setAppointmentsDB([...appointmentsDB, normalizeAppt(savedAppt)]);

    setForm({
      lastName: '',
      firstName: '',
      middleName: '',
      dob: '',
      sex: '',
      mobile: '',
      email: '',
      address: '',
      service: '',
      doctor: 'Dr. Cruz',
      apptDate: new Date().toISOString().split('T')[0],
      apptTime: 'Walk-in / ASAP',
      complaint: '',
      consent: false,
    });
    setStep(1);
    setShowSummary(false);
    showToast(`Patient ${form.lastName}, ${form.firstName} registered — ID ${pid}`);
    navigateTo('patients');
    loadAll();
  };

  return (
    <>
      <div className="content-header">
        <div>
          <div className="content-title">Patient Registration</div>
          <div className="content-sub">Register a new patient or walk-in</div>
        </div>
        <button type="button" className="btn-secondary" onClick={() => navigateTo('patients')}>
          <i className="ti ti-arrow-left" /> Back to Patients
        </button>
      </div>
      <div className="wizard-progress">
        {[1, 2, 3].map((n) => (
          <div key={n} className={`wizard-step${step === n ? ' active' : ''}${step > n ? ' done' : ''}`}>
            <div className="wizard-step-num">{n}</div>
            <div className="wizard-step-label">
              {n === 1 ? 'Personal Info' : n === 2 ? 'Contact & Insurance' : 'Visit & Consent'}
            </div>
          </div>
        ))}
      </div>
      <div className="panel">
        {step === 1 && (
          <div style={{ padding: 20 }}>
            <div className="form-section">Basic Information</div>
            <div className="form-grid">
              <div className="form-group required">
                <label className="form-label">
                  Last Name <span>*</span>
                </label>
                <input className="form-input" value={form.lastName} onChange={(e) => set('lastName', e.target.value)} />
              </div>
              <div className="form-group required">
                <label className="form-label">
                  First Name <span>*</span>
                </label>
                <input className="form-input" value={form.firstName} onChange={(e) => set('firstName', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-input" value={form.dob} onChange={(e) => set('dob', e.target.value)} />
              </div>
              <div className="form-group required">
                <label className="form-label">
                  Sex <span>*</span>
                </label>
                <select className="form-select" value={form.sex} onChange={(e) => set('sex', e.target.value)}>
                  <option value="">-- Select --</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="wizard-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => validate(['lastName', 'firstName', 'dob', 'sex']) && setStep(2)}
              >
                Next <i className="ti ti-arrow-right" />
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div style={{ padding: 20 }}>
            <div className="form-grid">
              <div className="form-group required">
                <label className="form-label">
                  Mobile <span>*</span>
                </label>
                <input className="form-input" value={form.mobile} onChange={(e) => set('mobile', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" value={form.email} onChange={(e) => set('email', e.target.value)} />
              </div>
              <div className="form-group full required">
                <label className="form-label">
                  Address <span>*</span>
                </label>
                <input className="form-input" value={form.address} onChange={(e) => set('address', e.target.value)} />
              </div>
            </div>
            <div className="wizard-actions">
              <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                <i className="ti ti-arrow-left" /> Back
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={() => validate(['mobile', 'address']) && (setShowSummary(true), setStep(3))}
              >
                Next <i className="ti ti-arrow-right" />
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div style={{ padding: 20 }}>
            <div className="form-group" style={{ marginBottom: 12 }}>
              <label className="form-label">Service Type</label>
              <select className="form-select" value={form.service} onChange={(e) => set('service', e.target.value)}>
                <option value="">-- Select Service --</option>
                <option>CBC (Complete Blood Count)</option>
                <option>Urinalysis</option>
                <option>Chest X-Ray</option>
                <option>ECG</option>
                <option>Consultation</option>
              </select>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Appointment Date</label>
                <input type="date" className="form-input" value={form.apptDate} onChange={(e) => set('apptDate', e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Preferred Time</label>
                <select className="form-select" value={form.apptTime} onChange={(e) => set('apptTime', e.target.value)}>
                  <option>Walk-in / ASAP</option>
                  <option>8:00 AM</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                </select>
              </div>
            </div>
            {showSummary && (
              <div className="summary-card">
                <div className="summary-title">Registration Summary</div>
                <div className="summary-row">
                  <div className="summary-label">Patient Name</div>
                  <div className="summary-value">
                    {form.lastName}, {form.firstName}
                  </div>
                </div>
                <div className="summary-row">
                  <div className="summary-label">Service</div>
                  <div className="summary-value">{form.service || '—'}</div>
                </div>
              </div>
            )}
            <div className="consent-box">
              <div className="consent-checkbox">
                <input type="checkbox" id="consent-check" checked={form.consent} onChange={(e) => set('consent', e.target.checked)} />
                <label htmlFor="consent-check">Patient has confirmed consent per Data Privacy Act (RA 10173).</label>
              </div>
            </div>
            <div className="wizard-actions">
              <button type="button" className="btn-secondary" onClick={() => setStep(2)}>
                <i className="ti ti-arrow-left" /> Back
              </button>
              <button type="button" className="btn-primary" onClick={submit}>
                <i className="ti ti-check" /> Register & Add to Queue
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
