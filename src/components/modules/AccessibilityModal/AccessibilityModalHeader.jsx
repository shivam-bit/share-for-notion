import React, { useRef, useEffect } from 'react';
import { Button } from 'components/core';

const AccessibilityModalHeader = ({ setQuery, children, ...restProps }) => {
  return (
    <div className="accessibility-modal__header">
      <Button className="btn--tag">
        Share
        <img src="icons/cross.svg" alt="" />
      </Button>
      <input
        type="text"
        className="active-share-container__input"
        placeholder="Search emails, names or groups"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="btn--dropdown">
        Full access
        <img src="icons/chevron-down.svg" alt="" />
      </Button>
      <Button type="secondary">Invite</Button>
    </div>
  );
};

export default AccessibilityModalHeader;
