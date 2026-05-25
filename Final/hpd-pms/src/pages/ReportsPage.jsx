import { REVENUE_CHART_DATA } from '../data/seedData';
import { useApp } from '../context/AppContext';

export default function ReportsPage() {
  const { showToast } = useApp();
  const maxV = Math.max(...REVENUE_CHART_DATA.map((d) => d.v));

  return (
    <>
      <div className="content-header">
        <div>
          <div className="content-title">Reports & Analytics</div>
          <div className="content-sub">Generate and download operational reports</div>
        </div>
        <button type="button" className="btn-primary" onClick={() => showToast('Exporting all reports…')}>
          <i className="ti ti-download" /> Export All
        </button>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Monthly Patients</div>
          <div className="stat-value">1,204</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Monthly Revenue</div>
          <div className="stat-value">₱384K</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Lab Tests Done</div>
          <div className="stat-value">876</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg Wait Time</div>
          <div className="stat-value">21 min</div>
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">
            <i className="ti ti-chart-bar" /> Daily Revenue — May 2026
          </div>
        </div>
        <div className="chart-wrap">
          <div className="chart-bar-group">
            {REVENUE_CHART_DATA.map((d) => {
              const pct = d.v ? Math.round((d.v / maxV) * 90) + 10 : 0;
              return (
                <div key={d.day} className="chart-bar" style={{ height: `${pct}%` }} title={`May ${d.day}: ₱${d.v}K`}>
                  <span>₱{d.v}K</span>
                </div>
              );
            })}
          </div>
          <div className="chart-labels">
            {REVENUE_CHART_DATA.map((d) => (
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
            <i className="ti ti-files" /> Available Reports
          </div>
        </div>
        <div style={{ padding: '12px 16px' }}>
          <div className="report-card">
            <div className="report-card-left">
              <div className="report-icon green">
                <i className="ti ti-users" />
              </div>
              <div>
                <div className="report-name">Daily Patient Census</div>
                <div className="report-meta">Generated today · May 18, 2026</div>
              </div>
            </div>
            <button type="button" className="btn-primary" style={{ fontSize: 13, padding: '8px 14px' }} onClick={() => showToast('Downloading Daily Patient Census…')}>
              <i className="ti ti-download" /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
