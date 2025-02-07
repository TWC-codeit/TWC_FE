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

export const TimelineWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const AddTimeline = styled.div`
  width: 200px;
  height: 120px;
  border: 2px dashed #387dff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #387dff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
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

export const TimelineFolder = styled.div`
  width: 200px;
  height: 120px;
  background: ${({ isHovered }) => (isHovered ? "#87B1FF" : "#D7E5FF")};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
`;

export const FolderTop = styled.div`
  position: absolute;
  width: 100px;
  height: 20px;
  background: ${({ isHovered }) => (isHovered ? "#6A9AFF" : "#B0D0FF")};
  top: -10px;
  border-radius: 8px 8px 0 0;
`;

export const FolderContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NewsLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #387dff;
  border: 1px solid #387dff;
  padding: 2px 6px;
  border-radius: 4px;
`;

export const TimelineTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-top: 8px;
`;
