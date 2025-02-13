import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f2f7ff;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #252831;
  margin-bottom: 20px;
`;

export const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* ✅ 최대 5개까지만 유지 */
  gap: 20px;
  margin-top: 20px;
  justify-items: center;
  max-width: 100%; /* ✅ 부모 요소를 넘지 않도록 제한 */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 🔹 태블릿 화면에서 3열 */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 🔹 모바일 화면에서 2열 */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* 🔹 더 작은 화면에서는 1열 */
  }
`;

export const AddTimeline = styled.div`
  width: 200px;
  height: 140px;
  border: 2px dashed #387dff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #387dff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  background: #f2f7ff;
  position: relative;
  transition: 0.3s;

  &:hover {
    background: #d7e5ff;
  }
`;

export const NoData = styled.div`
  font-size: 18px;
  color: #9a9a98;
  text-align: center;
  margin-top: 20px;
`;

// 📂 폴더 컨테이너 (이미지 변경 가능하도록 설정)
export const TimelineFolder = styled.div`
  width: 200px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
`;

// 📂 폴더 아이콘 스타일 (닫힘/열림 상태 변경)
export const FolderIcon = styled.img`
  width: 220px; /* ✅ 크기 조정 */
  height: 160px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const FolderContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
`;

export const TimelineTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: black;
  margin-top: 8px;
`;

export const LoadingMessage = styled.div`
  font-size: 18px;
  color: #387dff;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`;

export const AddTimelineIcon = styled.img`
  width: 220px; /* ✅ 크기 조정 */
  height: 160px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
