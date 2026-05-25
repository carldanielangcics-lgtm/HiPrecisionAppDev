import { HP_LOGO_SVG_SMALL } from '../utils/helpers';

export default function Topbar() {
  return (
    <div className="topbar d-flex align-items-center justify-content-between px-3 px-lg-4" id="topbar">
      <div className="topbar-brand d-flex align-items-center gap-3">
        <div className="topbar-logo">{HP_LOGO_SVG_SMALL}</div>
        <div className="topbar-name">
          <span className="hi">Hi-</span>Precision
          <span className="tagline">Diagnostics · PMS</span>
        </div>
      </div>
      <div className="topbar-user d-flex align-items-center gap-3">
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
