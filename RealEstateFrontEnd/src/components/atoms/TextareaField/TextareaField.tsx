import React from "react";

interface TextareaFieldProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ label, name, value, onChange, required }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        required={required}
      />
    </div>
  );
};

export default TextareaField;
