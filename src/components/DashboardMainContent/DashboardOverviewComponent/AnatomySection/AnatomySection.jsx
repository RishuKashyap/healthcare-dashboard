import "./AnatomySection.css";
import bodyImage from "../../../../assets/images/body.png";

const AnatomySection = ({ indicators }) => {
  return (
    <>
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
            backgroundColor: item.color,
            color: item.textColor,
          }}
        >
          <span className="dot" style={{ backgroundColor: item.color }}></span>
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
      <div>
        <img src="https://media.istockphoto.com/id/1059965184/video/icon-360%C3%A2-animation-with-optional-luma-matte-alpha-luma-matte-included-4k-video.jpg?s=640x640&k=20&c=q8NzDHiWNW_M9alv2Apb9FYOiQc7fEzCBKXPCI2Igms=" alt="not found" className="rotate-image" />
      </div>
      </>
  );
};

export default AnatomySection;
