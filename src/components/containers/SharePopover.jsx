import React, { forwardRef } from 'react';
import { Popover } from 'components/core';
import {
  SharePopoverHeader,
  SharePopoverBody,
  SharePopoverFooter,
} from 'components/modules';

const SharePopover = ({ style, popperRef, ...restProps }) => {
  return (
    <Popover ref={popperRef} style={style} {...restProps}>
      <SharePopoverHeader />
      <SharePopoverBody />
      <SharePopoverFooter />
    </Popover>
  );
};

export default SharePopover;
