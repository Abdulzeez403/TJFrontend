import { Info } from "lucide-react";
import React from "react";

interface CardProps {
  title: string;
  number: string | number;
  className?: string;
  chart: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, number, className, chart }) => {
  return (
    <div className="flex justify-between py-4 p-6 bg-white shadow-md rounded-lg  hover:shadow-lg transition duration-200">
      <div>
        <div className="flex gap-1 items-center">
          <h3 className="text-sm font-semibold text-gray-400">{title}</h3>

          <Info className="h-4 w-4 text-slate-400 text-sm" />
        </div>
        <div>
          <p
            className={`text-2xl font-semibold text-gray-900 mt-1 ${className}`}
          >
            {number}
          </p>
        </div>
      </div>

      <div>{chart}</div>
    </div>
  );
};

export default Card;
