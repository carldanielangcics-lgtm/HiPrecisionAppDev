import { fullName, initials, StatusBadge, statusBadgeClass } from '../utils/helpers';

function ModalOverlay({ id, open, onClose, children, width }) {
  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      id={id}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal" style={width ? { width } : undefined}>
        {children}
      </div>
    </div>
  );
}

export function PatientModal({
  open,
  onClose,
  patient,
  activeTab,
  onTabChange,
  tabContent,
  onViewBilling,
}) {
  if (!patient) return null;
  return (
    <ModalOverlay id="patient-modal" open={open} onClose={onClose}>
      <div className="modal-header">
        <div className="modal-title">Patient Profile</div>
        <button type="button" className="modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="modal-body" id="patient-modal-body">
        <div className="patient-profile-card" style={{ background: 'var(--hp-teal-bg)' }} id="patient-modal-header">
          <div className="patient-big-avatar">{initials(patient)}</div>
          <div>
            <div className="patient-profile-name">{fullName(patient)}</div>
            <div className="patient-profile-meta">
              {patient.id} · {patient.sex === 'F' ? 'Female' : 'Male'}, {patient.age} yrs · {patient.contact}
            </div>
            <div className="patient-profile-tags">
              <StatusBadge status={patient.status} />
            </div>
          </div>
        </div>
        <div className="tab-bar">
          {['visits', 'vitals', 'labs', 'labexams', 'billing'].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`tab-btn${activeTab === tab ? ' active' : ''}`}
              onClick={() => onTabChange(tab)}
            >
              {tab === 'visits' ? 'Visit History' : tab === 'vitals' ? 'Vitals' : tab === 'labs' ? 'Lab Results' : tab === 'labexams' ? 'Lab Exams' : 'Billing'}
            </button>
          ))}
        </div>
        <div id="patient-tab-content">{tabContent}</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn-secondary" onClick={onClose}>
          Close
        </button>
        <button type="button" className="btn-primary" onClick={onViewBilling}>
          <i className="ti ti-receipt" /> View Invoice
        </button>
      </div>
    </ModalOverlay>
  );
}

export function EditPatientModal({ open, onClose, editForm, onEditChange, onSave }) {
  const set = (field) => (e) => onEditChange(field, e.target.value);
  return (
    <ModalOverlay id="edit-patient-modal" open={open} onClose={onClose}>
      <div className="modal-header">
        <div className="modal-title">Edit Patient</div>
        <button type="button" className="modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="ep-last-name" className="form-label">Last Name</label>
            <input id="ep-last-name" type="text" className="form-input" value={editForm.lastName} onChange={set('lastName')} />
          </div>
          <div className="form-group">
            <label htmlFor="ep-first-name" className="form-label">First Name</label>
            <input id="ep-first-name" type="text" className="form-input" value={editForm.firstName} onChange={set('firstName')} />
          </div>
          <div className="form-group">
            <label htmlFor="ep-contact" className="form-label">Contact</label>
            <input id="ep-contact" type="text" className="form-input" value={editForm.contact} onChange={set('contact')} />
          </div>
          <div className="form-group">
            <label htmlFor="ep-status" className="form-label">Status</label>
            <select id="ep-status" className="form-select" value={editForm.status} onChange={set('status')}>
              <option>Waiting</option>
              <option>In Progress</option>
              <option>Done</option>
              <option>Urgent</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ep-service" className="form-label">Service</label>
            <input id="ep-service" type="text" className="form-input" value={editForm.service} onChange={set('service')} />
          </div>
          <div className="form-group">
            <label htmlFor="ep-doctor" className="form-label">Doctor</label>
            <select id="ep-doctor" className="form-select" value={editForm.doctor} onChange={set('doctor')}>
              <option>Dr. Cruz</option>
              <option>Dr. Ramos</option>
              <option>Dr. Reyes</option>
              <option>Dr. Lim</option>
              <option>Dr. Santos</option>
            </select>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn-secondary" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="btn-primary" onClick={onSave}>
          <i className="ti ti-check" /> Save Changes
        </button>
      </div>
    </ModalOverlay>
  );
}

