import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { APPT_DOT_MAP, fullName, statusBadge } from '../utils/helpers';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function AppointmentsPage() {
  const { appointmentsDB, patientsDB, openModal } = useApp();
  const [calYear, setCalYear] = useState(2026);
  const [calMonth, setCalMonth] = useState(4);
  const [selectedDay, setSelectedDay] = useState(18);

  const apptDays = useMemo(() => {
    return new Set(
      appointmentsDB
        .filter((a) => {
          const d = new Date(a.date);
          return d.getFullYear() === calYear && d.getMonth() === calMonth;
        })
        .map((a) => new Date(a.date).getDate())
    );
  }, [appointmentsDB, calYear, calMonth]);

  const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
  const dayAppts = appointmentsDB.filter((a) => a.date === dateStr);
  const upcoming = appointmentsDB.filter((a) => a.date > '2026-05-18').slice(0, 5);

  const changeMonth = (dir) => {
    let m = calMonth + dir;
    let y = calYear;
    if (m > 11) {
      m = 0;
      y++;
    }
    if (m < 0) {
      m = 11;
      y--;
    }
    setCalMonth(m);
    setCalYear(y);
  };

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const prevDays = new Date(calYear, calMonth, 0).getDate();

  return (
    <>
      <div className="content-header">
        <div>
          <div className="content-title">Appointments</div>
          <div className="content-sub">Schedule management · May 2026</div>
        </div>
        <button type="button" className="btn-primary" style={{ padding: '12px 20px', fontSize: 15 }} onClick={() => openModal('appt-modal')}>
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
                <i className="ti ti-calendar-event" /> {MONTH_NAMES[calMonth]} {selectedDay}
                {selectedDay === 18 && calMonth === 4 && calYear === 2026 ? " — Today's Schedule" : ''}
              </div>
              <span style={{ fontSize: 12, color: 'var(--text2)' }}>{dayAppts.length} booked</span>
            </div>
            {dayAppts.length ? (
              dayAppts.map((a) => (
                <ApptRow key={a.id} a={a} />
              ))
            ) : (
              <div style={{ padding: 16, color: 'var(--text2)', fontSize: 14 }}>No appointments for this day.</div>
            )}
          </div>
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">
                <i className="ti ti-clock" /> Upcoming This Week
              </div>
              <span style={{ fontSize: 12, color: 'var(--text2)' }}>{upcoming.length} appointments</span>
            </div>
            {upcoming.map((a) => (
              <div key={a.id} className="appt-row">
                <div className="appt-time-col" style={{ width: 62, fontSize: 11 }}>
                  {a.date.slice(5)}
                </div>
                <div className={`appt-dot ${APPT_DOT_MAP[a.status] || 'pending'}`} />
                <div className="appt-info">
                  <div className="appt-name">{a.patientName}</div>
                  <div className="appt-type">
                    {a.service} · {a.doctor} · {a.time}
                  </div>
                </div>
                {statusBadge(a.status)}
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="panel-header">
            <button type="button" className="btn-secondary" style={{ padding: '4px 10px', fontSize: 12 }} onClick={() => changeMonth(-1)}>
              <i className="ti ti-chevron-left" />
            </button>
            <div className="panel-title" style={{ justifyContent: 'center' }}>
              <i className="ti ti-calendar" /> {MONTH_NAMES[calMonth]} {calYear}
            </div>
            <button type="button" className="btn-secondary" style={{ padding: '4px 10px', fontSize: 12 }} onClick={() => changeMonth(1)}>
              <i className="ti ti-chevron-right" />
            </button>
          </div>
          <div className="cal-grid">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
              <div key={d} className="cal-day-hdr">
                {d}
              </div>
            ))}
            {Array.from({ length: firstDay }, (_, i) => (
              <div key={`p-${i}`} className="cal-day other-month">
                {prevDays - firstDay + i + 1}
              </div>
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const d = i + 1;
              const isToday = d === 18 && calMonth === 4 && calYear === 2026;
              const isSelected = d === selectedDay && calMonth === 4 && calYear === 2026;
              const hasAppt = apptDays.has(d);
              return (
                <div
                  key={d}
                  className={`cal-day${isToday ? ' today' : ''}${isSelected ? ' selected' : ''}${hasAppt ? ' has-appt' : ''}`}
                  onClick={() => setSelectedDay(d)}
                  role="button"
                  tabIndex={0}
                >
                  {d}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <select className="filter-select" style={{ display: 'none' }} aria-hidden>
        {patientsDB.map((p) => (
          <option key={p.id} value={p.id}>
            {fullName(p)}
          </option>
        ))}
      </select>
    </>
  );
}

function ApptRow({ a }) {
  return (
    <div className="appt-row">
      <div className="appt-time-col">{a.time}</div>
      <div className={`appt-dot ${APPT_DOT_MAP[a.status] || 'pending'}`} />
      <div className="appt-info">
        <div className="appt-name">{a.patientName}</div>
        <div className="appt-type">
          {a.service} · {a.doctor}
        </div>
      </div>
      {statusBadge(a.status)}
    </div>
  );
}
