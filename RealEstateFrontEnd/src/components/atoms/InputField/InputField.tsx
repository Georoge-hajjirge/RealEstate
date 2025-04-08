import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  register?: UseFormRegisterReturn; 
  inputFieldClass?:string;
  divClass?:string;
  labelClass?:string;
 
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange, disabled, error ,register,inputFieldClass,divClass,labelClass, ...inputProps}) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${inputFieldClass} ${divClass} ${labelClass}`}
        {...register}
        {...inputProps}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default InputField;
