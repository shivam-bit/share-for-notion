import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import { Button } from 'components/core';
import { AccessLevelMenu } from 'components/modules';
const AccessibilityModalHeader = ({
  setQuery,
  activeSelections,
  removeFromActiveSelection,
}) => {
  const accessLevels = ['Full access', 'Can edit', 'Can view', 'No access'];
  const [accessLevel, setAccessLevel] = useState(accessLevels[0]);
  const [accessLevelButton, setAccessLevelButton] = useState();
  const [accessLevelModal, setAccessLevelModal] = useState();
  const [isAccessLevelMenuOpen, setIsAccessLevelMenuOpen] = useState(false);

  const { styles, attributes } = usePopper(
    accessLevelButton,
    accessLevelModal,
    {
      placement: 'bottom-end',
    }
  );

  const toggleAccessLevelMenu = () => {
    setIsAccessLevelMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="accessibility-modal__header">
      {activeSelections.map(({ item }, index) => (
        <Button
          className="btn--tag"
          key={index}
          onClick={() => removeFromActiveSelection(activeSelections[index])}
        >
          {item.name}
          <img src="icons/cross.svg" alt="" />
        </Button>
      ))}

      <input
        type="text"
        className="active-share-container__input"
        placeholder="Search emails, names or groups"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button ref={setAccessLevelButton} onClick={toggleAccessLevelMenu}>
        {accessLevel}
        <img src="icons/chevron-down.svg" alt="" />
      </Button>
      {isAccessLevelMenuOpen ? (
        <AccessLevelMenu
          accessLevels={accessLevels}
          toggleAccessLevelMenu={toggleAccessLevelMenu}
          setAccessLevel={setAccessLevel}
          ref={setAccessLevelModal}
          styles={styles.popper}
          {...attributes.popper}
        />
      ) : null}

      <Button type="secondary">Invite</Button>
    </div>
  );
};

export default AccessibilityModalHeader;
