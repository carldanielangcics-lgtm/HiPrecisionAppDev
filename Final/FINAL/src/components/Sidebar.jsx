import { FRONTDESK_NAV } from '../utils/helpers';

export default function Sidebar({ currentPage, onNavigate, getBadgeVal, onSignOut }) {
  let html = [];
  FRONTDESK_NAV.forEach((item, idx) => {
    if (item.section) {
      html.push(
        <div key={`sec-${item.section}-${idx}`} className="sidebar-section">
          {item.section}
        </div>
      );
    } else {
      const active = item.page === currentPage ? ' active' : '';
      const bv = item.badge ? getBadgeVal(item.badge) : '';
      html.push(
        <div
          key={item.page}
          className={`nav-item${active}`}
          onClick={() => onNavigate(item.page)}
          onKeyDown={(e) => e.key === 'Enter' && onNavigate(item.page)}
          role="button"
          tabIndex={0}
        >
          <i className={`ti ${item.icon}`} />
          <span>{item.label}</span>
          {bv ? <span className="nav-badge">{bv}</span> : null}
        </div>
      );
    }
  });

  return (
    <div className="sidebar" id="sidebar">
      {html}
      <div className="sidebar-footer">
        <div className="sidebar-footer-item">
          <i className="ti ti-settings" /> Settings
        </div>
        <div className="sidebar-footer-item">
          <i className="ti ti-help-circle" /> Support
        </div>
        <div className="sidebar-footer-item" onClick={onSignOut} role="button" tabIndex={0}>
          <i className="ti ti-logout" /> Sign out
        </div>
      </div>
    </div>
  );
}
