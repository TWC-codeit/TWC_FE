import React, { createContext, useContext, useState } from "react";

// 모달 타입과 상태를 저장할 Context 생성
const ModalContext = createContext();

// 모달 상태와 관련된 함수를 제공하는 Provider 컴포넌트
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    type: null,
    message: "",
    leftText: "",
    rightText: "",
    onLeft: null,
    onRight: null,
  });

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent({
      type: null,
      message: "",
      leftText: "",
      rightText: "",
      onLeft: null,
      onRight: null,
    });
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, modalContent, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// ModalContext 사용하기 위한 custom hook
export const useModal = () => useContext(ModalContext);
