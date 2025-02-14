import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import * as S from "../styles/SearchDetailStyle";
import noImage from "../assets/noimage/no-image-icon.png";
import noIcon from "../assets/noimage/noIcon.jpeg";
import bookmarkIcon from "../assets/icons/bookmark.svg";
import bookmarkFilledIcon from "../assets/icons/bookmark_filled.svg";

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
import ScrapPopup from "../components/ScrapPopup";

const sourceIconMap = {
  경향신문: Kyunghyang,
  한겨레: Hankyoreh,
  머니투데이: MoneyToday,
  한국경제: HangookEconomics,
  YTN: YTN,
  KBS: KBS,
  SBS: SBS,
  동아일보: DongA,
  중앙일보: JoongAng,
  국민일보: Kookmin,
  세계일보: Segye,
  아시아투데이: AsiaToday,
  서울경제: SeoulEconomic,
  아시아경제: AsiaEconomic,
  아주경제: AJU,
  파이낸셜뉴스: FinancialNews,
  문화일보: Munhwa,
  서울신문: SeoulShinmun,
  이투데이: Etoday,
  이데일리: Edaily,
  헤럴드경제: Herald,
  매일경제: Maeil,
  EBN: EBN,
};

const SearchDetail = () => {
  const { publisherName } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("query") || "";

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [bookmarks, setBookmarks] = useState({});

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const BASE_URL = "http://13.238.115.119";
        const articleUrl = `${BASE_URL}/api/articles/${keyword}/${publisherName}`;
        const countUrl = `${BASE_URL}/api/articles/count/${keyword}`;

        console.log("API 요청 URL:", articleUrl);
        console.log("기사 개수 API 요청:", countUrl);

        const [articleResponse, countResponse] = await Promise.all([
          axios.get(articleUrl),
          axios.get(countUrl),
        ]);

        console.log("✅ 기사 데이터:", articleResponse.data);
        console.log("✅ 기사 개수 데이터:", countResponse.data);

        setArticles(
          Array.isArray(articleResponse.data.articles)
            ? articleResponse.data.articles
            : []
        );
        setTotalCount(countResponse.data.mediaCounts[publisherName] || 0);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        setArticles([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [keyword, publisherName]);

  const toggleBookmark = (index) => {
    setBookmarks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!articles || !Array.isArray(articles) || articles.length === 0) {
    return <div>해당 키워드에 대한 기사가 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.PublisherHeader>
        <S.PublisherLogo
          src={sourceIconMap[publisherName] || noIcon}
          alt={publisherName}
        />
      </S.PublisherHeader>

      <S.KeywordText>
        "<S.HighlightText>{keyword}</S.HighlightText>" 뉴스 검색 결과 총{" "}
        <S.HighlightText>{totalCount}</S.HighlightText>건입니다.
      </S.KeywordText>

      {articles.map((article, index) => (
        <S.Article key={index}>
          <S.ThumbnailWrapper>
            <S.ArticleImage
              src={
                article.thumbnail && article.thumbnail.trim() !== ""
                  ? article.thumbnail
                  : noImage
              }
              alt="기사 이미지"
            />
            <S.ScrapIcon
              src={bookmarks[index] ? bookmarkFilledIcon : bookmarkIcon}
              alt="스크랩"
              onClick={() => toggleBookmark(index)}
            />
          </S.ThumbnailWrapper>

          <S.ArticleContent>
            <S.ArticleTitle
              as="a"
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </S.ArticleTitle>

            <S.ArticleSummary>
              {article.short_content ? article.short_content : "내용 없음"}
            </S.ArticleSummary>

            <S.ArticleDate>
              {article.write_time ? article.write_time : "날짜 없음"}
            </S.ArticleDate>
          </S.ArticleContent>
        </S.Article>
      ))}
      <ScrapPopup />
    </S.Container>
  );
};

export default SearchDetail;
