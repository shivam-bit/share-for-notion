import React, { forwardRef } from 'react';

const Button = forwardRef(
  ({ type, className, children, ...restProps }, ref) => {
    const getButtonClassName = (type) => {
      const buttonTypes = {
        primary: 'btn--primary',
        secondary: 'btn--secondary',
      };
      const buttonClassName = buttonTypes[type?.toLowerCase()] || '';
      return `btn ${buttonClassName} ${className ? className : ''}`;
    };
    return (
      <button className={getButtonClassName(type)} {...restProps} ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
