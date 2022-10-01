import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, alignment, children, ...restProps }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    }
    return () => modalRef?.current?.close();
  }, [isOpen]);

  return (
    <dialog
      className={`modal modal--${alignment ? alignment : 'vertical'}`}
      ref={modalRef}
      {...restProps}
    >
      {children}
    </dialog>
  );
};

export default Modal;
