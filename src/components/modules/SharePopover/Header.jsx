import React, { useContext } from 'react';
import { ShareContext } from 'components/context';
import { ToggleSwitch } from 'components/core';
import { ThreeColumnDataBox } from 'components/layout';
const Header = () => {
  const { shareToWeb, setShareToWeb } = useContext(ShareContext);
  const toggleShareToWeb = () => {
    setShareToWeb((prevState) => !prevState);
  };
  return (
    <ThreeColumnDataBox
      icon={<img src="icons/globe.svg" alt="" />}
      title="Share to web"
      description="Publish and share link with anyone"
      actionButton={
        <ToggleSwitch value={shareToWeb} clickHandler={toggleShareToWeb} />
      }
      className="share-popover__header"
    />
  );
};

export default Header;
