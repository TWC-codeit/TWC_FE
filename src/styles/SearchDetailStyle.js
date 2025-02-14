import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin-left: 100px;
`;

export const PublisherHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const PublisherLogo = styled.img`
  width: 120px;
  height: 70px;
  border-radius: 10px;
`;

export const KeywordText = styled.p`
  font-size: 15px;
  margin-bottom: 20px;
`;

export const HighlightText = styled.span`
  color: #387DFF;
  font-weight: bold;
`;

export const Article = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding:15px 0;
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
`;

export const ArticleImage = styled.img`
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ScrapIcon = styled.img`
  position: absolute;
  bottom: 8px;
  right: 6px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  background-color: rgba(255, 255, 255, 0.5); 
  padding: 1px; 
  border-radius: 10%;
`;

export const ArticleContent = styled.div`
  
  margin-left:10px;
  margin-top: -15px;
  
  
`;

export const ArticleTitle = styled.h3`
  font-size: 21px;
  font-weight: bold;
  color: #333;
`;

export const ArticleSummary = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; 
  word-break: break-word;
  line-height: 1.5;
  max-height: 4.5em; 
  margin-top: 5px;
  color: #333;
  font-size: 0.95rem;
  margin-top:10px;
`;

export const ArticleDate = styled.div`
  margin-top: 10px;
  font-size: 0.85rem;
  color: gray;
  display: block; 
  white-space: nowrap; 
`;
