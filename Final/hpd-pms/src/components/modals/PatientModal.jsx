import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../common/Modal';
import { fullName, initials, statusBadge } from '../../utils/helpers';

export default function PatientModal() {
  const {
    patientModalId,
    getPatient,
    appointmentsDB,
    vitalSignsDB,
    labResultsDB,
    certificatesDB,
    invoicesDB,
    navigateTo,
    closeModal,
    setPatientModalTab,
    patientModalTab,
  } = useApp();
  const [tab, setTab] = useState('visits');
  const p = patientModalId ? getPatient(patientModalId) : null;
  if (!p) return null;

  const switchTab = (t) => {
    setTab(t);
    setPatientModalTab(t);
  };

  const pid = p.id;
  let body = null;
  if (tab === 'visits') {
    const visits = appointmentsDB.filter((a) => a.patientId === pid);
    body = (
      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Service</th>
            <th>Doctor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((v) => (
            <tr key={v.id}>
              <td>{v.date}</td>
              <td>{v.service}</td>
              <td>{v.doctor}</td>
              <td>{statusBadge(v.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (tab === 'vitals') {
    body = vitalSignsDB
      .filter((v) => v.patientId === pid)
      .map((v) => (
        <div key={v.id} className="emr-panel">
          <div className="emr-section-title">{v.date}</div>
          <div>
            BP {v.systolic}/{v.diastolic} · HR {v.hr} bpm
          </div>
        </div>
      ));
  } else if (tab === 'billing') {
    const bills = invoicesDB.filter((i) => i.patientId === pid);
    body = (
      <table className="data-table">
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>₱{b.amount.toLocaleString()}</td>
              <td>{statusBadge(b.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    body = <p style={{ color: 'var(--text2)' }}>No records.</p>;
  }

  return (
    <Modal
      id="patient-modal"
      title="Patient Profile"
      footer={
        <>
          <button type="button" className="btn-secondary" onClick={() => closeModal('patient-modal')}>
            Close
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              navigateTo('billing');
              closeModal('patient-modal');
            }}
          >
            <i className="ti ti-receipt" /> View Invoice
          </button>
        </>
      }
    >
      <div className="patient-profile-card" style={{ background: 'var(--hp-teal-bg)' }}>
        <div className="patient-big-avatar">{initials(p)}</div>
        <div>
          <div className="patient-profile-name">{fullName(p)}</div>
          <div className="patient-profile-meta">
            {p.id} · {p.sex === 'F' ? 'Female' : 'Male'}, {p.age} yrs
          </div>
          <div className="patient-profile-tags">{statusBadge(p.status)}</div>
        </div>
      </div>
      <div className="tab-bar">
        {['visits', 'vitals', 'billing'].map((t) => (
          <button key={t} type="button" className={`tab-btn${tab === t ? ' active' : ''}`} onClick={() => switchTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      <div>{body}</div>
    </Modal>
  );
}
