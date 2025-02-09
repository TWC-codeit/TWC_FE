import styled from "styled-components";

export const AlertContainer = styled.div`
  position: fixed;
  bottom: 80px;
  left: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s ease;
  opacity: ${({ isPopupVisible }) => (isPopupVisible ? 0 : 1)};
  z-index: 15;
`;

export const Alert = styled.img`
  width: 190px; /* 이미지 크기 */
  height: 56px;
  object-fit: contain;
  position: relative;
`;

export const AlertText = styled.div`
  position: absolute; /* 텍스트가 이미지 위에 오버레이되도록 설정 */
  bottom: 20px; /* 텍스트의 위치를 이미지 하단에 설정 */
  left: 50%;
  transform: translateX(-50%); /* 텍스트를 가로로 중앙 정렬 */
  font-size: 14px;
  color: #fff; /* 텍스트 색상 */
  font-weight: bold;
  text-align: left; /* 텍스트 가운데 정렬 */
  white-space: nowrap;
  padding: 5px;
  border-radius: 4px;
`;
export const FloatingButton = styled.button`
  position: fixed;
  bottom: ${({ isPopupVisible }) =>
    isPopupVisible ? "calc(280px + 56px)" : "20px"};
  left: 30px;
  background-color: transparent;
  color: white;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 15;
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

export const ScrapPopupContainer = styled.div`
  width: 90%;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 2px solid #387dff;
  border-radius: 10px 10px 0 0;
  margin: 0 auto;
  padding: 16px;
  max-height: 300px;
  overflow-x: auto; /* 가로 스크롤 */
  overflow-y: hidden;
  white-space: nowrap;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(130%)"};
  z-index: 13;
`;
