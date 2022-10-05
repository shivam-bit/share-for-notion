import React, { useState, useEffect, useContext } from 'react';
import { Popover } from 'components/core';
import {
  SharePopoverHeader,
  SharePopoverBody,
  SharePopoverFooter,
} from 'components/modules';

const SharePopover = ({ style, popperRef, ...restProps }) => {
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] =
    useState(false);
  const toggleAccessibilityModal = () => {
    setIsAccessibilityModalOpen((prevState) => !prevState);
  };
  useEffect(() => {
    console.log(isAccessibilityModalOpen);
  }, [isAccessibilityModalOpen]);

  return (
    <Popover ref={popperRef} style={style} {...restProps}>
      <SharePopoverHeader />
      <SharePopoverBody handleInput={toggleAccessibilityModal} />
      <SharePopoverFooter />
    </Popover>
  );
};

export default SharePopover;
