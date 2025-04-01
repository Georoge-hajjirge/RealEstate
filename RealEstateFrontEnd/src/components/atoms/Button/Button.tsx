import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
  className?:string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick,className, disabled, variant = 'primary' , type = 'button'}) => {
  const baseStyle = 'px-6 py-2 rounded-md text-white';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-400 hover:bg-gray-500',
    danger: 'bg-red-600 hover:bg-red-700',
  };

  return (
    <button  type={type} onClick={onClick} disabled={disabled} className={`${baseStyle}${className} ${variantStyles[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
