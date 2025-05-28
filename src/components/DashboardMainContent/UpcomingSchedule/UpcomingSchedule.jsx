import "./UpcomingSchedule.css";
import SimpleAppointmentCard from "../UpcomingSchedule/SimpleAppointmentCard";

const UpcomingSchedule = ({ data }) => {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      {data.map((group, index) => (
        <div key={index} className="day-group">
          <h3>{group.day}</h3>
          <div className="appointments">
            {group.appointments.map((appt, i) => (
              <SimpleAppointmentCard key={i} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
