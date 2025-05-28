import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="app-container">
      <Header onMenuClick={toggleSidebar} />
      <div className="main-layout">
        <div className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
          <Sidebar />
        </div>
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
