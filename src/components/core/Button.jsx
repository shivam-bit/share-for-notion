import React from 'react';

const Button = ({ type, className, children, ...restProps }) => {
  const getButtonClassName = (type) => {
    const buttonTypes = {
      primary: 'btn--primary',
      secondary: 'btn--secondary',
    };
    const buttonClassName = buttonTypes[type?.toLowerCase()] || '';
    return `btn ${buttonClassName} ${className}`;
  };
  return (
    <button className={getButtonClassName(type)} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
