"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface CustomPieChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#FF0000", "#00FF00"]; // Red and Green

export const HalfPieChart: React.FC<CustomPieChartProps> = ({ data }) => {
  return (
    <div style={{ width: "50px", height: "50px" }}>
      {/* Ensure a square container */}
      <PieChart width={100} height={100}>
        {/* Adjusted to match container size */}
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          startAngle={180} // Half pie
          endAngle={0}
          innerRadius={50} // Optional for a donut effect
          outerRadius={100}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};
