const REV_DATA = [
  { day: '1', v: 62 },
  { day: '2', v: 75 },
  { day: '3', v: 55 },
  { day: '5', v: 88 },
  { day: '6', v: 91 },
  { day: '8', v: 70 },
  { day: '9', v: 82 },
  { day: '10', v: 67 },
  { day: '12', v: 95 },
  { day: '13', v: 88 },
  { day: '14', v: 72 },
  { day: '15', v: 100 },
  { day: '16', v: 84 },
  { day: '18', v: 74 },
];

export default function ReportsPage({ onToast }) {
  const maxV = Math.max(...REV_DATA.map((d) => d.v));

  return (
    <div className="page active" id="page-reports">
      <div className="content-header">
        <div>
          <div className="content-title">Reports &amp; Analytics</div>
          <div className="content-sub">Generate and download operational reports</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <select className="filter-select" style={{ fontSize: 13 }} defaultValue="This Month">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>Custom Range</option>
          </select>
          <button type="button" className="btn-primary" title="Export all reports" onClick={() => onToast('Exporting all reports…')}>
            <i className="ti ti-download" /> Export All
          </button>
        </div>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Monthly Patients</div>
          <div className="stat-value">1,204</div>
          <div className="stat-delta up">
            <i className="ti ti-trending-up" /> +9% vs last month
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Monthly Revenue</div>
          <div className="stat-value">₱384K</div>
          <div className="stat-delta up">
            <i className="ti ti-trending-up" /> +14% growth
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Lab Tests Done</div>
          <div className="stat-value">876</div>
          <div className="stat-delta up">
            <i className="ti ti-flask" /> 72% of services
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg Wait Time</div>
          <div className="stat-value">21 min</div>
          <div className="stat-delta up">
            <i className="ti ti-clock" /> -3 min improvement
          </div>
        </div>
      </div>
      <div className="two-col-equal">
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <i className="ti ti-chart-bar" /> Daily Revenue — May 2026
            </div>
            <span style={{ fontSize: 12, color: 'var(--text2)' }}>₱384,200 total</span>
          </div>
          <div className="chart-wrap">
            <div className="chart-bar-group" id="rev-chart">
              {REV_DATA.map((d) => {
                const pct = d.v ? Math.round((d.v / maxV) * 90) + 10 : 0;
                return (
                  <div
                    key={d.day}
                    className="chart-bar"
                    style={{ height: `${pct}%` }}
                    title={`May ${d.day}: ₱${d.v}K`}
                  >
                    <span>₱{d.v}K</span>
                  </div>
                );
              })}
            </div>
            <div className="chart-labels" id="rev-labels">
              {REV_DATA.map((d) => (
                <div key={d.day} className="chart-label">
                  {d.day}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <i className="ti ti-chart-pie" /> Service Breakdown
            </div>
          </div>
          <div style={{ padding: '12px 16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Laboratory', pct: 38, amt: '₱146K', color: 'var(--hp-teal)' },
                { label: 'Imaging / X-Ray', pct: 27, amt: '₱104K', color: 'var(--hp-teal-mid)' },
                { label: 'Cardiology', pct: 20, amt: '₱77K', color: 'var(--hp-teal-light)' },
                { label: 'Consultation', pct: 10, amt: '₱38K', color: 'var(--hp-amber)' },
                { label: 'Home Service', pct: 5, amt: '₱19K', color: 'var(--hp-red)' },
              ].map((row) => (
                <div key={row.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 4 }}>
                    <span>{row.label}</span>
                    <strong>
                      {row.pct}% · {row.amt}
                    </strong>
                  </div>
                  <div style={{ background: 'var(--bg3)', borderRadius: 4, height: 7 }}>
                    <div style={{ background: row.color, width: `${row.pct}%`, height: '100%', borderRadius: 4 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">
            <i className="ti ti-files" /> Available Reports
          </div>
        </div>
        <div style={{ padding: '12px 16px' }}>
          {[
            { icon: 'green', ti: 'ti-users', name: 'Daily Patient Census', meta: 'Generated today · 47 patients · May 18, 2026' },
            { icon: 'blue', ti: 'ti-file-invoice', name: 'Monthly Revenue Report', meta: 'May 2026 · ₱384,200 total · 1,204 transactions' },
            { icon: 'amber', ti: 'ti-flask', name: 'Laboratory Utilization Report', meta: 'May 2026 · 876 tests · Top: CBC (234 requests)' },
            { icon: 'red', ti: 'ti-heart-rate-monitor', name: 'Queue Performance Report', meta: 'May 2026 · Avg wait: 21 min · Peak: 10:00–11:00 AM' },
          ].map((r) => (
            <div key={r.name} className="report-card">
              <div className="report-card-left">
                <div className={`report-icon ${r.icon}`}>
                  <i className={`ti ${r.ti}`} />
                </div>
                <div>
                  <div className="report-name">{r.name}</div>
                  <div className="report-meta">{r.meta}</div>
                </div>
              </div>
              <div className="report-actions">
                <button type="button" className="btn-secondary" style={{ fontSize: 13, padding: '8px 14px' }}>
                  <i className="ti ti-eye" /> Preview
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  style={{ fontSize: 13, padding: '8px 14px' }}
                  onClick={() => onToast(`Downloading ${r.name}…`)}
                >
                  <i className="ti ti-download" /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
