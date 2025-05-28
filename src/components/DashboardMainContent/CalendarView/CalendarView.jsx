import React from "react";
import "./CalendarView.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const totalDays = 31;
const firstDayOffset = 5; 
const CalendarView = ({ appointments, events }) => {
  const calendarCells = [];

  for (let i = 0; i < firstDayOffset; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="calendar-cell empty" />);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayAppointments = appointments.find(appt => appt.date === day);
    calendarCells.push(
      <div key={`day-${day}`} className="calendar-cell">
        <div className="day-number">{day}</div>
        {dayAppointments?.times.map((t, i) => (
          <div key={i} className="calendar-time">{t}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day">{day}</div>
        ))}
        {calendarCells}
      </div>

      <div className="calendar-events">
        {events.map((event, i) => (
          <div key={i} className="calendar-event" style={{ backgroundColor: event.color }}>
            <h4>{event.title}</h4>
            <p>{event.date} – {event.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
