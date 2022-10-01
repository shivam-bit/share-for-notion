import React, { useRef, useEffect } from 'react';
import { Button } from 'components/core';

const AccessibilityModalFooter = ({ isOpen, children, ...restProps }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    }
    return () => modalRef?.current?.close();
  }, [isOpen]);

  return (
    <div className="accessibility-modal__footer">
      <Button>
        <img src="icons/question-mark-circle.svg" alt="" />
        learn about sharing
      </Button>
    </div>
  );
};

export default AccessibilityModalFooter;
