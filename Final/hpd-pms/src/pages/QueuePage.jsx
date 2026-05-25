import { useApp } from '../context/AppContext';
import { statusBadge, waitBadge } from '../utils/helpers';

export default function QueuePage() {
  const {
    queueDB,
    setQueueDB,
    showToast,
    sbUpdateQueue,
    loadAll,
    openModal,
  } = useApp();

  const waiting = queueDB.filter((q) => q.status === 'Waiting');
  const inProg = queueDB.find((q) => q.status === 'In Progress');
  const done = queueDB.filter((q) => q.status === 'Done');
  const urgent = waiting.filter((q) => q.urgent);
  const allActive = [...(inProg ? [inProg] : []), ...waiting];

  const markDone = async (qid) => {
    const q = queueDB.find((x) => x.id === qid);
    if (!q || !confirm(`Mark ${q.name} as completed?`)) return;
    const endTime = new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' });
    const ok = await sbUpdateQueue(qid, { status: 'Done', end_time: endTime });
    if (!ok) return;
    const next = queueDB
      .filter((x) => x.status === 'Waiting')
      .sort((a, b) => a.queueNum - b.queueNum)[0];
    const updated = queueDB.map((item) => {
      if (item.id === qid) return { ...item, status: 'Done', endTime };
      return item;
    });
    if (next) {
      const startTime = new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' });
      await sbUpdateQueue(next.id, { status: 'In Progress', start_time: startTime });
      setQueueDB(
        updated.map((item) =>
          item.id === next.id ? { ...item, status: 'In Progress', startTime } : item
        )
      );
    } else {
      setQueueDB(updated);
    }
    showToast(`${q.name} marked as done.`);
    loadAll();
  };

  const prioritize = async (qid) => {
    const q = queueDB.find((x) => x.id === qid);
    if (!q) return;
    if (queueDB.find((x) => x.status === 'In Progress')) {
      showToast('Finish current patient before prioritizing.');
      return;
    }
    const startTime = new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' });
    const ok = await sbUpdateQueue(qid, { status: 'In Progress', start_time: startTime });
    if (!ok) return;
    setQueueDB(queueDB.map((item) => (item.id === qid ? { ...item, status: 'In Progress', startTime } : item)));
    showToast(`${q.name} prioritized.`);
    loadAll();
  };

  const moveUp = async (qid) => {
    const w = queueDB.filter((x) => x.status === 'Waiting').sort((a, b) => a.queueNum - b.queueNum);
    const idx = w.findIndex((x) => x.id === qid);
    if (idx <= 0) {
      showToast('Already at the top.');
      return;
    }
    const a = w[idx];
    const b = w[idx - 1];
    await sbUpdateQueue(a.id, { queue_num: b.queueNum });
    await sbUpdateQueue(b.id, { queue_num: a.queueNum });
    setQueueDB(
      queueDB.map((item) => {
        if (item.id === a.id) return { ...item, queueNum: b.queueNum };
        if (item.id === b.id) return { ...item, queueNum: a.queueNum };
        return item;
      })
    );
    showToast('Queue updated.');
    loadAll();
  };

  return (
    <>
      <div className="content-header">
        <div>
          <div className="content-title">Queue Management</div>
          <div className="content-sub">
            <span className="live-dot" />
            Live · {waiting.length + (inProg ? 1 : 0)} patients in system · Avg wait 18 min
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="btn-secondary" title="Print Queue" onClick={() => window.print()}>
            <i className="ti ti-printer" /> Print Queue
          </button>
          <button type="button" className="btn-primary" onClick={() => openModal('appt-modal')}>
            <i className="ti ti-user-plus" /> Add to Queue
          </button>
        </div>
      </div>
      <div className="now-serving-banner">
        <div className="now-serving-pulse" />
        <div className="now-serving-text">Now Serving</div>
        <div className="now-serving-name">
          {inProg ? `#${inProg.queueNum} ${inProg.name}` : 'No active patient'}
        </div>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Now Serving</div>
          <div className="stat-value" style={{ color: 'var(--hp-teal)' }}>
            {inProg ? `#${inProg.queueNum}` : '—'}
          </div>
          <div className="stat-delta up">
            <i className="ti ti-user" /> {inProg ? inProg.name : 'None'}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Waiting</div>
          <div className="stat-value">{waiting.length}</div>
          <div className="stat-delta down">
            <i className="ti ti-clock" /> Longest: {waiting.length ? Math.max(...waiting.map((q) => q.waitMin)) : 0} min
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Urgent</div>
          <div className="stat-value" style={{ color: 'var(--hp-red)' }}>
            {urgent.length}
          </div>
          <div className="stat-delta down">
            <i className="ti ti-alert-triangle" /> {urgent[0]?.name || 'None'}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Served Today</div>
          <div className="stat-value">{done.length}</div>
          <div className="stat-delta up">
            <i className="ti ti-check" /> completed
          </div>
        </div>
      </div>
      <div className="queue-board">
        <div>
          <div className="queue-col-header" style={{ color: 'var(--hp-amber)' }}>
            <i className="ti ti-clock" /> Waiting{' '}
            <span className="badge badge-waiting" style={{ marginLeft: 'auto' }}>
              {waiting.length}
            </span>
          </div>
          {waiting.map((q) => (
            <div key={q.id} className={`queue-card${q.urgent ? ' urgent-card' : ''}`}>
              <div className={`queue-card-num${q.urgent ? ' u' : ''}`}>{q.urgent ? '!' : q.queueNum}</div>
              <div className="queue-card-body">
                <div className="queue-card-name">{q.name}</div>
                <div className="queue-card-meta">
                  {q.service} · {q.doctor}
                </div>
                <div className="queue-card-time">
                  {waitBadge(q.waitMin)}
                  {q.urgent ? <> <span className="badge badge-urgent">Urgent</span></> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="queue-col-header" style={{ color: 'var(--hp-teal)' }}>
            <i className="ti ti-loader" /> In Progress{' '}
            <span className="badge badge-active" style={{ marginLeft: 'auto' }}>
              {inProg ? 1 : 0}
            </span>
          </div>
          {inProg ? (
            <div className="queue-card" style={{ borderColor: 'var(--hp-teal)', boxShadow: '0 2px 10px rgba(13,124,107,.12)' }}>
              <div className="queue-card-num a">{inProg.queueNum}</div>
              <div className="queue-card-body">
                <div className="queue-card-name">{inProg.name}</div>
                <div className="queue-card-meta">
                  {inProg.service} · {inProg.doctor}
                </div>
                <div className="queue-card-time">
                  <span className="live-dot" />
                  Started {inProg.startTime || ''}
                </div>
                <div style={{ marginTop: 8 }}>
                  <button type="button" className="btn-primary" style={{ padding: '10px 16px', fontSize: 13 }} onClick={() => markDone(inProg.id)}>
                    <i className="ti ti-check" /> Mark Done
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ padding: 16, color: 'var(--text2)', fontSize: 13 }}>No patient in progress</div>
          )}
        </div>
        <div>
          <div className="queue-col-header" style={{ color: '#27500A' }}>
            <i className="ti ti-circle-check" /> Completed{' '}
            <span className="badge badge-done" style={{ marginLeft: 'auto' }}>
              {done.length}
            </span>
          </div>
          {done.slice(0, 3).map((q) => (
            <div key={q.id} className="queue-card" style={{ opacity: 0.7 }}>
              <div className="queue-card-num" style={{ background: '#27500A' }}>
                ✓
              </div>
              <div className="queue-card-body">
                <div className="queue-card-name">{q.name}</div>
                <div className="queue-card-meta">
                  {q.service} · {q.doctor}
                </div>
                <div className="queue-card-time">
                  {q.startTime || ''} – {q.endTime || ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title">
            <i className="ti ti-table" /> Full Queue List
          </div>
          <button type="button" className="btn-secondary" style={{ padding: '6px 12px', fontSize: 13 }} onClick={loadAll}>
            <i className="ti ti-refresh" /> Refresh
          </button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Service</th>
              <th>Doctor</th>
              <th>Wait Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allActive.map((q) => (
              <tr
                key={q.id}
                style={
                  q.urgent
                    ? { background: '#FAECE7' }
                    : q.status === 'In Progress'
                      ? { background: 'var(--hp-teal-bg)' }
                      : undefined
                }
              >
                <td>
                  <strong
                    style={{
                      color:
                        q.status === 'In Progress'
                          ? 'var(--hp-teal)'
                          : q.urgent
                            ? 'var(--hp-red)'
                            : undefined,
                    }}
                  >
                    {q.urgent ? '!' : q.queueNum}
                  </strong>
                </td>
                <td>
                  <strong>{q.name}</strong>
                </td>
                <td>{q.service}</td>
                <td>{q.doctor}</td>
                <td>
                  {q.status === 'In Progress' ? (
                    <>
                      <span className="live-dot" />
                      Active
                    </>
                  ) : (
                    waitBadge(q.waitMin)
                  )}
                </td>
                <td>{statusBadge(q.status)}</td>
                <td>
                  <div className="actions">
                    {q.status === 'In Progress' && (
                      <button type="button" className="btn-primary" style={{ padding: '8px 14px', fontSize: 13 }} onClick={() => markDone(q.id)}>
                        Mark Done
                      </button>
                    )}
                    {q.urgent && q.status === 'Waiting' && (
                      <button
                        type="button"
                        className="btn-primary"
                        style={{ padding: '8px 14px', fontSize: 13, background: 'var(--hp-red)' }}
                        onClick={() => prioritize(q.id)}
                      >
                        Prioritize
                      </button>
                    )}
                    {q.status === 'Waiting' && !q.urgent && (
                      <button type="button" className="btn-secondary icon-btn" style={{ padding: '6px 10px' }} onClick={() => moveUp(q.id)}>
                        <i className="ti ti-arrow-up" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
