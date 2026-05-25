import { NAV_ITEMS } from '../../data/seedData';
import { useApp } from '../../context/AppContext';

export default function Sidebar() {
  const { currentPage, navigateTo, getBadgeVal, signOut } = useApp();

  return (
    <div className="sidebar" id="sidebar">
      {NAV_ITEMS.map((item, i) => {
        if (item.section) {
          return (
            <div key={`sec-${i}`} className="sidebar-section">
              {item.section}
            </div>
          );
        }
        const active = item.page === currentPage ? ' active' : '';
        const bv = item.badge ? getBadgeVal(item.badge) : '';
        return (
          <div
            key={item.page}
            className={`nav-item${active}`}
            onClick={() => navigateTo(item.page)}
            onKeyDown={(e) => e.key === 'Enter' && navigateTo(item.page)}
            role="button"
            tabIndex={0}
          >
            <i className={`ti ${item.icon}`} />
            <span>{item.label}</span>
            {bv ? <span className="nav-badge">{bv}</span> : null}
          </div>
        );
      })}
      <div className="sidebar-footer">
        <div className="sidebar-footer-item">
          <i className="ti ti-settings" /> Settings
        </div>
        <div className="sidebar-footer-item">
          <i className="ti ti-help-circle" /> Support
        </div>
        <div className="sidebar-footer-item" onClick={signOut} role="button" tabIndex={0}>
          <i className="ti ti-logout" /> Sign out
        </div>
      </div>
    </div>
  );
}
