import React, { forwardRef } from 'react';
import { Button } from 'components/core';
const AccessLevelPopover = forwardRef(
  (
    {
      accessLevels,
      setAccessLevel,
      toggleAccessLevelMenu,
      children,
      styles,
      ...restProps
    },
    ref
  ) => {
    const clickHandler = (levelIndex) => {
      setAccessLevel(accessLevels[levelIndex]);
      toggleAccessLevelMenu();
    };
    return (
      <div
        className="access-level-menu"
        ref={ref}
        style={styles}
        {...restProps}
      >
        {accessLevels.map((accessLevel, index) => (
          <Button
            key={index}
            onClick={() => clickHandler(index)}
            className={`access-level-menu__item ${
              accessLevel === 'No access'
                ? 'access-level-menu__item--danger'
                : null
            }`}
          >
            {accessLevel}
          </Button>
        ))}
      </div>
    );
  }
);

export default AccessLevelPopover;
