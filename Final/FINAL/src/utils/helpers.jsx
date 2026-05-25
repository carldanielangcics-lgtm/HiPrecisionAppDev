export function fullName(p) {
  return `${p.lastName}, ${p.firstName}`;
}

export function initials(p) {
  return (p.lastName[0] || '') + (p.firstName[0] || '');
}

export function statusBadgeClass(s) {
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
  return map[s] || 'badge-grey';
}

export function StatusBadge({ status }) {
  return <span className={`badge ${statusBadgeClass(status)}`}>{status}</span>;
}

export function WaitBadge({ min }) {
  if (min < 15) return <span className="wait-badge wait-green">{min} min</span>;
  if (min <= 30) return <span className="wait-badge wait-amber">{min} min</span>;
  return <span className="wait-badge wait-red">{min} min</span>;
}

export function normalizePatient(r) {
  return {
    id: r.id,
    lastName: r.last_name || r.lastName || '',
    firstName: r.first_name || r.firstName || '',
    age: r.age || 0,
    sex: r.sex || 'M',
    contact: r.contact || '',
    service: r.service || '',
    serviceCategory: r.service_category || r.serviceCategory || 'Laboratory',
    doctor: r.doctor || '',
    status: r.status || 'Waiting',
    time: r.time || '',
    dob: r.dob || '',
    address: r.address || '',
    hmo: r.hmo || 'None',
    email: r.email || '',
  };
}

export function normalizeAppt(r) {
  return {
    id: r.id,
    patientId: r.patient_id || r.patientId || '',
    patientName: r.patient_name || r.patientName || '',
    service: r.service || '',
    doctor: r.doctor || '',
    date: r.date || '',
    time: r.time || '',
    status: r.status || 'Pending',
    complaint: r.complaint || '',
  };
}

export function normalizeQueue(r) {
  return {
    id: r.id,
    patientId: r.patient_id || r.patientId || '',
    name: r.name || '',
    service: r.service || '',
    doctor: r.doctor || '',
    status: r.status || 'Waiting',
    waitMin: r.wait_min ?? r.waitMin ?? 0,
    queueNum: r.queue_num || r.queueNum || 0,
    urgent: r.urgent || false,
    startTime: r.start_time || r.startTime || '',
    endTime: r.end_time || r.endTime || '',
  };
}

export function normalizeInvoice(r) {
  return {
    id: r.id,
    patientId: r.patient_id || r.patientId || '',
    patientName: r.patient_name || r.patientName || '',
    service: r.service || '',
    amount: r.amount || 0,
    method: r.method || 'Cash',
    status: r.status || 'Pending',
    date: r.date || '',
    remarks: r.remarks || '',
  };
}

export const FRONTDESK_NAV = [
  { section: 'Main' },
  { icon: 'ti-layout-dashboard', label: 'Dashboard', page: 'dashboard' },
  { icon: 'ti-users', label: 'Patients', page: 'patients', badge: 'patients' },
  { icon: 'ti-calendar', label: 'Appointments', page: 'appointments' },
  { icon: 'ti-layout-list', label: 'Queue', page: 'queue', badge: 'queue' },
  { section: 'Services' },
  { icon: 'ti-user-plus', label: 'Registration', page: 'registration' },
  { icon: 'ti-receipt', label: 'Billing', page: 'billing' },
  { icon: 'ti-file-text', label: 'Reports', page: 'reports' },
  { section: 'Account' },
];

export const HP_LOGO_SVG = (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="13" y="4" width="6" height="24" rx="2" fill="white" />
    <rect x="4" y="13" width="24" height="6" rx="2" fill="white" />
    <circle cx="16" cy="16" r="4" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
  </svg>
);

export const HP_LOGO_SVG_SMALL = (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="13" y="4" width="6" height="24" rx="2" fill="white" />
    <rect x="4" y="13" width="24" height="6" rx="2" fill="white" />
  </svg>
);
