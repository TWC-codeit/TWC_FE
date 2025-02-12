import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  background: #f7f7f7;
  min-height: 100vh;
  position: relative;
`;

// 왼쪽 영역 (헤더 + 버블)
export const LeftSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// 헤더 영역
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #252831;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #959595;
  margin-top: 5px;
`;

// 언급 많음/적음 바
export const MentionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  min-width: 150px;
  margin-left: auto;

  span {
    font-size: 14px;
    color: #666;
    margin: 0 10px;
  }

  .bar {
    flex-grow: 1;
    height: 8px;
    background: linear-gradient(90deg, #e1ebff 0%, #387dff 100%);
    border-radius: 39px;
  }
`;

// 키워드 버블 스타일
export const BubbleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Bubble = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => Math.max(12, size / 5)}px;
  font-weight: bold;
  color: white;
  text-align: center;
  word-break: break-word;
  background: #387dff;
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// 오른쪽 사이드바
export const Sidebar = styled.div`
  width: 30%;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SidebarSection = styled.div`
  margin-bottom: 20px;
`;

export const SidebarTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #9a9a98;
  margin-bottom: 10px;
`;

export const TopKeyword = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #161613;
`;

export const KeywordCount = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #535350;
  margin-left: 10px;
`;

export const KeywordList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const KeywordItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  color: #161613;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const NoData = styled.div`
  font-size: 18px;
  color: #9a9a98;
  text-align: center;
  margin-top: 20px;
`;
