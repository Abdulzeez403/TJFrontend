"use client";
import React from "react";
import { usePathname } from "next/navigation";

import {
  FaBell,
  FaUserCircle,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Dropdown } from "../dropdown";
import { DoubleDatePicker } from "../input/doubleDatePicker";

interface ITopProps {
  toggleSidebar: () => void;
  isCollapsed: boolean;
}

const Topbar: React.FC<ITopProps> = ({ toggleSidebar, isCollapsed }) => {
  const urlPath = usePathname();
  const slug = urlPath?.split("/").pop();

  const handleAction = (action: string) => {
    alert(`You clicked on ${action}`);
  };

  return (
    <header className="bg-white text-black h-16 flex items-center justify-between pr-4 shadow-md relative">
      {/* Left Section: Logo and Sidebar Toggle */}
      <div className="flex items-center space-x-4">
        {/* Toggle Sidebar Button */}
        <div
          className={`cursor-pointer text-center bg-white border rounded-full p-2 absolute   -translate-x-1/2 z-10 transition-all duration-300`}
          onClick={toggleSidebar}
        >
          {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </div>

        <h1 className="text-xl font-bold pl-4">{slug}</h1>
        <div className="relative">
          {/* <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" /> */}
          {/* <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg text-black focus:outline-none focus:ring focus:ring-blue-300"
          /> */}
        </div>
      </div>

      {/* Right Section: Notifications & User Profile */}
      <div className="flex items-center gap-3">
        <button className="relative">
          <FaBell className="text-2xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
            3
          </span>
        </button>

        <div>
          <DoubleDatePicker
            label=""
            startDate={undefined}
            endDate={undefined}
            onDateChange={({ startDate, endDate }) => {
              console.log("Start Date:", startDate);
              console.log("End Date:", endDate);
            }}
          />
        </div>

        <Dropdown
          label="My Account"
          triggerLabel={<FaUserCircle className="text-lg h-6 w-6" />}
          items={[
            { label: "Profile", onClick: () => handleAction("Profile") },
            { label: "Billing", onClick: () => handleAction("Billing") },
            { label: "Team", onClick: () => handleAction("Team") },
            {
              label: "Subscription",
              onClick: () => handleAction("Subscription"),
            },
          ]}
        />
      </div>
    </header>
  );
};

export default Topbar;
