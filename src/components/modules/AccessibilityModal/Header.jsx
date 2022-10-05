import React, { useContext, useState } from 'react';
import { ShareContext } from 'context';
import { Button } from 'components/core';
import { AccessLevelMenu } from 'components/modules';

const Header = ({ setQuery, activeSelections, removeFromActiveSelection }) => {
  const { saveSelections, setIsAccessibilityModalOpen } =
    useContext(ShareContext);
  const handleInvite = () => {
    // save all active selections to popover
    saveSelections();
    // close modal
    setIsAccessibilityModalOpen(false);
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
      <AccessLevelMenu />

      <Button type="secondary" onClick={handleInvite}>
        Invite
      </Button>
    </div>
  );
};

export default Header;
