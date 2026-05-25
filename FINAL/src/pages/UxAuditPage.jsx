import { useState } from 'react';

const AUDIT_ISSUES = {
  critical: [
    {
      title: 'Unrestricted role-switching widget in topbar',
      text: 'The Front Desk / Nurse / Doctor toggle sits in the topbar as three persistent buttons. Any user can tap any role at any time — with no confirmation, no context switch warning, and no indication that they\'ve just changed their active permission set.',
      rec: 'Role selection should happen at login (mapped to credentials), not be a freely clickable widget in the topbar.',
    },
    {
      title: 'Sidebar shows all items for every role — no visual hierarchy',
      text: 'There are section labels ("Clinical", "Admin" etc.) but all items are the same visual weight. The sidebar also shows every possible item for every role: a nurse doesn\'t need billing, a front desk clerk doesn\'t need prescriptions.',
      rec: 'Collapse the sidebar to role-appropriate items only. Use clear visual grouping — slightly heavier section headers, 8px vertical gap between groups.',
    },
    {
      title: 'No empty states on any data view',
      text: 'Every table, panel, and list renders purely from JS data. When a filter returns no results, when there are no appointments today, or when a new clinic install has no patients yet — there\'s nothing to tell the user why the screen is blank.',
      rec: 'Add empty state templates for every data view: a short icon, a clear heading, and a contextual action button.',
    },
  ],
  major: [
    { title: 'Registration form has no auto-save, draft, or leave-page warning', text: 'The 3-step patient registration form has no auto-save, no draft, and no warning when navigating away mid-form.', rec: 'Add a "leave page?" confirmation dialog when navigating away from an in-progress form.' },
    { title: 'User avatar is non-interactive; logout is buried in sidebar footer', text: 'The user avatar and name in the top-right are non-interactive. Logout is buried in the sidebar footer.', rec: 'Make the avatar a dropdown trigger with at minimum: current user info and "Sign Out".' },
    { title: 'Queue page duplicates data in kanban and table simultaneously', text: 'The Queue page shows a 3-column kanban board AND a full data table below it, both showing the same patients.', rec: 'Consider a view toggle (board / list) at the top of the page, defaulting to the board.' },
    { title: 'New appointment modal allows double-booking with no conflict check', text: 'The new appointment modal accepts a date and time input but has no validation against existing bookings.', rec: 'Before confirming an appointment, check for doctor availability conflicts and surface a warning.' },
    { title: 'No keyboard navigation, focus trapping, or shortcuts', text: 'The entire application relies on click/tap interaction. Modals don\'t trap focus.', rec: 'Add focus trap to all modals. Add at least 2–3 keyboard shortcuts for primary actions.' },
  ],
  minor: [
    { title: 'Tagline text fails WCAG AA contrast (≈2.0:1 ratio)', text: 'The "Diagnostics · PMS" tagline is set at 9px with 40% white opacity on a dark background.', rec: 'Remove it entirely, or increase to 11px at 60% opacity.' },
    { title: 'Duplicate CSS: .filter-chip and .bill-status-chip are identical', text: 'The .filter-chip and .bill-status-chip classes have identical CSS.', rec: 'Consolidate into a single .chip component class.' },
    { title: 'Dashboard stat cards show deltas with no trend context', text: 'The 4 stat cards show a number and a delta but no historical trend.', rec: 'Add a mini 7-day sparkline beneath each stat value.' },
    { title: 'Overdue billing rows use full red row background — hard to scan at scale', text: 'The .overdue row class applies a full coral/red background to the entire table row.', rec: 'Use a left border accent (4px solid red) instead of a full row background.' },
    { title: 'Print Queue renders the full app UI — unusable in clinical settings', text: 'The Print Queue button triggers the browser\'s native print dialog, which will render the full app UI as-is.', rec: 'Add a @media print stylesheet that hides the sidebar, topbar, and all interactive elements.' },
  ],
};

function AuditCard({ severity, title, text, rec, open, onToggle }) {
  return (
    <div className={`audit-card audit-group-${severity}${open ? ' open' : ''}`} onClick={onToggle} role="button" tabIndex={0}>
      <div className="audit-card-header">
        <span className={`audit-sev-pill ${severity}`}>{severity === 'minor' ? 'Minor' : severity.charAt(0).toUpperCase() + severity.slice(1)}</span>
        <div className="audit-card-title">{title}</div>
        <i className="ti ti-chevron-down audit-card-expand-icon" />
      </div>
      <div className="audit-card-body">
        <div className="audit-issue-text">{text}</div>
        <div className="audit-rec-box">
          <div className="audit-rec-label">Recommendation</div>
          <div className="audit-rec-text">{rec}</div>
        </div>
      </div>
    </div>
  );
}

export default function UxAuditPage() {
  const [filter, setFilter] = useState('all');
  const [openCards, setOpenCards] = useState({});

  const toggle = (key) => setOpenCards((o) => ({ ...o, [key]: !o[key] }));

  const show = (sev) => filter === 'all' || filter === sev;

  return (
    <div className="page active" id="page-ux-audit">
      <div className="content-header">
        <div>
          <div className="content-title">UX / UI Audit</div>
          <div className="content-sub">Hi-Precision Diagnostics PMS · Design Review</div>
        </div>
      </div>
      <div className="audit-summary-bar">
        <div className="audit-count-chip critical">
          <div className="chip-num">3</div>
          <div className="chip-label">Critical</div>
        </div>
        <div className="audit-count-chip major">
          <div className="chip-num">5</div>
          <div className="chip-label">Major</div>
        </div>
        <div className="audit-count-chip minor">
          <div className="chip-num">5</div>
          <div className="chip-label">Minor / Polish</div>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: 13, color: 'var(--text2)' }}>
          Solid visual execution — UX architecture needs work. The system has strong brand consistency, clean visual language, and good component variety.
        </div>
      </div>
      <div className="audit-filter-bar">
        {[
          ['all', 'All Issues', ''],
          ['critical', 'Critical', 'sev-critical'],
          ['major', 'Major', 'sev-major'],
          ['minor', 'Minor / Polish', 'sev-minor'],
        ].map(([val, label, cls]) => (
          <button
            key={val}
            type="button"
            className={`audit-filter-btn ${cls}${filter === val ? ' active' : ''}`}
            onClick={() => setFilter(val)}
          >
            {label}
          </button>
        ))}
      </div>
      {(['critical', 'major', 'minor']).map((sev) =>
        show(sev) ? (
          <div key={sev}>
            <div className={`audit-section-header audit-group-${sev}`}>
              {sev === 'critical' ? 'Critical — blocks workflow or causes errors' : sev === 'major' ? 'Major — significant friction, should fix' : 'Minor / Polish'}
            </div>
            {AUDIT_ISSUES[sev].map((issue, i) => {
              const key = `${sev}-${i}`;
              return (
                <AuditCard
                  key={key}
                  severity={sev}
                  {...issue}
                  open={!!openCards[key]}
                  onToggle={() => toggle(key)}
                />
              );
            })}
          </div>
        ) : null
      )}
    </div>
  );
}
