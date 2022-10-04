import React from 'react';

const ThreeColumnDataBox = ({
  icon,
  title,
  description,
  actionButton,
  className,
}) => {
  return (
    <div className={`three-col-data-box ${className ? className : ''} `}>
      {icon}
      <div className="three-col-data-box__info">
        <div className="three-col-data-box__info--title">{title}</div>
        <div className="three-col-data-box__info--desc">{description}</div>
      </div>
      {actionButton}
    </div>
  );
};

export default ThreeColumnDataBox;
