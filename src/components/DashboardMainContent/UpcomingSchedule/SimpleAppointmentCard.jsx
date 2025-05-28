import "./SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="icon">{icon}</div>
      <div className="info">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
