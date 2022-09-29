import React from 'react';

const Button = ({ type, children, ...restProps }) => {
  const getButtonClassName = (type) => {
    const buttonTypes = {
      primary: 'btn--primary',
      secondary: 'btn--secondary',
    };
    const buttonClassName = buttonTypes[type?.toLowerCase()] || '';
    return `btn ${buttonClassName}`;
  };
  return (
    <button className={getButtonClassName(type)} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
