import { HP_LOGO_SVG_SMALL } from '../utils/helpers';

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="topbar-brand">
        <div className="topbar-logo">{HP_LOGO_SVG_SMALL}</div>
        <div className="topbar-name">
          <span className="hi">Hi-</span>Precision
          <span className="tagline">Diagnostics · PMS</span>
        </div>
      </div>
      <div className="topbar-user">
        <div className="user-avatar" id="user-initials">
          MR
        </div>
        <div className="user-name" id="user-label">
          Maria Reyes · Front Desk
        </div>
      </div>
    </div>
  );
}
