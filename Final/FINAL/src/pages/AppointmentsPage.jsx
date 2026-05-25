import { StatusBadge } from '../utils/helpers';

const M_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DOT_MAP = {
  Done: 'done',
  'In Progress': 'now',
  Waiting: 'pending',
  Urgent: 'urgent',
  Confirmed: 'pending',
  Pending: 'pending',
};

export default function AppointmentsPage({
  appointments,
  calYear,
  calMonth,
  selectedCalDay,
  onChangeMonth,
  onSelectDay,
  onOpenApptModal,
}) {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const weekEnd = new Date(today);
  weekEnd.setDate(weekEnd.getDate() + 7);
  const weekEndStr = weekEnd.toISOString().split('T')[0];

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const prevDays = new Date(calYear, calMonth, 0).getDate();
  const apptDays = new Set(
    appointments
      .filter((a) => {
        const d = new Date(a.date);
        return d.getFullYear() === calYear && d.getMonth() === calMonth;
      })
      .map((a) => new Date(a.date).getDate())
  );

  const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(selectedCalDay).padStart(2, '0')}`;
  const dayAppts = appointments.filter((a) => a.date === dateStr);
  const upcoming = appointments
    .filter((a) => a.date >= todayStr && a.date <= weekEndStr)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5);

  let calCells = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
    <div key={`hdr-${d}`} className="cal-day-hdr">
      {d}
    </div>
  ));
  for (let i = 0; i < firstDay; i++) {
    calCells.push(
      <div key={`prev-${i}`} className="cal-day other-month">
        {prevDays - firstDay + i + 1}
      </div>
    );
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
    const isSelected = d === selectedCalDay;
    const hasAppt = apptDays.has(d);
    calCells.push(
      <div
        key={`day-${d}`}
        className={`cal-day${isToday ? ' today' : ''}${isSelected ? ' selected' : ''}${hasAppt ? ' has-appt' : ''}`}
        onClick={() => onSelectDay(d)}
        role="button"
        tabIndex={0}
      >
        {d}
      </div>
    );
  }
  const rem = 42 - firstDay - daysInMonth;
  for (let i = 1; i <= rem; i++) {
    calCells.push(
      <div key={`next-${i}`} className="cal-day other-month">
        {i}
      </div>
    );
  }

  return (
    <div className="page active" id="page-appointments">
      <div className="content-header">
        <div>
          <div className="content-title">Appointments</div>
          <div className="content-sub">Schedule management · {M_NAMES[calMonth]} {calYear}</div>
        </div>
        <button type="button" className="btn-primary" style={{ padding: '12px 20px', fontSize: 15 }} onClick={onOpenApptModal}>
          <i className="ti ti-plus" /> New Appointment
        </button>
      </div>
      <div className="color-legend">
        <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--text2)', marginRight: 4 }}>
          Status:
        </span>
        <div className="legend-item">
          <div className="legend-dot done" /> Done
        </div>
        <div className="legend-item">
          <div className="legend-dot active" /> Active / In Progress
        </div>
        <div className="legend-item">
          <div className="legend-dot pending" /> Pending / Waiting
        </div>
        <div className="legend-item">
          <div className="legend-dot urgent" /> Urgent
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 12 }}>
        <div>
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-calendar-event" />{' '}
                <span id="appt-day-title">
                  {M_NAMES[calMonth]} {selectedCalDay}
                  {selectedCalDay === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear() ? ' — Today\u2019s Schedule' : ''}
                </span>
              </div>
              <span style={{ fontSize: 12, color: 'var(--text2)' }} id="appt-day-count">
                {dayAppts.length} booked
              </span>
            </div>
            <div id="appt-day-list">
              {dayAppts.length ? (
                dayAppts.map((a) => (
                  <div key={a.id} className="appt-row">
                    <div className="appt-time-col">{a.time}</div>
                    <div className={`appt-dot ${DOT_MAP[a.status] || 'pending'}`} />
                    <div className="appt-info">
                      <div className="appt-name">{a.patientName}</div>
                      <div className="appt-type">
                        {a.service} · {a.doctor}
                      </div>
                    </div>
                    <StatusBadge status={a.status} />
                  </div>
                ))
              ) : (
                <div style={{ padding: 16, color: 'var(--text2)', fontSize: 14 }}>No appointments for this day.</div>
              )}
            </div>
          </div>
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-clock" /> Upcoming This Week
              </div>
              <span style={{ fontSize: 12, color: 'var(--text2)' }} id="appt-week-count">
                {upcoming.length} appointments
              </span>
            </div>
            <div id="appt-week-list">
              {upcoming.map((a) => (
                <div key={a.id} className="appt-row">
                  <div className="appt-time-col" style={{ width: 62, fontSize: 11 }}>
                    {a.date.slice(5)}
                  </div>
                  <div className={`appt-dot ${DOT_MAP[a.status] || 'pending'}`} />
                  <div className="appt-info">
                    <div className="appt-name">{a.patientName}</div>
                    <div className="appt-type">
                      {a.service} · {a.doctor} · {a.time}
                    </div>
                  </div>
                  <StatusBadge status={a.status} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="panel">
            <div className="panel-header">
              <button type="button" className="btn-secondary" style={{ padding: '4px 10px', fontSize: 12 }} onClick={() => onChangeMonth(-1)} title="Previous month">
                <i className="ti ti-chevron-left" />
              </button>
              <div className="panel-title" style={{ justifyContent: 'center' }}>
                <i className="ti ti-calendar" /> <span id="cal-month-label">{M_NAMES[calMonth]} {calYear}</span>
              </div>
              <button type="button" className="btn-secondary" style={{ padding: '4px 10px', fontSize: 12 }} onClick={() => onChangeMonth(1)} title="Next month">
                <i className="ti ti-chevron-right" />
              </button>
            </div>
            <div className="cal-grid" id="cal-grid">
              {calCells}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
