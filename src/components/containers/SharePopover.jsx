import React, { Component } from 'react';
import { Popover } from 'components/core';
import {
  SharePopoverHeader,
  SharePopoverBody,
  SharePopoverFooter,
} from 'components/modules';

const SharePopover = () => {
  return (
    <Popover>
      <SharePopoverHeader />
      <SharePopoverBody />
      <SharePopoverFooter />
    </Popover>
  );
};

export default SharePopover;
