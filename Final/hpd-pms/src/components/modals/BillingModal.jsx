import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../common/Modal';
import { fullName, normalizeInvoice } from '../../utils/helpers';

export default function BillingModal() {
  const { patientsDB, invoicesDB, setInvoicesDB, sbInsertInvoice, closeModal, showToast, loadAll } = useApp();
  const [pid, setPid] = useState('');
  const [amount, setAmount] = useState('');
  const [service, setService] = useState('CBC');
  const [method, setMethod] = useState('Cash');

  const save = async () => {
    if (!pid || !amount) {
      showToast('Please fill in all required fields.');
      return;
    }
    const p = patientsDB.find((x) => x.id === pid);
    const row = {
      patient_id: pid,
      patient_name: fullName(p),
      service,
      amount: parseFloat(amount),
      method,
      status: 'Pending',
      date: 'May 18',
    };
    const saved = await sbInsertInvoice(row);
    if (saved) {
      setInvoicesDB([normalizeInvoice(saved), ...invoicesDB]);
      closeModal('billing-modal');
      showToast(`Invoice created for ${fullName(p)}`);
      loadAll();
    }
  };

  return (
    <Modal
      id="billing-modal"
      title="New Invoice"
      footer={
        <>
          <button type="button" className="btn-secondary" onClick={() => closeModal('billing-modal')}>
            Cancel
          </button>
          <button type="button" className="btn-primary" onClick={save}>
            <i className="ti ti-receipt" /> Create Invoice
          </button>
        </>
      }
    >
      <div className="form-grid">
        <div className="form-group full">
          <label className="form-label">Patient</label>
          <select className="form-select" value={pid} onChange={(e) => setPid(e.target.value)}>
            <option value="">-- Select Patient --</option>
            {patientsDB.map((p) => (
              <option key={p.id} value={p.id}>
                {fullName(p)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Service</label>
          <select className="form-select" value={service} onChange={(e) => setService(e.target.value)}>
            <option>CBC</option>
            <option>Urinalysis</option>
            <option>Consultation</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Amount (₱)</label>
          <input type="number" className="form-input" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Payment Method</label>
          <select className="form-select" value={method} onChange={(e) => setMethod(e.target.value)}>
            <option>Cash</option>
            <option>GCash / Maya</option>
            <option>HMO</option>
          </select>
        </div>
      </div>
    </Modal>
  );
}
