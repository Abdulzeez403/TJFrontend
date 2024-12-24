"use client";
import React, { useState } from "react";
import Sidebar from "./components/nav/sidebar";
import Topbar from "./components/nav/topbar";

interface ParentNavProp {
  children: React.ReactNode;
}
const ParentNav: React.FC<ParentNavProp> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Handle dropdown toggling
  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
      />
      <div className="flex-1 flex flex-col">
        <Topbar toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ParentNav;
