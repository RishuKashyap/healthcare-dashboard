// src/components/Sidebar/Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import { navLinks } from '../../data/navlinks';
import * as LucideIcons from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">General</h2>
      <nav className="sidebar-nav">
        {navLinks.map((link, index) => {
          const Icon = LucideIcons[link.icon] || LucideIcons.Circle;
          return (
            <div className="sidebar-link" key={index}>
              <Icon className="sidebar-icon" size={20} />
              <span>{link.label}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
