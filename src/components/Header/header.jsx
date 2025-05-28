
import './Header.css';
import React from "react";
import { Bell, Plus, Menu } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="hamburger" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <div className="logo">
          Health<span>care.</span>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" disabled />
      </div>

      <div className="header-actions">
        <Bell className="icon" />
        <div className="avatar">
          <img src="https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_1280.png" alt="User" />
        </div>
        <button className="add-button">
          <Plus size={16} color="white" />
        </button>
      </div>
    </header>
  );
};

export default Header;

