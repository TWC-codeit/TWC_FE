import styled from "styled-components";

export const Container = styled.div`
  padding: 0 5%;
  background-color: #f5f7fa;
  max-width: 1440px; /* 콘텐츠의 최대 너비 */
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
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 20px;
  max-width: 100%; /* 최대 너비를 설정하여 웹 페이지에서 중앙에 배치 */
  margin: 0 auto; /* 가운데 정렬 */
  box-sizing: border-box;
  width: 100%;
`;