export function ApptModal({ open, onClose, patients, apptForm, onApptChange, onSave }) {
  const set = (field) => (e) => onApptChange(field, e.target.value);
  return (
    <ModalOverlay id="appt-modal" open={open} onClose={onClose}>
      <div className="modal-header">
        <div className="modal-title">New Appointment</div>
        <button type="button" className="modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group full">
            <label htmlFor="appt-patient" className="form-label">
              Patient <span style={{ color: 'var(--hp-red)' }}>*</span>
            </label>
            <select id="appt-patient" className="form-select" value={apptForm.patientId} onChange={set('patientId')}>
              <option value="">-- Select Patient --</option>
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {fullName(p)} ({p.id})
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="appt-service" className="form-label">
              Service <span style={{ color: 'var(--hp-red)' }}>*</span>
            </label>
            <select id="appt-service" className="form-select" value={apptForm.service} onChange={set('service')}>
              <option value="">-- Select --</option>
              <option>CBC</option>
              <option>Urinalysis</option>
              <option>Chest X-Ray</option>
              <option>ECG</option>
              <option>Ultrasound</option>
              <option>CT-Scan</option>
              <option>Consultation</option>
              <option>Mammography</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="appt-doctor" className="form-label">Doctor</label>
            <select id="appt-doctor" className="form-select" value={apptForm.doctor} onChange={set('doctor')}>
              <option>Dr. Cruz</option>
              <option>Dr. Ramos</option>
              <option>Dr. Reyes</option>
              <option>Dr. Lim</option>
              <option>Dr. Santos</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="appt-date" className="form-label">
              Date <span style={{ color: 'var(--hp-red)' }}>*</span>
            </label>
            <input id="appt-date" type="date" className="form-input" value={apptForm.date} onChange={set('date')} />
          </div>
          <div className="form-group">
            <label htmlFor="appt-time" className="form-label">Time</label>
            <select id="appt-time" className="form-select" value={apptForm.time} onChange={set('time')}>
              <option>8:00 AM</option>
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
            </select>
          </div>
          <div className="form-group full">
            <label htmlFor="appt-notes" className="form-label">Notes</label>
            <textarea id="appt-notes" className="form-textarea" value={apptForm.notes} onChange={set('notes')} style={{ minHeight: 56 }} />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn-secondary" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="btn-primary" onClick={onSave}>
          <i className="ti ti-check" /> Confirm Appointment
        </button>
      </div>
    </ModalOverlay>
  );
}

