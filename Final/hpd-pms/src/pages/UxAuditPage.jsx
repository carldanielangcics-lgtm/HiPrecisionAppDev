import { useState } from 'react';

const ISSUES = [
  { sev: 'critical', title: 'Role selection should happen at login only', group: 'critical' },
  { sev: 'critical', title: 'Sidebar should show only front-desk items', group: 'critical' },
  { sev: 'major', title: 'Registration form needs draft / leave warning', group: 'major' },
  { sev: 'minor', title: 'Tagline contrast below WCAG AA', group: 'minor' },
];

export default function UxAuditPage() {
  const [filter, setFilter] = useState('all');
  const [openId, setOpenId] = useState(null);

  const visible = ISSUES.filter((i) => filter === 'all' || i.group === filter);

  return (
    <>
      <div className="content-header">
        <div>
          <div className="content-title">UX / UI Audit</div>
          <div className="content-sub">Hi-Precision Diagnostics PMS · Front Desk</div>
        </div>
      </div>
      <div className="audit-summary-bar">
        <div className="audit-count-chip critical">
          <div className="chip-num">2</div>
          <div className="chip-label">Critical</div>
        </div>
        <div className="audit-count-chip major">
          <div className="chip-num">1</div>
          <div className="chip-label">Major</div>
        </div>
        <div className="audit-count-chip minor">
          <div className="chip-num">1</div>
          <div className="chip-label">Minor</div>
        </div>
      </div>
      <div className="audit-filter-bar">
        {['all', 'critical', 'major', 'minor'].map((f) => (
          <button
            key={f}
            type="button"
            className={`audit-filter-btn${filter === f ? ' active' : ''}${f !== 'all' ? ` sev-${f}` : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All Issues' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      {visible.map((issue, idx) => (
        <div
          key={idx}
          className={`audit-card audit-group-${issue.group}${openId === idx ? ' open' : ''}`}
          onClick={() => setOpenId(openId === idx ? null : idx)}
        >
          <div className="audit-card-header">
            <span className={`audit-sev-pill ${issue.sev}`}>{issue.sev}</span>
            <div className="audit-card-title">{issue.title}</div>
            <i className="ti ti-chevron-down audit-card-expand-icon" />
          </div>
          {openId === idx && (
            <div className="audit-card-body">
              <div className="audit-issue-text">Review notes for front-desk workflow improvements.</div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
