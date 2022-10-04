import React from 'react';
import { Button } from 'components/core';

const Footer = () => {
  return (
    <div className="share-popover__footer">
      <Button>
        <img src="icons/question-mark-circle.svg" alt="" />
        learn about sharing
      </Button>
      <Button style={{ fontWeight: 500, color: 'black' }}>
        <img src="icons/link.svg" alt="" />
        Copy link
      </Button>
    </div>
  );
};

export default Footer;
