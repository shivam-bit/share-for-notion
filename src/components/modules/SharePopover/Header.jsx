import React from 'react';
import { ToggleSwitch } from 'components/core';
import { ThreeColumnDataBox } from 'components/layout';
const Header = () => {
  return (
    <ThreeColumnDataBox
      icon={<img src="icons/globe.svg" alt="" />}
      title="Share to web"
      description="Publish and share link with anyone"
      actionButton={<ToggleSwitch />}
      className="share-popover__header"
    />
  );
};

export default Header;
