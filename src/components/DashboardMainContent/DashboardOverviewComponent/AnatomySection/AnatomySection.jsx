import "./AnatomySection.css";
import bodyImage from "../../../../assets/images/body.png";

const AnatomySection = ({ indicators }) => {
  return (
    <div className="anatomy-section">
      <img src={bodyImage} alt="Human Body" className="body-image" />
      {indicators.map((item, index) => (
        <div
          key={index}
          className="anatomy-indicator"
          style={{
            top: item.position.top,
            left: item.position.left,
            borderColor: item.color,
          }}
        >
          <span className="dot" style={{ backgroundColor: item.color }}></span>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default AnatomySection;
