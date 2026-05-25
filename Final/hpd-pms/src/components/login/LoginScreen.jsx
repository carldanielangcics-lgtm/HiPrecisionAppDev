import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import HpLogo from '../common/HpLogo';

export default function LoginScreen() {
  const { handleLogin } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fillDemo = () => {
    setEmail('frontdesk@hpd.com');
    setPassword('hpd2026');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await handleLogin(email.trim(), password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" id="login-screen">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <HpLogo size={36} />
          </div>
          <div className="login-brand">
            <span className="login-brand-hi">Hi-</span>
            <span className="login-brand-precision">Precision</span>
            <span className="login-brand-sub">Diagnostics</span>
          </div>
          <div className="login-sub">Patient Management System · Front Desk</div>
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="login-input-group">
            <label className="login-label">Email</label>
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              autoComplete="username"
            />
          </div>
          <div className="login-input-group">
            <label className="login-label">Password</label>
            <div className="login-input-wrap">
              <input
                type={showPw ? 'text' : 'password'}
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPw((v) => !v)}
                title="Show/hide password"
              >
                <i className={`ti ${showPw ? 'ti-eye-off' : 'ti-eye'}`} />
              </button>
            </div>
          </div>
          {error && <div className="login-error show">{error}</div>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
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
            Demo — password: <strong>hpd2026</strong>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
            onClick={fillDemo}
            onKeyDown={(e) => e.key === 'Enter' && fillDemo()}
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
  );
}
