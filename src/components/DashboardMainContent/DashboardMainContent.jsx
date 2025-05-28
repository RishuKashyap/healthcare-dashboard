import "./DashboardMainContent.css";
import AnatomySection from "./DashboardOverviewComponent/AnatomySection/AnatomySection";
import HealthStatusCards from "./DashboardOverviewComponent/HealthStatusCards/HealthStatusCards";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import CalendarView from "./CalendarView/CalendarView";

// Mock data
import { anatomyIndicators } from "../../data/AnatomyData";
import { healthStatusData } from "../../data/HealthStatusData";
import { activityData } from "../../data/activityData";
import { upcomingAppointments } from "../../data/UpcomingAppointments";
import { calendarAppointments, calendarEvents } from "../../data/CalendarData";


const DashboardMainContent = () => {
  return (
        <main className="dashboard-content">
          <div className="left-column">
            <div className="top-row">
              <div className="anatomy-section">
                <AnatomySection indicators={anatomyIndicators} />
              </div>
              <div className="health-status-cards">
                <HealthStatusCards cards={healthStatusData} />
              </div>
              
            </div>
            <div className="activity-feed">
              <ActivityFeed activityData={activityData} />
            </div>
              
          </div>

          <div className="right-column">
            <CalendarView appointments={calendarAppointments} events={calendarEvents} />
            <UpcomingSchedule data={upcomingAppointments} />
          </div>

        </main>
  );
};

export default DashboardMainContent;
