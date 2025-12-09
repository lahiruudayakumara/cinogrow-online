import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none transition duration-200';
  const variantStyles = variant === 'primary' 
    ? 'bg-blue-500 text-white hover:bg-blue-600' 
    : 'bg-gray-200 text-black hover:bg-gray-300';

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;