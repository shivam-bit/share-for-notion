import React, { useState } from 'react';
import { Button } from 'components/core';
import { AccessLevelMenu } from 'components/modules';
const AccessibilityModalHeader = ({
  setQuery,
  activeSelections,
  removeFromActiveSelection,
}) => {
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
      <AccessLevelMenu />

      <Button type="secondary">Invite</Button>
    </div>
  );
};

export default AccessibilityModalHeader;
