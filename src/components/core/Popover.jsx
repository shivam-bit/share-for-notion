import React, { forwardRef } from 'react';

const Popover = forwardRef(({ style, children, ...restProps }, ref) => {
  console.log(
    '🚀 ~ file: Popover.jsx ~ line 4 ~ Popover ~ style, children, ...restProps',
    style
  );
  return (
    <div className="popover" ref={ref} style={style} {...restProps}>
      {children}
    </div>
  );
});

export default Popover;
