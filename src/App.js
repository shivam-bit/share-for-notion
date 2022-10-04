import React, { useRef, useEffect, useState } from 'react';
import _ from 'lodash';
import { usePopper } from 'react-popper';
import { Button } from 'components/core/';
import { AccessibilityModal, SharePopover } from 'components/containers';
import './App.css';

function App() {
  const logSomething = () => console.log('hi');
  const [shareButton, setShareButton] = useState();
  const [sharePopover, setSharePopover] = useState();
  const [isSharePopoverOpen, setIsSharePopoverOpen] = useState(false);

  const { styles, attributes } = usePopper(shareButton, sharePopover, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
    ],
  });
  const toggleSharePopover = () => {
    setIsSharePopoverOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log({ shareButton, sharePopover });
  }, [shareButton, sharePopover]);

  return (
    <div className="App">
      <Button type="primary" onClick={toggleSharePopover} ref={setShareButton}>
        Share
        <img src="icons/share.svg" alt="" />
      </Button>
      {isSharePopoverOpen ? (
        <SharePopover
          popperRef={setSharePopover}
          style={styles.popper}
          {...attributes.popper}
        />
      ) : null}

      <AccessibilityModal />
    </div>
  );
}

export default App;
