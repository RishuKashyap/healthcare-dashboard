import "./HealthStatusCards.css";
const HealthStatusCards = ({ cards }) => {
  return (
    <div className="health-status-cards">
      {cards.map((item, idx) => (
        <div className="card" key={idx}>
          
          <div className="img-div">
            <img src={item.icon} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${item.percent}%` , backgroundColor: `${item.color}`}}></div>
          </div>
          <p>{item.status}</p>
          <small>{item.date}</small>
          
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
