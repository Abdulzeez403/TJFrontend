import React from "react";
import { Field } from "formik";
import { cn } from "@/lib/utils";

interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  error?: string | undefined;
  touched?: boolean;
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  error,
  touched,
  className = "",
}) => {
  const commonClasses = cn(
    "w-full p-1 border-2 border-slate-300 rounded-lg focus:ring-red-500 focus:border-red-500"
  );

  return (
    <div className={`mb-4  ${className}`}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Field as="select" name={name} className={`${commonClasses}`}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      {error && touched && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default SelectField;
