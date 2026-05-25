import { useApp } from '../context/AppContext';
import { APPT_DOT_MAP, fullName, statusBadge } from '../utils/helpers';

export default function DashboardPage() {
  const { patientsDB, queueDB, appointmentsDB, navigateTo } = useApp();
  const waiting = queueDB.filter((q) => q.status === 'Waiting').length;
  const inProg = queueDB.find((q) => q.status === 'In Progress');
  const done = queueDB.filter((q) => q.status === 'Done').length;
  const todayAppts = appointmentsDB.filter((a) => a.date === '2026-05-18');
  const recent = [...patientsDB].slice(-5).reverse();

  return (
    <>
      <div className="content-header">
        <div>
          <div className="content-title">Dashboard</div>
          <div className="content-sub">Monday, May 18, 2026 · Sampaloc, Manila</div>
        </div>
      </div>
      <div className="hero-panel">
        <div className="hero-title">
          <span className="live-dot" />
          Live Queue — <span>{waiting}</span> Patients Waiting
        </div>
        <div className="hero-content">
          {inProg ? (
            <>
              Currently serving: <strong>{inProg.name}</strong> (#{inProg.queueNum}) · {inProg.service} ·{' '}
              {inProg.doctor}
            </>
          ) : (
            'No patient currently being served.'
          )}
        </div>
        <button type="button" className="hero-cta" onClick={() => navigateTo('queue')}>
          <i className="ti ti-layout-list" /> Manage Queue
        </button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <button
          type="button"
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', padding: '14px 24px', fontSize: 16 }}
          onClick={() => navigateTo('registration')}
        >
          <i className="ti ti-user-plus" style={{ fontSize: 20 }} /> Register New Patient
        </button>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Today&apos;s Patients</div>
          <div className="stat-value">{patientsDB.length}</div>
          <div className="stat-delta up">
            <i className="ti ti-trending-up" /> +12% vs yesterday
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">In Queue</div>
          <div className="stat-value">{waiting}</div>
          <div className="stat-delta down">
            <i className="ti ti-clock" /> Avg wait 18 min
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Appointments</div>
          <div className="stat-value">{todayAppts.length}</div>
          <div className="stat-delta up">
            <i className="ti ti-calendar" />{' '}
            {todayAppts.filter((a) => a.status === 'Waiting' || a.status === 'Confirmed').length} remaining
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Completed</div>
          <div className="stat-value">{done}</div>
          <div className="stat-delta up">
            <i className="ti ti-check" /> {done} served
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">
            <i className="ti ti-calendar" /> Today&apos;s Appointments
          </div>
          <button type="button" className="panel-action" onClick={() => navigateTo('appointments')}>
            View all & Schedule new →
          </button>
        </div>
        {todayAppts.slice(0, 6).map((a) => (
          <div key={a.id} className="appt-row">
            <div className="appt-time-col">{a.time}</div>
            <div className={`appt-dot ${APPT_DOT_MAP[a.status] || 'pending'}`} />
            <div className="appt-info">
              <div className="appt-name">{a.patientName}</div>
              <div className="appt-type">
                {a.service} · {a.doctor}
              </div>
            </div>
            {statusBadge(a.status)}
          </div>
        ))}
      </div>
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">
            <i className="ti ti-list" /> Recent Patients
          </div>
          <button type="button" className="panel-action" onClick={() => navigateTo('patients')}>
            View all →
          </button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Service</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((p) => (
              <tr key={p.id}>
                <td>
                  <strong>{fullName(p)}</strong>
                  <br />
                  <small style={{ color: 'var(--text2)' }}>{p.id}</small>
                </td>
                <td>{p.service}</td>
                <td>{p.doctor}</td>
                <td>{statusBadge(p.status)}</td>
                <td>{p.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
