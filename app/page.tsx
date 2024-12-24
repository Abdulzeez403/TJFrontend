"use client";
import { ChartBar, Edit, SquareChartGantt, Upload } from "lucide-react";
import MyCalendar from "./src/components/calenders/bgCalender";
import Card from "./src/components/card";
import { TradePostion } from "./src/modules/home/recenttrade";
import { FullPieChart } from "./src/components/charts/pies/pie";
import { HalfPieChart } from "./src/components/charts/pies/halfpie";

export default function Home() {
  const ChartData = [
    {
      name: "win",
      value: 50,
    },
    {
      name: "lose",
      value: 60,
    },
  ];

  const baseChartStyles =
    "p-4 rounded shadow-sm shadow-slate-300 bg-purple-300 z-50";
  return (
    <div className="p-6 pt-2 bg-gray-100 min-h-screen">
      <div className="flex flex-row items-center justify-between w-full pb-3">
        <h4>Good Morning Sodiq</h4>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button className="flex items-center px-4 py-2 bg-white text-black rounded shadow hover:bg-blue-600">
            <Edit className="h-5 w-5 mr-2" />
            Edit
          </button>

          {/* Import Trade Button */}
          <button className="flex items-center px-2 py-2 bg-purple-500 text-white rounded shadow hover:bg-green-600">
            <Upload className="h-5 w-5 mr-2" />
            Import Trade
          </button>
        </div>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <Card
          title="Net P&L"
          number="$2300"
          chart={<SquareChartGantt className={`h-6 w-6  ${baseChartStyles}`} />}
        />
        <Card
          title="Trade Expectancy"
          number="$230.00"
          chart={<ChartBar className={`h-6 w-6  ${baseChartStyles}`} />}
        />
        <Card
          title="Profit Factor"
          number="$2300"
          chart={<HalfPieChart data={ChartData} />}
        />
        <Card
          title="Win & Lose"
          number="$2300"
          chart={<FullPieChart data={ChartData} />}
        />
      </div>

      <div className="flex flex-row gap-6">
        <div className="flex-[2] bg-white p-4 rounded-lg shadow-md">
          <TradePostion />
        </div>

        <div className="flex-[3] flex flex-row gap-6">
          <div className="flex-[3] bg-white rounded-lg p-4 shadow-md">
            <MyCalendar />
            <div className=" flex flex-row gap-6">
              <div className="border-2 rounded-lg p-4 w-40 h-30 border-slate-300 flex flex-col justify-center items-center shadow-md">
                <h4 className="text-green-400 text-lg font-bold">Week 1</h4>
                <p className="text-md font-thin">$20.0</p>
                <p className="text-sm">4 days</p>
              </div>

              <div className="border-2 rounded-lg p-4 w-40 h-30 border-slate-300 flex flex-col justify-center items-center shadow-md">
                <h4 className="text-green-400 text-lg font-bold">Week 2</h4>
                <p className="text-md font-thin">$30.0</p>
                <p className="text-sm">5 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
