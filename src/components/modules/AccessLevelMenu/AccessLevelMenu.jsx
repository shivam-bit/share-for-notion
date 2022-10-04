import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import AccessLevelPopover from './AccessLevelPopover';
import { Button } from 'components/core';
function AccessLevelMenu() {
  const accessLevels = ['Full access', 'Can edit', 'Can view', 'No access'];
  const [accessLevel, setAccessLevel] = useState(accessLevels[0]);
  const [accessLevelButton, setAccessLevelButton] = useState();
  const [accessLevelModal, setAccessLevelModal] = useState();
  const [isAccessLevelPopoverOpen, setIsAccessLevelPopoverOpen] =
    useState(false);
  const { styles, attributes } = usePopper(
    accessLevelButton,
    accessLevelModal,
    {
      placement: 'bottom-end',
    }
  );
  const toggleAccessLevelPopover = () => {
    setIsAccessLevelPopoverOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Button ref={setAccessLevelButton} onClick={toggleAccessLevelPopover}>
        {accessLevel}
        <img src="icons/chevron-down.svg" alt="" />
      </Button>
      {isAccessLevelPopoverOpen ? (
        <AccessLevelPopover
          accessLevels={accessLevels}
          toggleAccessLevelMenu={toggleAccessLevelPopover}
          setAccessLevel={setAccessLevel}
          ref={setAccessLevelModal}
          styles={styles.popper}
          {...attributes.popper}
        />
      ) : null}
    </div>
  );
}

export default AccessLevelMenu;
