"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps {
  label: string;
  name: string;
  type?: string; // For input only
  placeholder?: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  as?: "input" | "textarea"; // Choose between input or textarea
  rows?: number; // For textarea only
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  disabled = false,
  as = "input",
  rows = 3, // Default for textarea
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible((prev) => !prev);
  };

  const commonClasses = cn(
    "w-full",
    error && touched && "border-red-500 focus:ring-red-500 focus:border-red-500"
  );

  return (
    <div className="mb-4">
      <Label htmlFor={name} className="block mb-1">
        {label}
      </Label>

      {as === "input" ? (
        <div className="relative">
          <ShadcnInput
            id={name}
            name={name}
            type={
              type === "password" && !isPasswordVisible ? "password" : "text"
            }
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            className={commonClasses}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute top-1/2 right-3 transform -translate-y-1/2"
              aria-label="Toggle password visibility"
            >
              {isPasswordVisible ? (
                <FiEyeOff className="text-gray-500" />
              ) : (
                <FiEye className="text-gray-500" />
              )}
            </button>
          )}
        </div>
      ) : (
        <ShadcnTextarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          rows={rows}
          className={commonClasses}
        />
      )}

      {error && touched && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
