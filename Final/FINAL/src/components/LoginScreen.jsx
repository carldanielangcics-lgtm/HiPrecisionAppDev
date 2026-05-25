import { HP_LOGO_SVG } from '../utils/helpers';

export default function LoginScreen({ onLogin, loginError, showPassword, onTogglePassword }) {
  const fillDemo = (email) => {
    const u = document.getElementById('login-username');
    const p = document.getElementById('login-password');
    if (u) u.value = email;
    if (p) p.value = 'hpd2026';
  };

  return (
    <div className="login-container" id="login-screen">
      <div className="login-card shadow-lg">
        <div className="login-header text-center">
          <div className="login-logo">{HP_LOGO_SVG}</div>
          <div className="login-brand">
            <span className="login-brand-hi">Hi-</span>
            <span className="login-brand-precision">Precision</span>
            <span className="login-brand-sub">Diagnostics</span>
          </div>
          <div className="login-sub">Patient Management System</div>
        </div>
        <form className="login-form d-flex flex-column gap-3" onSubmit={onLogin}>
          <div className="login-input-group">
            <label className="login-label" htmlFor="login-username">Email</label>
            <input
              type="email"
              className="login-input"
              id="login-username"
              placeholder="Enter your email"
              required
              autoComplete="username"
            />
          </div>
          <div className="login-input-group">
            <label className="login-label" htmlFor="login-password">Password</label>
            <div className="login-input-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                className="login-input"
                id="login-password"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={onTogglePassword}
                title="Show/hide password"
              >
                <i className={`ti ${showPassword ? 'ti-eye-off' : 'ti-eye'}`} id="password-icon" />
              </button>
            </div>
          </div>
          <div className={`login-error${loginError ? ' show' : ''}`} id="login-error">
            {loginError || 'Invalid username or password.'}
          </div>
          <button type="submit" className="login-btn btn btn-primary">
            Sign In
          </button>
        </form>
        <div
          style={{
            marginTop: 20,
            padding: '14px 16px',
            background: 'rgba(13,124,107,.07)',
            border: '1px solid rgba(13,124,107,.18)',
            borderRadius: 12,
            fontSize: 12,
            color: '#4B5563',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '.12em',
              color: 'var(--hp-teal)',
              marginBottom: 8,
            }}
          >
            Demo Credentials — password: <strong>hpd2026</strong>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
              onClick={() => fillDemo('frontdesk@hpd.com')}
              onKeyDown={(e) => e.key === 'Enter' && fillDemo('frontdesk@hpd.com')}
              role="button"
              tabIndex={0}
            >
              <span
                style={{
                  background: 'rgba(13,124,107,.15)',
                  color: 'var(--hp-teal)',
                  fontSize: 10,
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: 20,
                }}
              >
                FRONT DESK
              </span>
              <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#374151' }}>frontdesk@hpd.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
