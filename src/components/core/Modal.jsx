import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, toggleModal, alignment, children, ...restProps }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef?.current?.close();
    }
    return () => modalRef?.current?.close();
  }, [isOpen]);

  setTimeout(() => {
    toggleModal(false);
  }, 5000);

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
