import { Popover } from 'components/core';
import {
  SharePopoverHeader,
  SharePopoverBody,
  SharePopoverFooter,
} from 'components/modules';

const SharePopover = ({ style, popperRef, ...restProps }) => {
  // Passing down all the refs, styles and other attributes from popper.js
  return (
    <Popover ref={popperRef} style={style} {...restProps}>
      <SharePopoverHeader />
      <SharePopoverBody />
      <SharePopoverFooter />
    </Popover>
  );
};

export default SharePopover;
