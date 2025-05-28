import "./ActivityFeed.css";

const ActivityFeed = ({ activityData }) => {
  return (
    <div className="activity-feed">
      <h2>Activity</h2>
      <p>3 appointments on this week</p>
      <div className="bar-chart">
        {activityData.map((bar, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${bar.height}%`,
              backgroundColor: bar.color,
            }}
          >
            <span className="bar-label">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
