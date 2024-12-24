"use client";
import Link from "next/link";
import React from "react";
import {
  FaHome,
  FaChartLine,
  FaCogs,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { LiaJournalWhillsSolid } from "react-icons/lia";
import { PiStrategyBold } from "react-icons/pi";

export interface MenuItem {
  id: string;
  name: string;
  icon: JSX.Element;
  subItems?: string[];
}

interface SidebarProps {
  isCollapsed: boolean;
  openDropdown: string | null;
  toggleDropdown: (id: string) => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  openDropdown,
  toggleDropdown,
}) => {
  // State for sidebar collapse and dropdowns

  // Sidebar menu items
  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },

    {
      id: "journal",
      name: "Journal",
      icon: <LiaJournalWhillsSolid />,
    },

    {
      id: "strategy",
      name: "Strategy",
      icon: <PiStrategyBold />,
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: <FaChartLine />,
      subItems: ["Overview", "Reports", "Performance"],
    },
    {
      id: "settings",
      name: "Settings",
      icon: <FaCogs />,
      subItems: ["Profile", "Billing", "Preferences"],
    },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-blue-900 text-white h-screen flex flex-col transition-all duration-300 `}
    >
      {/* Toggle Button */}
      <div className=" cursor-pointer text-center pt-3">
        {/* <h4 className="font-bold text-lg"> Trading Journal</h4> */}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => (
          <div key={item.id} className="relative">
            {/* Main Item */}
            <Link href={`${item.id}`}>
              <button
                onClick={() => toggleDropdown(item.id)}
                className={`flex items-center justify-between w-full py-2 px-4 rounded-lg hover:bg-blue-700 ${
                  isCollapsed ? "justify-center" : ""
                }`}
                data-tooltip-id={`tooltip-${item.id}`}
                data-tooltip-content={isCollapsed ? item.name : ""}
              >
                <span className="flex items-center">
                  {item.icon}
                  {!isCollapsed && <span className="ml-3">{item.name}</span>}
                </span>
                {item.subItems && !isCollapsed && (
                  <span>
                    {openDropdown === item.id ? (
                      <FaChevronUp className="ml-2" />
                    ) : (
                      <FaChevronDown className="ml-2" />
                    )}
                  </span>
                )}
              </button>
            </Link>

            {/* Tooltip */}
            {/* <Tooltip id={`tooltip-${item.id}`} /> */}

            {/* Dropdown Menu */}
            {openDropdown === item.id && item.subItems && (
              <div className={`mt-2 ml-${isCollapsed ? "6" : "8"}`}>
                {item.subItems.map((subItem, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block py-2 px-4 text-sm rounded-lg hover:bg-blue-800"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
