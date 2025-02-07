import styled from "styled-components";

export const Card = styled.div`
  width: 234px;
  height: 277px;
  padding: 8px;
  margin: 10px;
  margin-right: 8px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s;
  display: inline-block;
  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;
export const Thumbnail = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Container = styled.div`
  margin: 2%;
  padding: 5px; /* 여백 추가 */
`;
export const PublishedDate = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #a8a6ac;
  text-align: right;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Source = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #387dff;
  background-color: #dde9ff;
  border-radius: 4px;
  padding: 3px 10px;
  margin: 0;
  line-height: 1.4;
  display: inline-block;
`;
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 1.4;
  height: 48px;
  overflow: hidden; /* 텍스트가 넘칠 경우 숨김 처리 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 "..." 추가 */
  display: -webkit-box; /* 멀티라인 처리 */
  -webkit-line-clamp: 2; /* 최대 2줄로 제한 */
  -webkit-box-orient: vertical;
  white-space: normal;
`;
