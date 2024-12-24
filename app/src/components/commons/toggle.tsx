import React, { useState } from "react";

interface ToggleProps {
  options: string[];
  onToggle: (activeOption: string) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ options, onToggle }) => {
  const [activeOption, setActiveOption] = useState(options[0]);

  const handleToggle = (option: string) => {
    setActiveOption(option);
    onToggle(option);
  };

  return (
    <div className="flex bg-white rounded-md p-1">
      {options.map((option) => (
        <button
          key={option}
          className={`flex-1 px-4 text-center transition duration-200 ${
            activeOption === option
              ? "border-slate-500 border-b-4 text-gray-700"
              : "bg-transparent text-gray-700"
          }`}
          onClick={() => handleToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
