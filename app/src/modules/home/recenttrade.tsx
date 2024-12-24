"use client";
import React, { useState } from "react";
import { Toggle } from "../../components/commons/toggle";
import { OpenPositionData, TradeData } from "../../constant/data";
export const TradePostion = () => {
  const [activeView, setActiveView] = useState("Recent Trade");

  const handleToggle = (option: string) => {
    setActiveView(option);
  };
  return (
    <div>
      <Toggle
        options={["Recent Trade", "Open Position"]}
        onToggle={handleToggle}
      />

      <div className="">
        {activeView === "Recent Trade" && (
          <div className="">
            <table className="table-auto w-full bg-white rounded-lg shadow">
              {/* Table Header */}
              <thead className="bg-slate-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-center">Closed Date</th>
                  <th className="px-4 py-2 text-center">Symbol</th>
                  <th className="px-4 py-2 text-center">Net P/L</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-300">
                {TradeData.map((trade, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-center">{trade.date}</td>
                    <td className="px-4 py-2 text-center">{trade.symbol}</td>
                    <td
                      className={`px-4 py-2 text-center font-bold ${
                        trade.netPL.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {trade.netPL}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeView === "Open Position" && (
          <div className="">
            <table className="table-auto w-full bg-white rounded-lg shadow">
              {/* Table Header */}
              <thead className="bg-slate-500 text-white">
                <tr>
                  {/* <th className="px-4 py-2">Entry Date</th> */}
                  <th className="px-4 py-2">Symbol</th>
                  {/* <th className="px-4 py-2">Entry Price</th> */}
                  <th className="px-4 py-2">Current Price</th>
                  <th className="px-4 py-2">Unrealized P/L</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="divide-y divide-gray-300">
                {OpenPositionData.map((position, index) => (
                  <tr key={index}>
                    {/* <td className="px-4 py-2 text-center">
                      {position.entryDate}
                    </td> */}
                    <td className="px-4 py-2 text-center">{position.symbol}</td>
                    {/* <td className="px-4 py-2 text-center">
                      ${position.entryPrice.toFixed(2)}
                    </td> */}
                    <td className="px-4 py-2 text-center">
                      ${position.currentPrice.toFixed(2)}
                    </td>
                    <td
                      className={`px-4 py-2 text-center font-bold ${
                        position.unrealizedPL.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {position.unrealizedPL}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
