import React, { forwardRef } from 'react';

const Popover = forwardRef(({ style, children, ...restProps }, ref) => {
  return (
    <div className="popover" ref={ref} style={style} {...restProps}>
      {children}
    </div>
  );
});

export default Popover;
