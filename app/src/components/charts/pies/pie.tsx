"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface CustomPieChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#FF0000", "#00FF00"]; // Red and Green

export const FullPieChart: React.FC<CustomPieChartProps> = ({ data }) => {
  return (
    // <Card className={cn("p-4 shadow-md w-full max-w-md")}>
    <PieChart width={50} height={50}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    // </Card>
  );
};
