import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, toggleModal, alignment, children, ...restProps }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef?.current.showModal();
      document.body.style.position = 'fixed';
    } else {
      modalRef?.current?.close();
    }
    return () => {
      document.body.style.position = '';
      modalRef?.current?.close();
    };
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
