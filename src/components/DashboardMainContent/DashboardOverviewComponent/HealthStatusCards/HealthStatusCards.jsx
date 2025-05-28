import "./HealthStatusCards.css";
const HealthStatusCards = ({ cards }) => {
  return (
    <div className="health-status-cards">
      {cards.map((item, idx) => (
        <div className="card" key={idx} style={{ borderLeft: `4px solid ${item.color}`}}>
          
          <div className="img-div">
            <img src={item.icon} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
          
          <p>{item.status}</p>
          <small>{item.date}</small>
          
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
