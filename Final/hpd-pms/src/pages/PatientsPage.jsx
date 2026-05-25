import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { fullName, statusBadge } from '../utils/helpers';

const PER_PAGE = 8;
const CHIPS = ['all', 'In Progress', 'Waiting', 'Done', 'Urgent'];

export default function PatientsPage() {
  const { patientsDB, navigateTo, openModal, setPatientModalId } = useApp();
  const [search, setSearch] = useState('');
  const [chip, setChip] = useState('all');
  const [svc, setSvc] = useState('');
  const [doc, setDoc] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return patientsDB.filter((p) => {
      const mQ = !q || fullName(p).toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.contact.includes(q);
      const mS = chip === 'all' || p.status === chip;
      const mSvc = !svc || p.serviceCategory === svc;
      const mDoc = !doc || p.doctor === doc;
      return mQ && mS && mSvc && mDoc;
    });
  }, [patientsDB, search, chip, svc, doc]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const slice = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const countText = `Showing ${slice.length} of ${filtered.length} records`;

  const openProfile = (id) => {
    setPatientModalId(id);
    openModal('patient-modal');
  };

  return (
    <>
      <div className="content-header">
        <div>
          <div className="content-title">Patients</div>
          <div className="content-sub">All registered patients · {patientsDB.length} records</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="btn-secondary" onClick={() => openModal('export-modal')}>
            <i className="ti ti-download" /> Export
          </button>
          <button type="button" className="btn-primary" onClick={() => navigateTo('registration')}>
            <i className="ti ti-user-plus" /> Register New
          </button>
        </div>
      </div>
      <div style={{ marginBottom: 14 }}>
        <div className="search-wrap" style={{ padding: '12px 16px' }}>
          <i className="ti ti-search" style={{ fontSize: 18 }} />
          <input
            type="text"
            placeholder="Search by name, ID, or phone number…"
            style={{ fontSize: 15 }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>
      <div className="filter-chips">
        {CHIPS.map((c) => (
          <div
            key={c}
            className={`filter-chip${chip === c ? ' active' : ''}`}
            onClick={() => {
              setChip(c);
              setPage(1);
            }}
            role="button"
            tabIndex={0}
          >
            {c === 'all' ? 'All' : c === 'In Progress' ? 'Active' : c}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <select className="filter-select" value={svc} onChange={(e) => { setSvc(e.target.value); setPage(1); }}>
          <option value="">All Services</option>
          <option>Laboratory</option>
          <option>Imaging</option>
          <option>Cardiology</option>
          <option>OB-Gyne</option>
          <option>Consultation</option>
        </select>
        <select className="filter-select" value={doc} onChange={(e) => { setDoc(e.target.value); setPage(1); }}>
          <option value="">All Doctors</option>
          <option>Dr. Cruz</option>
          <option>Dr. Ramos</option>
          <option>Dr. Reyes</option>
          <option>Dr. Lim</option>
          <option>Dr. Santos</option>
        </select>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Patients</div>
          <div className="stat-value">{patientsDB.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Active Today</div>
          <div className="stat-value">{patientsDB.filter((p) => p.status === 'In Progress').length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Senior Citizens</div>
          <div className="stat-value">{patientsDB.filter((p) => p.age >= 60).length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">HMO Patients</div>
          <div className="stat-value">{patientsDB.filter((p) => p.hmo && p.hmo !== 'None').length}</div>
        </div>
      </div>
      <div style={{ padding: '8px 12px', background: 'var(--bg3)', borderRadius: '8px 8px 0 0', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13, color: 'var(--text2)' }}>{countText}</span>
        <Pagination page={current} pages={pages} onChange={setPage} />
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
          <tbody>
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
                <td>{statusBadge(p.status)}</td>
                <td>
                  <div className="actions">
                    <button type="button" className="btn-secondary icon-btn" style={{ padding: '6px 10px' }} onClick={() => openProfile(p.id)}>
                      <i className="ti ti-eye" />
                    </button>
                    <button type="button" className="btn-secondary icon-btn" style={{ padding: '6px 10px' }} onClick={() => openModal('edit-patient-modal')}>
                      <i className="ti ti-edit" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '10px 16px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, color: 'var(--text2)' }}>{countText}</span>
          <Pagination page={current} pages={pages} onChange={setPage} />
        </div>
      </div>
    </>
  );
}

function Pagination({ page, pages, onChange }) {
  if (pages <= 1) return null;
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          type="button"
          className={i + 1 === page ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '4px 10px', fontSize: 11 }}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
