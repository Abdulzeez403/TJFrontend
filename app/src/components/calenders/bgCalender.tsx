"use client";
import React from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import localizer from "../dates/datefnslocalizer";

// Sample data for events
const events = [
  {
    title: "$313",
    start: new Date(2024, 10, 6), // Month is 0-indexed
    end: new Date(2024, 10, 6),
    netPL: "+313",
    trades: 2,
    successRate: "100%",
  },
  {
    title: "$545",
    start: new Date(2024, 11, 9),
    end: new Date(2024, 11, 9),
    netPL: "+545",
    trades: 3,
    successRate: "66%",
  },
  {
    title: "-$52.5",
    start: new Date(2024, 12, 3),
    end: new Date(2024, 12, 3),
    netPL: "-52.5",
    trades: 4,
    successRate: "40%",
  },
];

const MyCalendar: React.FC = () => {
  // Custom styling for date cells
  const dayPropGetter = (date: Date) => {
    return {
      style: {
        border: "1px solid #ddd",
        padding: "5px",
        backgroundColor: "#f9f9f9",
      },
      className: "rounded-lg",
    };
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow ">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month"]}
        dayPropGetter={dayPropGetter}
        components={{
          month: {
            event: ({ event }) => (
              <div className=" flex justify-end ">
                <div
                  style={{
                    width: "100%",
                    minHeight: "30px",
                    maxHeight: "50px",
                    position: "relative",
                    top: "0",
                    overflow: "hidden",
                    // background: "none",
                  }}
                  className={`p-2 text-sm font-semibold text-black ${
                    event.netPL.startsWith("+") ? "bg-green-200" : "bg-red-200"
                  }`}
                >
                  <div className="">
                    <h4 className="text-xs font-bold">{event.title}</h4>
                    <p className="text-xs font-thin">Trades: {event.trades}</p>
                    <p className="text-xs font-thin">{event.successRate}</p>
                  </div>
                </div>
              </div>
            ),
          },
        }}
        style={{ height: 500 }}
        className="rounded-lg "
      />
    </div>
  );
};

export default MyCalendar;
