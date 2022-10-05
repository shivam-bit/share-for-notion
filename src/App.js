import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import { ShareContextProvider } from 'context';
import { Button } from 'components/core/';
import { AccessibilityModal, SharePopover } from 'components/containers';

function App() {
  const [shareButton, setShareButton] = useState();
  const [sharePopover, setSharePopover] = useState();
  const [isSharePopoverOpen, setIsSharePopoverOpen] = useState(false);

  // Linking Share popover in reference to the button using popper.js
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

  return (
    <ShareContextProvider>
      <div className="App">
        <Button
          type="primary"
          onClick={toggleSharePopover}
          ref={setShareButton}
        >
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
    </ShareContextProvider>
  );
}

export default App;
