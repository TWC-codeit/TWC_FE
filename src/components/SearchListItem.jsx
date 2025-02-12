import React from "react";
import { useNavigate } from "react-router-dom"; 
import { 
    Card, 
    CardBackground, 
    SourceIconContainer, 
    SourceIcon, 
    ThumbnailContainer, 
    ThumbnailWrapper, 
    CardImage, 
    ImageArticleTitle,
    TextArticlesContainer,
    ArticleText, 
    ScrapIcon, 
    ScrapIconText, 
    CardHeader, 
    TotalArticles, 
    ViewMoreButton
  } from "../styles/components/SearchListItemStyle";

import noImage from "../assets/noimage/no-image-icon.png";
import noIcon from "../assets/noimage/noIcon.jpeg";
import Kyunghyang from "../assets/source/Kyunghyang Shinmun.png";
import Hankyoreh from "../assets/source/Hankyoreh.png";
import MoneyToday from "../assets/source/money_today.png";
import HangookEconomics from "../assets/source/Hangook Economics.png";
import YTN from "../assets/source/YTN.png";
import KBS from "../assets/source/KBS.png";
import SBS from "../assets/source/SBS.png";
import DongA from "../assets/source/Dong-A Ilbo.png";
import JoongAng from "../assets/source/JoongAng Ilbo.png";
import Kookmin from "../assets/source/Kookmin Ilbo.png";
import Segye from "../assets/source/Segye Ilbo.png";
import AsiaToday from "../assets/source/Asia Today.png";
import SeoulEconomic from "../assets/source/Seoul Economic Daily.png";
import AsiaEconomic from "../assets/source/Asia Economic Daily.png";
import AJU from "../assets/source/AJU Business Daily.png";
import FinancialNews from "../assets/source/Financial News.png";
import Munhwa from "../assets/source/Munhwa Ilbo.png";
import SeoulShinmun from "../assets/source/Seoul Shinmun.png";
import Etoday from "../assets/source/Etoday.png";
import Edaily from "../assets/source/Edaily.png";
import Herald from "../assets/source/Herald Business.png";
import Maeil from "../assets/source/Maeil Business Newspaper.png";
import EBN from "../assets/source/EBN.png";
import bookmarkIcon from "../assets/icons/bookmark.svg";

const sourceIconMap = {
  "경향신문": Kyunghyang,
  "한겨레": Hankyoreh,
  "머니투데이": MoneyToday,
  "한국경제": HangookEconomics,
  "YTN": YTN,
  "KBS": KBS,
  "SBS": SBS,
  "동아일보": DongA,
  "중앙일보": JoongAng,
  "국민일보": Kookmin,
  "세계일보": Segye,
  "아시아투데이": AsiaToday,
  "서울경제": SeoulEconomic,
  "아시아경제": AsiaEconomic,
  "아주경제": AJU,
  "파이낸셜뉴스": FinancialNews,
  "문화일보": Munhwa,
  "서울신문": SeoulShinmun,
  "이투데이": Etoday,
  "이데일리": Edaily,
  "헤럴드경제": Herald,
  "매일경제": Maeil,
  "EBN": EBN,
};


const SearchListItem = ({ publisher, articles }) => {
    const navigate = useNavigate();  // ✅ useNavigate 사용

    const handleViewMoreClick = () => {
        navigate(`/search/${publisher}`);  // ✅ 클릭 시 해당 언론사 페이지로 이동
    };

    const imageArticles = articles.filter(article => article.thumbnail).slice(0, 2);
    const textArticles = articles.filter(article => !article.thumbnail).slice(0, 6 - imageArticles.length);
  
    return (
      <Card>
        <CardBackground>
          {/* 뉴스사 로고 */}
          <SourceIconContainer>
            <SourceIcon src={sourceIconMap[publisher] || noIcon} alt={publisher} />
          </SourceIconContainer>

          {/* 카드 헤더 (총 개수 & 전체보기) */}
          <CardHeader>
            <TotalArticles>총 {articles.length}건</TotalArticles>
            <ViewMoreButton onClick={handleViewMoreClick}>전체보기</ViewMoreButton> 
          </CardHeader>

          {/* 이미지 기사 (썸네일 포함) */}
          <ThumbnailContainer>
            {imageArticles.map((article, index) => (
              <ThumbnailWrapper key={index}>
                <CardImage src={article.thumbnail || noImage} alt="기사 썸네일" />
                <ScrapIcon src={bookmarkIcon} alt="스크랩" />
                <ImageArticleTitle>{article.title}</ImageArticleTitle>
              </ThumbnailWrapper>
            ))}
          </ThumbnailContainer>

          {/* 텍스트 기사 (제목만) */}
          <TextArticlesContainer>
            {textArticles.map((article, index) => (
              <ArticleText key={index}>
                {article.title}
                <ScrapIconText src={bookmarkIcon} alt="스크랩" />
              </ArticleText>
            ))}
          </TextArticlesContainer>
        </CardBackground>
      </Card>
    );
};

export default SearchListItem;