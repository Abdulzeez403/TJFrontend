import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "danger" | "outline";
  disabled?: boolean;
  icon?: React.ReactNode;
  // type: "button" | "submit" | "link";
}

const Button = ({
  text,
  isLoading = false,
  variant = "primary",
  disabled = false,
  icon,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center rounded-lg px-4 py-2 font-medium transition duration-200";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
  };

  const selectedVariant = variants[variant];

  return (
    <button
      className={`${baseStyles} ${selectedVariant} ${
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Optional Loading Spinner */}
      {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {/* Optional Icon */}
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
