import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { statusBadge } from '../utils/helpers';

const PER_PAGE = 8;
const CHIPS = ['all', 'Paid', 'Pending', 'HMO', 'Overdue'];

export default function BillingPage() {
  const { invoicesDB, setInvoicesDB, openModal, showToast, sbUpdateInvoice, loadAll } = useApp();
  const [chip, setChip] = useState('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return invoicesDB.filter((i) => {
      const mQ = !q || i.patientName.toLowerCase().includes(q) || i.id.toLowerCase().includes(q);
      const mC = chip === 'all' || i.status === chip;
      return mQ && mC;
    });
  }, [invoicesDB, search, chip]);

  const paid = invoicesDB.filter((i) => i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
  const pend = invoicesDB.filter((i) => i.status === 'Pending' || i.status === 'HMO').reduce((s, i) => s + i.amount, 0);
  const over = invoicesDB.filter((i) => i.status === 'Overdue').reduce((s, i) => s + i.amount, 0);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const slice = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const collectPayment = async (iid) => {
    const inv = invoicesDB.find((i) => i.id === iid);
    if (!inv || !confirm(`Mark ${inv.id} as paid for ${inv.patientName}?`)) return;
    const ok = await sbUpdateInvoice(iid, { status: 'Paid' });
    if (ok) {
      setInvoicesDB(invoicesDB.map((i) => (i.id === iid ? { ...i, status: 'Paid' } : i)));
      showToast(`${inv.id} marked as paid.`);
      loadAll();
    }
  };

  return (
    <>
      <div className="content-header">
        <div>
          <div className="content-title">Billing & Payments</div>
          <div className="content-sub">Manage invoices and collections · May 18, 2026</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="btn-secondary">
            <i className="ti ti-download" /> Export
          </button>
          <button type="button" className="btn-primary" onClick={() => openModal('billing-modal')}>
            <i className="ti ti-receipt" /> New Invoice
          </button>
        </div>
      </div>
      <div className="billing-cards-row">
        <div className="billing-kpi-card green">
          <div className="billing-kpi-label">Total Collected Today</div>
          <div className="billing-kpi-value green">₱{paid.toLocaleString()}</div>
          <div className="billing-kpi-sub">{invoicesDB.filter((i) => i.status === 'Paid').length} invoices paid</div>
        </div>
        <div className="billing-kpi-card amber">
          <div className="billing-kpi-label">Total Pending</div>
          <div className="billing-kpi-value amber">₱{pend.toLocaleString()}</div>
          <div className="billing-kpi-sub">
            {invoicesDB.filter((i) => i.status === 'Pending' || i.status === 'HMO').length} outstanding
          </div>
        </div>
        <div className="billing-kpi-card red">
          <div className="billing-kpi-label">Total Overdue</div>
          <div className="billing-kpi-value red">₱{over.toLocaleString()}</div>
          <div className="billing-kpi-sub">{invoicesDB.filter((i) => i.status === 'Overdue').length} overdue</div>
        </div>
      </div>
      <div className="bill-status-bar">
        {CHIPS.map((c) => (
          <div
            key={c}
            className={`bill-status-chip${chip === c ? ' active' : ''}`}
            onClick={() => {
              setChip(c);
              setPage(1);
            }}
            role="button"
            tabIndex={0}
          >
            {c === 'all' ? 'All' : c}
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 14 }}>
        <div className="search-wrap" style={{ padding: '10px 14px' }}>
          <i className="ti ti-search" style={{ fontSize: 16 }} />
          <input
            type="text"
            placeholder="Search patient name or invoice number…"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>
      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Invoice #</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((i) => (
              <tr key={i.id} className={i.status === 'Overdue' ? 'overdue' : ''}>
                <td>
                  <strong>{i.patientName}</strong>
                </td>
                <td>{i.service}</td>
                <td>
                  <strong>₱{i.amount.toLocaleString()}</strong>
                </td>
                <td>{i.method}</td>
                <td>{statusBadge(i.status)}</td>
                <td>{i.id}</td>
                <td>
                  <div className="actions">
                    {(i.status === 'Pending' || i.status === 'HMO') && (
                      <button type="button" className="btn-primary" style={{ padding: '8px 14px', fontSize: 13 }} onClick={() => collectPayment(i.id)}>
                        Collect
                      </button>
                    )}
                    {i.status === 'Overdue' && (
                      <button type="button" className="btn-danger" style={{ padding: '8px 14px' }} onClick={() => showToast(`Follow-up sent for ${i.id}`)}>
                        Follow-up
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '10px 16px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, color: 'var(--text2)' }}>
            Showing {slice.length} of {filtered.length} invoices
          </span>
        </div>
      </div>
    </>
  );
}
