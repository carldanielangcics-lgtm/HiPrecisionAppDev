export function statusBadge(s) {
  const map = {
    'In Progress': 'badge-active',
    Waiting: 'badge-waiting',
    Done: 'badge-done',
    Urgent: 'badge-urgent',
    Confirmed: 'badge-waiting',
    Pending: 'badge-purple',
    HMO: 'badge-waiting',
    Overdue: 'badge-urgent',
    Paid: 'badge-done',
  };
  return <span className={`badge ${map[s] || 'badge-grey'}`}>{s}</span>;
}

export function waitBadge(min) {
  if (min < 15) return <span className="wait-badge wait-green">{min} min</span>;
  if (min <= 30) return <span className="wait-badge wait-amber">{min} min</span>;
  return <span className="wait-badge wait-red">{min} min</span>;
}

export function fullName(p) {
  return `${p.lastName}, ${p.firstName}`;
}

export function initials(p) {
  return (p.lastName[0] || '') + (p.firstName[0] || '');
}

export function normalizePatient(r) {
  return {
    id: r.id,
    lastName: r.last_name || '',
    firstName: r.first_name || '',
    age: r.age || 0,
    sex: r.sex || 'M',
    contact: r.contact || '',
    service: r.service || '',
    serviceCategory: r.service_category || 'Laboratory',
    doctor: r.doctor || '',
    status: r.status || 'Waiting',
    time: r.time || '',
    dob: r.dob || '',
    address: r.address || '',
    hmo: r.hmo || 'None',
    email: r.email || '',
    ...r,
  };
}

export function normalizeAppt(r) {
  return {
    id: r.id,
    patientId: r.patient_id || '',
    patientName: r.patient_name || '',
    service: r.service || '',
    doctor: r.doctor || '',
    date: r.date || '',
    time: r.time || '',
    status: r.status || 'Pending',
    complaint: r.complaint || '',
    ...r,
  };
}

export function normalizeQueue(r) {
  return {
    id: r.id,
    patientId: r.patient_id || '',
    name: r.name || '',
    service: r.service || '',
    doctor: r.doctor || '',
    status: r.status || 'Waiting',
    waitMin: r.wait_min || 0,
    queueNum: r.queue_num || r.queueNum || 0,
    urgent: r.urgent || false,
    startTime: r.start_time || '',
    endTime: r.end_time || '',
    ...r,
  };
}

export function normalizeInvoice(r) {
  return {
    id: r.id,
    patientId: r.patient_id || '',
    patientName: r.patient_name || '',
    service: r.service || '',
    amount: r.amount || 0,
    method: r.method || 'Cash',
    status: r.status || 'Pending',
    date: r.date || '',
    remarks: r.remarks || '',
    ...r,
  };
}

export const APPT_DOT_MAP = {
  Done: 'done',
  'In Progress': 'now',
  Waiting: 'pending',
  Urgent: 'urgent',
  Confirmed: 'pending',
  Pending: 'pending',
};
