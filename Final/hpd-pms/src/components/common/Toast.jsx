import { useApp } from '../../context/AppContext';

export default function Toast() {
  const { toastMsg, toastVisible } = useApp();
  return (
    <div
      id="toast"
      style={{
        opacity: toastVisible ? 1 : 0,
        transform: toastVisible ? 'translateY(0)' : 'translateY(10px)',
        pointerEvents: toastVisible ? 'all' : 'none',
      }}
    >
      <i className="ti ti-circle-check" style={{ color: 'var(--hp-teal-light)', fontSize: 18 }} />
      <span id="toast-msg">{toastMsg}</span>
    </div>
  );
}
