import React, { useState, useEffect, useContext } from 'react';
import { usePopper } from 'react-popper';
import { ShareContext } from 'context';
import AccessLevelPopover from './AccessLevelPopover';
import { Button } from 'components/core';
const AccessLevelMenu = ({ defaultAccessLevel, entityType, email, name }) => {
  const { updateAccessLevel } = useContext(ShareContext);
  const accessLevels = ['Full access', 'Can edit', 'Can view', 'No access'];
  const [accessLevel, setAccessLevel] = useState(
    defaultAccessLevel || accessLevels[0]
  );
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
  useEffect(() => {
    updateAccessLevel(accessLevel, entityType, email, name);
  }, [accessLevel]);

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
};

export default AccessLevelMenu;
