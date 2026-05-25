export default function Toast({ message, visible }) {
  return (
    <div
      id="toast"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        pointerEvents: visible ? 'all' : 'none',
      }}
    >
      <i className="ti ti-circle-check" style={{ color: 'var(--hp-teal-light)', fontSize: 18 }} />
      <span id="toast-msg">{message}</span>
    </div>
  );
}
