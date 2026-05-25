import { fullName, StatusBadge } from '../utils/helpers';

const PATIENTS_PER_PAGE = 8;

export default function PatientsPage({
  patients,
  patientChipFilter,
  patientPage,
  patientSearch,
  patientServiceFilter,
  patientDoctorFilter,
  onSetChip,
  onSearchChange,
  onServiceFilterChange,
  onDoctorFilterChange,
  onSetPage,
  onNavigate,
  onOpenExport,
  onOpenPatient,
  onOpenEdit,
}) {
  const q = patientSearch.toLowerCase();
  const filtered = patients.filter((p) => {
    const mQ = !q || fullName(p).toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.contact.includes(q);
    const mS = patientChipFilter === 'all' || p.status === patientChipFilter;
    const mSvc = !patientServiceFilter || p.serviceCategory === patientServiceFilter;
    const mDoc = !patientDoctorFilter || p.doctor === patientDoctorFilter;
    return mQ && mS && mSvc && mDoc;
  });
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / PATIENTS_PER_PAGE));
  const page = Math.min(patientPage, pages);
  const slice = filtered.slice((page - 1) * PATIENTS_PER_PAGE, page * PATIENTS_PER_PAGE);
  const ct = `Showing ${slice.length} of ${total} records`;
  const pagination =
    pages > 1
      ? Array.from({ length: pages }, (_, i) => (
          <button
            key={i + 1}
            type="button"
            className={i + 1 === page ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '4px 10px', fontSize: 11 }}
            onClick={() => onSetPage(i + 1)}
          >
            {i + 1}
          </button>
        ))
      : null;

  const chips = ['all', 'In Progress', 'Waiting', 'Done', 'Urgent'];
  const chipLabels = { all: 'All', 'In Progress': 'Active', Waiting: 'Waiting', Done: 'Done', Urgent: 'Urgent' };

  return (
    <div className="page active" id="page-patients">
      <div className="content-header">
        <div>
          <div className="content-title">Patients</div>
          <div className="content-sub" id="patients-sub">
            All registered patients · {patients.length} records
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="btn-secondary" onClick={onOpenExport} title="Export patient records">
            <i className="ti ti-download" /> Export
          </button>
          <button type="button" className="btn-primary" onClick={() => onNavigate('registration')}>
            <i className="ti ti-user-plus" /> Register New
          </button>
        </div>
      </div>
      <div style={{ marginBottom: 14 }}>
        <div className="search-wrap" style={{ padding: '12px 16px' }}>
          <i className="ti ti-search" style={{ fontSize: 18 }} />
          <input
            type="text"
            id="patient-search"
            placeholder="Search by name, ID, or phone number…"
            style={{ fontSize: 15 }}
            value={patientSearch}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      <div className="filter-chips" id="patient-status-chips">
        {chips.map((val) => (
          <div
            key={val}
            className={`filter-chip${patientChipFilter === val ? ' active' : ''}`}
            onClick={() => onSetChip(val)}
            role="button"
            tabIndex={0}
          >
            {chipLabels[val]}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <select className="filter-select" id="patient-service-filter" value={patientServiceFilter} onChange={(e) => onServiceFilterChange(e.target.value)}>
          <option value="">All Services</option>
          <option>Laboratory</option>
          <option>Imaging</option>
          <option>Cardiology</option>
          <option>OB-Gyne</option>
          <option>Consultation</option>
        </select>
        <select className="filter-select" id="patient-doctor-filter" value={patientDoctorFilter} onChange={(e) => onDoctorFilterChange(e.target.value)}>
          <option value="">All Doctors</option>
          <option>Dr. Cruz</option>
          <option>Dr. Ramos</option>
          <option>Dr. Reyes</option>
          <option>Dr. Lim</option>
          <option>Dr. Santos</option>
        </select>
      </div>
      <div className="stats-grid" id="patients-stats">
        <div className="stat-card">
          <div className="stat-label">Total Patients</div>
          <div className="stat-value">{patients.length}</div>
          <div className="stat-delta up">
            <i className="ti ti-trending-up" /> +8 this week
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Active Today</div>
          <div className="stat-value">{patients.filter((p) => p.status === 'In Progress').length}</div>
          <div className="stat-delta up">
            <i className="ti ti-users" /> in queue
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Senior Citizens</div>
          <div className="stat-value">{patients.filter((p) => p.age >= 60).length}</div>
          <div className="stat-delta up">
            <i className="ti ti-heart" /> 20% discounted
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">HMO Patients</div>
          <div className="stat-value">{patients.filter((p) => p.hmo && p.hmo !== 'None').length}</div>
          <div className="stat-delta up">
            <i className="ti ti-shield" /> insured
          </div>
        </div>
      </div>
      <div
        style={{
          padding: '8px 12px',
          background: 'var(--bg3)',
          borderRadius: '8px 8px 0 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 13, color: 'var(--text2)' }} id="patients-count-top">
          {ct}
        </span>
        <div id="patients-pagination-top" style={{ display: 'flex', gap: 4 }}>
          {pagination}
        </div>
      </div>
      <div className="panel" style={{ marginTop: 0, borderRadius: '0 0 8px 8px' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Full Name</th>
              <th>Age / Sex</th>
              <th>Contact</th>
              <th>Service</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="patients-table-body">
            {slice.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>
                  <strong>{fullName(p)}</strong>
                </td>
                <td>
                  {p.age} / {p.sex}
                </td>
                <td>{p.contact}</td>
                <td>{p.service}</td>
                <td>{p.doctor}</td>
                <td>
                  <StatusBadge status={p.status} />
                </td>
                <td>
                  <div className="actions">
                    <button type="button" className="btn-secondary icon-btn" style={{ padding: '6px 10px' }} onClick={() => onOpenPatient(p.id)} title="View Profile">
                      <i className="ti ti-eye" />
                    </button>
                    <button type="button" className="btn-secondary icon-btn" style={{ padding: '6px 10px' }} onClick={() => onOpenEdit(p.id)} title="Edit Record">
                      <i className="ti ti-edit" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            padding: '10px 16px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: 13, color: 'var(--text2)' }} id="patients-count-bottom">
            {ct}
          </span>
          <div id="patients-pagination-bottom" style={{ display: 'flex', gap: 4 }}>
            {pagination}
          </div>
        </div>
      </div>
    </div>
  );
}
