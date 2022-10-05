import React from 'react';

const ToggleSwitch = ({ value, clickHandler }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={value} onClick={clickHandler} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
