import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, children, ...restProps }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    }
    return () => modalRef?.current?.close();
  }, [isOpen]);

  return (
    <dialog className="modal" ref={modalRef} {...restProps}>
      {children}
    </dialog>
  );
};

export default Modal;
