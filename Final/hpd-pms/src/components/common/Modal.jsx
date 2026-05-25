import { useApp } from '../../context/AppContext';

export default function Modal({ id, title, children, footer, width }) {
  const { openModals, closeModal } = useApp();
  const open = openModals[id];

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && closeModal(id)}
    >
      <div className="modal" style={width ? { width, maxWidth: width } : undefined}>
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button type="button" className="modal-close" onClick={() => closeModal(id)}>
            ✕
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
