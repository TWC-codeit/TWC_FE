import React from "react";
import { useModal } from "../api/ModalContext.jsx";
import * as M from "../styles/components/ModalStyle"; // 모달 스타일 파일 경로
import checksign from "../assets/icons/check.svg";
const Modal = () => {
  const { isOpen, modalContent, closeModal } = useModal();

  if (!isOpen) return null;

  const renderModalContent = () => {
    switch (modalContent.type) {
      case "button":
        return (
          <>
            <M.ModalMessage>{modalContent.message}</M.ModalMessage>
            <M.ModalActions>
              {modalContent.onLeft && (
                <M.LeftButton onClick={modalContent.onLeft}>
                  {modalContent.leftText}
                </M.LeftButton>
              )}
              {modalContent.onRight && (
                <M.RightButton onClick={modalContent.onRight}>
                  {modalContent.rightText}
                </M.RightButton>
              )}
            </M.ModalActions>
          </>
        );
      case "alert":
        return (
          <>
            <M.CheckIcon src={checksign} />
            <M.AlertMessage>{modalContent.message}</M.AlertMessage>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <M.ModalOverlay>
      <M.ModalContainer>{renderModalContent()}</M.ModalContainer>
    </M.ModalOverlay>
  );
};

export default Modal;
