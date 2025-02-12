import styled from "styled-components";


export const Card = styled.div`
  position: relative;
  width: 380px; 
  height: 350px; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  overflow: hidden;
`;


export const CardBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 105%;
  height: 100%;
  background-image: url("../../src/assets/icons/Union.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 16px;
  border-radius: 10px;
`;


export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: bold;
`;

export const TotalArticles = styled.span`
  font-size: 13px;
  color: #535350;
  margin-left: 17px;
  margin-top: 20px;
`;

export const ViewMoreButton = styled.button`
  font-size: 13px;
  color: #535350;
  margin-top: 20px;
  margin-right: 40px;
  background: none;
  border: none;
  cursor: pointer;
  &:after {
    content: ">";
    margin-left: 5px;
    font-size: 14px;
  }
`;


export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 35px;
  margin-top: 5px;
`;


export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 43%;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin-left:5px;
`;


export const CardImage = styled.img`
  width: 155px;
  height: 95px;
  object-fit: cover;
  border-radius: 2px;
`;


export const ScrapIcon = styled.img`
  position: absolute;
  bottom: 47px;
  right: -5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;


export const ImageArticleTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  white-space: normal;
  word-break: keep-all;
  max-width: 150px; 
  max-height: 36px;
`;


export const TextArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 130px;
  overflow: hidden;
  padding: 5px 10px;
  gap: 6px;
  margin-top: 7px;
  margin-left: 30px;
`;

export const ArticleText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  font-size: 12px;
  font-weight: bold;
  overflow: hidden;
  
`;

export const ArticleTitle = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ScrapIconText = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 10px;
`;



export const SourceIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const SourceIconContainer = styled.div`
  position: absolute;
  top: 7px;
  margin-left: 32px;
  width: 60px;
  height: 50px;
`;
