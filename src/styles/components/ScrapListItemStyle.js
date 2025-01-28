import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 294 / 350;
  max-width: calc(100% - 20px);
  box-sizing: border-box;
`;
export const EmptyCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const CardBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../src/assets/icons/ScrapItem.png"); /* Card 배경 이미지 */
  background-size: cover;
  background-position: center;
  padding: 8px;
  border-radius: 8px;
`;
export const SourceIconContainer = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  overflow: hidden;
  flex-shrink: 0;
`;
export const SourceIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: contain;
  overflow: hidden;
`;
export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  margin-top: 2px;
  margin-bottom: 10px;
`;
export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
export const BookmarkButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Keyword = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #387dff;
  background-color: #dde9ff;
  border-radius: 4px;
  padding: 3px 9px;
  margin: 0;
  line-height: 1.4;
  display: inline-block;
`;
export const PublishedDate = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #9a9a98;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: 1.4; /* 가독성을 위한 줄 간격 */
  height: 42px; /* 고정 높이 (예: 2줄 기준) */
  overflow: hidden; /* 텍스트가 넘칠 경우 숨김 처리 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 "..." 추가 */
  display: -webkit-box; /* 멀티라인 처리 */
  -webkit-line-clamp: 2; /* 최대 2줄로 제한 */
  -webkit-box-orient: vertical;
`;