export function BillingModal({ open, onClose, patients, invForm, onInvChange, onSave }) {
  const set = (field) => (e) => onInvChange(field, e.target.value);
  return (
    <ModalOverlay id="billing-modal" open={open} onClose={onClose}>
      <div className="modal-header">
        <div className="modal-title">New Invoice</div>
        <button type="button" className="modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-grid">
          <div className="form-group full">
            <label htmlFor="inv-patient" className="form-label">
              Patient <span style={{ color: 'var(--hp-red)' }}>*</span>
            </label>
            <select id="inv-patient" className="form-select" value={invForm.patientId} onChange={set('patientId')}>
              <option value="">-- Select Patient --</option>
              {patients.map((p) => (
                <option key={p.id} value={p.id}>
                  {fullName(p)} ({p.id})
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inv-service" className="form-label">Service</label>
            <select id="inv-service" className="form-select" value={invForm.service} onChange={set('service')}>
              <option>CBC</option>
              <option>Urinalysis</option>
              <option>Chest X-Ray</option>
              <option>ECG</option>
              <option>CT-Scan</option>
              <option>Consultation</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inv-amount" className="form-label">
              Amount (₱) <span style={{ color: 'var(--hp-red)' }}>*</span>
            </label>
            <input id="inv-amount" type="number" className="form-input" value={invForm.amount} onChange={set('amount')} placeholder="0.00" />
          </div>
          <div className="form-group">
            <label htmlFor="inv-method" className="form-label">Payment Method</label>
            <select id="inv-method" className="form-select" value={invForm.method} onChange={set('method')}>
              <option>Cash</option>
              <option>GCash / Maya</option>
              <option>Credit Card</option>
              <option>HMO</option>
              <option>PhilHealth</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inv-discount" className="form-label">Discount</label>
            <select id="inv-discount" className="form-select" value={invForm.discount} onChange={set('discount')}>
              <option>None</option>
              <option>Senior Citizen (20%)</option>
              <option>PWD (20%)</option>
              <option>Employee</option>
            </select>
          </div>
          <div className="form-group full">
            <label htmlFor="inv-remarks" className="form-label">Remarks</label>
            <textarea id="inv-remarks" className="form-textarea" value={invForm.remarks} onChange={set('remarks')} style={{ minHeight: 52 }} />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn-secondary" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="btn-primary" onClick={onSave}>
          <i className="ti ti-receipt" /> Create Invoice
        </button>
      </div>
    </ModalOverlay>
  );
}

export function ExportModal({ open, onClose, onExport }) {
  return (
    <ModalOverlay id="export-modal" open={open} onClose={onClose} width={380}>
      <div className="modal-header">
        <div className="modal-title">Export Patient Records</div>
        <button type="button" className="modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="modal-body">
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label htmlFor="exp-format" className="form-label">Format</label>
          <select id="exp-format" className="form-select">
            <option>PDF</option>
            <option>CSV / Excel</option>
          </select>
        </div>
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label htmlFor="exp-date" className="form-label">Date Range</label>
          <input id="exp-date" type="date" className="form-input" />
        </div>
        <div style={{ background: '#FEF5E7', border: '1px solid #f5d89a', borderRadius: 8, padding: '10px 13px', fontSize: 13, color: '#633806' }}>
          <i className="ti ti-lock" style={{ marginRight: 5 }} />
          Exported files are protected under the Data Privacy Act of 2012. Handle with care.
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn-secondary" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="btn-primary" onClick={onExport}>
          <i className="ti ti-download" /> Export
        </button>
      </div>
    </ModalOverlay>
  );
}

export function renderPatientTabContent(tab, pid, { appointments, vitalSigns, labResults, certificates, invoices }) {
  if (tab === 'visits') {
    const visits = appointments.filter((a) => a.patientId === pid);
    return (
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
          {visits.length ? (
            visits.map((v) => (
              <tr key={v.id}>
                <td>{v.date}</td>
                <td>{v.service}</td>
                <td>{v.doctor}</td>
                <td>
                  <StatusBadge status={v.status} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', color: 'var(--text2)' }}>
                No visits
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  if (tab === 'vitals') {
    const vs = vitalSigns.filter((v) => v.patientId === pid);
    return vs.length ? (
      vs.map((v) => (
        <div key={v.id} className="emr-panel">
          <div className="emr-section-title">{v.date}</div>
          <div className="vitals-grid">
            <div className="vitals-item">
              <div className="vitals-label">BP</div>
              <div className="vitals-value">
                {v.systolic}/{v.diastolic}
              </div>
            </div>
            <div className="vitals-item">
              <div className="vitals-label">HR</div>
              <div className="vitals-value">{v.hr} bpm</div>
            </div>
            <div className="vitals-item">
              <div className="vitals-label">Temp</div>
              <div className="vitals-value">{v.temp}°C</div>
            </div>
            <div className="vitals-item">
              <div className="vitals-label">SpO₂</div>
              <div className="vitals-value">{v.spo2}%</div>
            </div>
            <div className="vitals-item">
              <div className="vitals-label">Weight</div>
              <div className="vitals-value">{v.weight} kg</div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p style={{ color: 'var(--text2)', padding: 12 }}>No vitals recorded.</p>
    );
  }
  if (tab === 'labs') {
    const labs = labResults.filter((l) => l.patientId === pid);
    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Result</th>
            <th>Reference</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {labs.length ? (
            labs.map((l) => (
              <tr key={l.id}>
                <td>{l.test}</td>
                <td>{l.result}</td>
                <td>{l.reference}</td>
                <td>
                  <span className={`badge ${statusBadgeClass(l.status === 'Normal' ? 'Done' : l.status === 'Abnormal' ? 'Waiting' : 'Urgent')}`}>
                    {l.status === 'Normal' ? 'Done' : l.status === 'Abnormal' ? 'Waiting' : 'Urgent'}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', color: 'var(--text2)' }}>
                No results
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  if (tab === 'labexams') {
    const exams = certificates.filter((c) => c.patientId === pid);
    if (!exams.length) return <p style={{ color: 'var(--text2)', padding: 12 }}>No lab exams on file.</p>;
    return exams.map((c) => (
      <div key={c.id} style={{ background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 10, padding: '14px 16px', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 8 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text1)' }}>{c.type}</div>
            <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 2 }}>
              {c.date} · {c.doctor}
            </div>
          </div>
          <span className="badge badge-active">
            <i className="ti ti-microscope" style={{ fontSize: 11 }} /> Lab Exam
          </span>
        </div>
        {c.notes ? <div style={{ fontSize: 13, color: 'var(--text1)', marginBottom: 8 }}>{c.notes}</div> : null}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {c.files.map((f) => (
            <span
              key={f}
              style={{
                background: 'rgba(13,124,107,.08)',
                border: '1px solid rgba(13,124,107,.2)',
                color: 'var(--hp-teal)',
                fontSize: 11,
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 20,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <i className="ti ti-paperclip" style={{ fontSize: 11 }} />
              {f}
            </span>
          ))}
        </div>
      </div>
    ));
  }
  if (tab === 'billing') {
    const bills = invoices.filter((i) => i.patientId === pid);
    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.length ? (
            bills.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.service}</td>
                <td>₱{b.amount.toLocaleString()}</td>
                <td>
                  <StatusBadge status={b.status} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', color: 'var(--text2)' }}>
                No invoices
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  return null;
}
