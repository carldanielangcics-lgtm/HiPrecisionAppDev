import { StatusBadge } from '../utils/helpers';

const BILLING_PER_PAGE = 8;

export default function BillingPage({
  invoices,
  billingChipFilter,
  billingPage,
  billingSearch,
  onSetChip,
  onSearchChange,
  onSetPage,
  onOpenBillingModal,
  onCollect,
  onToast,
}) {
  const q = billingSearch.toLowerCase();
  const filtered = invoices.filter((i) => {
    const mQ = !q || i.patientName.toLowerCase().includes(q) || i.id.toLowerCase().includes(q);
    const mC = billingChipFilter === 'all' || i.status === billingChipFilter;
    return mQ && mC;
  });
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / BILLING_PER_PAGE));
  const page = Math.min(billingPage, pages);
  const slice = filtered.slice((page - 1) * BILLING_PER_PAGE, page * BILLING_PER_PAGE);

  const paid = invoices.filter((i) => i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
  const pend = invoices.filter((i) => i.status === 'Pending' || i.status === 'HMO').reduce((s, i) => s + i.amount, 0);
  const over = invoices.filter((i) => i.status === 'Overdue').reduce((s, i) => s + i.amount, 0);

  const chips = ['all', 'Paid', 'Pending', 'HMO', 'Overdue'];
  const pagination =
    pages > 1
      ? Array.from({ length: pages }, (_, i) => (
          <button
            key={i + 1}
            type="button"
            className={i + 1 === page ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '4px 10px', fontSize: 11 }}
            onClick={() => onSetPage(i + 1)}
          >
            {i + 1}
          </button>
        ))
      : null;

  return (
    <div className="page active" id="page-billing">
      <div className="content-header">
        <div>
          <div className="content-title">Billing &amp; Payments</div>
          <div className="content-sub">Manage invoices and collections · May 18, 2026</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="btn-secondary" title="Export billing data">
            <i className="ti ti-download" /> Export
          </button>
          <button type="button" className="btn-primary" onClick={onOpenBillingModal}>
            <i className="ti ti-receipt" /> New Invoice
          </button>
        </div>
      </div>
      <div className="billing-cards-row" id="billing-kpi-cards">
        <div className="billing-kpi-card green">
          <div className="billing-kpi-label">Total Collected Today</div>
          <div className="billing-kpi-value green">₱{paid.toLocaleString()}</div>
          <div className="billing-kpi-sub">{invoices.filter((i) => i.status === 'Paid').length} invoices paid</div>
        </div>
        <div className="billing-kpi-card amber">
          <div className="billing-kpi-label">Total Pending</div>
          <div className="billing-kpi-value amber">₱{pend.toLocaleString()}</div>
          <div className="billing-kpi-sub">
            {invoices.filter((i) => i.status === 'Pending' || i.status === 'HMO').length} invoices outstanding
          </div>
        </div>
        <div className="billing-kpi-card red">
          <div className="billing-kpi-label">Total Overdue</div>
          <div className="billing-kpi-value red">₱{over.toLocaleString()}</div>
          <div className="billing-kpi-sub">{invoices.filter((i) => i.status === 'Overdue').length} invoices overdue</div>
        </div>
      </div>
      <div className="stats-grid" id="billing-stats">
        <div className="stat-card">
          <div className="stat-label">Today&apos;s Revenue</div>
          <div className="stat-value">₱{paid.toLocaleString()}</div>
          <div className="stat-delta up">
            <i className="ti ti-trending-up" /> +18% vs yesterday
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Pending</div>
          <div className="stat-value" style={{ color: 'var(--hp-amber)' }}>
            ₱{pend.toLocaleString()}
          </div>
          <div className="stat-delta down">
            <i className="ti ti-clock" /> {invoices.filter((i) => i.status === 'Pending').length} invoices
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">HMO Claims</div>
          <div className="stat-value">
            ₱{invoices.filter((i) => i.status === 'HMO').reduce((s, i) => s + i.amount, 0).toLocaleString()}
          </div>
          <div className="stat-delta up">
            <i className="ti ti-shield" /> HMO
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Overdue</div>
          <div className="stat-value" style={{ color: 'var(--hp-red)' }}>
            ₱{over.toLocaleString()}
          </div>
          <div className="stat-delta down">
            <i className="ti ti-alert-triangle" /> {invoices.filter((i) => i.status === 'Overdue').length} overdue
          </div>
        </div>
      </div>
      <div className="bill-status-bar" id="billing-chips">
        {chips.map((val) => (
          <div
            key={val}
            className={`bill-status-chip${billingChipFilter === val ? ' active' : ''}`}
            onClick={() => onSetChip(val)}
            role="button"
            tabIndex={0}
          >
            {val === 'all' ? 'All' : val}
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 14 }}>
        <div className="search-wrap" style={{ padding: '10px 14px' }}>
          <i className="ti ti-search" style={{ fontSize: 16 }} />
          <input
            type="text"
            id="billing-search"
            placeholder="Search patient name or invoice number…"
            style={{ fontSize: 14 }}
            value={billingSearch}
            onChange={(e) => onSearchChange(e.target.value)}
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
          <tbody id="billing-table-body">
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
                <td>
                  <StatusBadge status={i.status} />
                </td>
                <td>{i.id}</td>
                <td>
                  <div className="actions">
                    {i.status === 'Paid' ? (
                      <button type="button" className="btn-secondary icon-btn" style={{ padding: '6px 10px' }} onClick={() => window.print()}>
                        <i className="ti ti-printer" />
                      </button>
                    ) : null}
                    {i.status === 'Pending' || i.status === 'HMO' ? (
                      <button type="button" className="btn-primary" style={{ padding: '8px 14px', fontSize: 13 }} onClick={() => onCollect(i.id)}>
                        Collect
                      </button>
                    ) : null}
                    {i.status === 'Overdue' ? (
                      <button type="button" className="btn-danger" style={{ padding: '8px 14px' }} onClick={() => onToast(`Follow-up sent for ${i.id}`)}>
                        Follow-up
                      </button>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            padding: '10px 16px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: 13, color: 'var(--text2)' }} id="billing-count">
            Showing {slice.length} of {total} invoices
          </span>
          <div id="billing-pagination" style={{ display: 'flex', gap: 4 }}>
            {pagination}
          </div>
        </div>
      </div>
    </div>
  );
}
