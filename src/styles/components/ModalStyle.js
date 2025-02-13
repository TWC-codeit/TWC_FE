import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 가로축 중앙 정렬 */
  justify-content: center; /* 세로축 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

export const ModalMessage = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const LeftButton = styled.button`
  background-color: #ccc;
  padding: 10px 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  flex: 1;
  white-space: nowrap;
`;

export const RightButton = styled.button`
  background-color: #007bff;
  padding: 10px 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  flex: 1;
  white-space: nowrap;
`;

export const CheckIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

export const AlertMessage = styled.p`
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
`;
