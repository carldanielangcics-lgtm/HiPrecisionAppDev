import PatientModal from './PatientModal';
import ApptModal from './ApptModal';
import BillingModal from './BillingModal';
import Modal from '../common/Modal';
import { useApp } from '../../context/AppContext';

export default function AppModals() {
  const { closeModal, showToast } = useApp();
  return (
    <>
      <PatientModal />
      <ApptModal />
      <BillingModal />
      <Modal
        id="export-modal"
        title="Export Patient Records"
        width="380px"
        footer={
          <>
            <button type="button" className="btn-secondary" onClick={() => closeModal('export-modal')}>
              Cancel
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                closeModal('export-modal');
                showToast('Export started — file will be ready shortly.');
              }}
            >
              <i className="ti ti-download" /> Export
            </button>
          </>
        }
      >
        <div className="form-group">
          <label className="form-label">Format</label>
          <select className="form-select">
            <option>PDF</option>
            <option>CSV / Excel</option>
          </select>
        </div>
      </Modal>
    </>
  );
}
