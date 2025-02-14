import styled from "styled-components";
import palette from "../lib/colorPalette.js";

export const Container = styled.div`
  padding: 0 10%;
  background-color: ${palette.background};
  margin: 0 auto; /* 양쪽 여백을 동일하게 하여 가운데 정렬 */
  width: 100%; /* 전체 너비를 100%로 설정 */
  box-sizing: border-box;
`;

export const Heading = styled.div`
  font-size: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
  font-weight: 500;
`;

export const Section = styled.div`
  margin-bottom: 32px;
  padding-bottom: 3%;
`;

export const DateHeading = styled.div`
  font-size: 20px;
  color: #9a9a98;
  margin-bottom: 16px;
  font-weight: 400;
`;

export const Grid = styled.div`
  display: grid;

  @media (min-width: 0px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  gap: 20px;
  max-width: 100%; /* 최대 너비를 설정하여 웹 페이지에서 중앙에 배치 */
  margin: 0 auto; /* 가운데 정렬 */
  box-sizing: border-box;
  width: 100%;
`;

export const Message = styled.div`
  font-size: 30px;
  color: #666;
  text-align: center;
  padding: 20px;
  margin-top: 20%;
`;
