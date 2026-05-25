import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../common/Modal';
import { fullName, normalizeAppt } from '../../utils/helpers';

export default function ApptModal() {
  const { patientsDB, appointmentsDB, setAppointmentsDB, sbInsertAppointment, closeModal, showToast, loadAll } = useApp();
  const [pid, setPid] = useState('');
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('Dr. Cruz');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('8:00 AM');

  const save = async () => {
    if (!pid || !service || !date) {
      showToast('Please fill in all required fields.');
      return;
    }
    const p = patientsDB.find((x) => x.id === pid);
    const row = {
      patient_id: pid,
      patient_name: fullName(p),
      service,
      doctor,
      date,
      time,
      status: 'Confirmed',
      complaint: '',
    };
    const saved = await sbInsertAppointment(row);
    if (saved) {
      setAppointmentsDB([...appointmentsDB, normalizeAppt(saved)]);
      closeModal('appt-modal');
      showToast(`Appointment scheduled for ${fullName(p)} on ${date} at ${time}`);
      loadAll();
    }
  };

  return (
    <Modal
      id="appt-modal"
      title="New Appointment"
      footer={
        <>
          <button type="button" className="btn-secondary" onClick={() => closeModal('appt-modal')}>
            Cancel
          </button>
          <button type="button" className="btn-primary" onClick={save}>
            <i className="ti ti-check" /> Confirm Appointment
          </button>
        </>
      }
    >
      <div className="form-grid">
        <div className="form-group full">
          <label className="form-label">Patient</label>
          <select className="form-select" value={pid} onChange={(e) => setPid(e.target.value)}>
            <option value="">-- Select Patient --</option>
            {patientsDB.map((p) => (
              <option key={p.id} value={p.id}>
                {fullName(p)} ({p.id})
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Service</label>
          <select className="form-select" value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">-- Select --</option>
            <option>CBC</option>
            <option>Urinalysis</option>
            <option>ECG</option>
            <option>Consultation</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Doctor</label>
          <select className="form-select" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option>Dr. Cruz</option>
            <option>Dr. Ramos</option>
            <option>Dr. Reyes</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Date</label>
          <input type="date" className="form-input" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Time</label>
          <select className="form-select" value={time} onChange={(e) => setTime(e.target.value)}>
            <option>8:00 AM</option>
            <option>9:00 AM</option>
            <option>10:00 AM</option>
          </select>
        </div>
      </div>
    </Modal>
  );
}
