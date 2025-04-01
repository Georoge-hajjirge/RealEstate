import React from "react";

interface SelectFieldProps {
  label: string;
  name: string;
  value?: string;
  options: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, value, options, onChange, error }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-medium text-gray-700">{label}</label>
      <select 
        name={name} 
        value={value}
        onChange={onChange} 
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select a role</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default SelectField;
