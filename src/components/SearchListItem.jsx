import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
  ViewMoreButton,
} from "../styles/components/SearchListItemStyle";

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
import { getCookie } from "../api/Cookie";
import axios from "axios";
import { useModal } from "../api/ModalContext"; /* ✅ 모달 임포트 */

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

const SearchListItem = ({ publisher, articles, keyword }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookmarkedArticles, setBookmarkedArticles] = useState({});
  const { openModal, closeModal } = useModal(); /* ✅ 모달 사용 함수 */

  const updatedArticles = articles.map((article) => ({
    ...article,
    scrapId: null,
  }));

  //console.log(updatedArticles);

  const toggleBookmark = async (article, index) => {
    /* ✅ 비로그인 확인 로직 시작*/
    if (!getCookie("access_token")) {
      openModal({
        type: "button",
        message: "로그인하셔야 본 서비스를 이용할 수 있습니다.",
        leftText: "확인",
        rightText: "로그인하기",
        onLeft: () => {
          closeModal();
        },
        onRight: () => {
          closeModal();
          navigate("/login");
        },
      });
    }
    /* ✅ 비로그인 확인 로직 끝 */
    if (article.scrapId) {
      try {
        const response = await axios.delete(
          `http://13.238.115.119/api/scraps/${article.scrapId}`,
          {
            headers: {
              Authorization: `Bearer ${getCookie("access_token")}`,
            },
          }
        );
        if (response.status === 200) {
          /* ✅ 스크랩 취소 완료 알림 시작 */
          openModal({
            type: "alert",
            message: "스크랩이 취소되었습니다",
          });

          setTimeout(() => {
            closeModal();
          }, 1000);
          /* ✅ 스크랩 취소 완료 알림 끝 */
          setBookmarkedArticles((prev) => {
            const updated = { ...prev };
            delete updated[article.scrapId];
            return updated;
          });
          article.scrapId = null;
        }
      } catch (error) {
        console.error("스크랩 해제 오류:", error);
      }
    } else {
      try {
        //console.log(`keyword:${keyword}:company_articles:${publisher}`);
        //console.log(index);
        const response = await axios.post(
          `http://13.238.115.119/api/scraps`,
          {
            redisKey: `keyword:${keyword}:company_articles:${publisher}`,
            index: index,
          },
          {
            headers: {
              Authorization: `Bearer ${getCookie("access_token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 201) {
          /* ✅ 스크랩 취소 완료 알림 시작 */
          openModal({
            type: "alert",
            message: "스크랩이 완료되었습니다",
          });

          setTimeout(() => {
            closeModal();
          }, 1000);
          /* ✅ 스크랩 취소 완료 알림 끝 */
          setBookmarkedArticles((prev) => ({
            ...prev,
            [response.data.id]: true, // scrapId로 북마크 상태 관리
          }));
          article.scrapId = response.data.id;
          //console.log(article.scrapId);
        }
      } catch (error) {
        console.error(
          "스크랩 추가 오류:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };

  return (
    <Card>
      <CardBackground>
        <SourceIconContainer>
          <SourceIcon
            src={sourceIconMap[publisher] || noIcon}
            alt={publisher}
          />
        </SourceIconContainer>

        <CardHeader>
          <TotalArticles>총 {articles.length}건</TotalArticles>
          <ViewMoreButton
            onClick={() => navigate(`/search/${publisher}${location.search}`)}
          >
            전체보기
          </ViewMoreButton>
        </CardHeader>

        <ThumbnailContainer>
          {articles.slice(0, 2).map((article, index) => (
            <ThumbnailWrapper key={index}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <CardImage
                  src={article.thumbnail || noImage}
                  alt="기사 썸네일"
                />
              </a>
              <ScrapIcon
                src={
                  article.scrapId && bookmarkedArticles[article.scrapId]
                    ? bookmarkFilledIcon
                    : bookmarkIcon
                }
                alt="스크랩"
                onClick={() => toggleBookmark(article, index)}
              />
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ImageArticleTitle>{article.title}</ImageArticleTitle>
              </a>
            </ThumbnailWrapper>
          ))}
        </ThumbnailContainer>

        <TextArticlesContainer>
          {articles.slice(2, 6).map((article, index) => (
            <ArticleText key={index}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {article.title}
              </a>
              <ScrapIconText
                src={
                  article.scrapId && bookmarkedArticles[article.scrapId]
                    ? bookmarkFilledIcon
                    : bookmarkIcon
                }
                alt="스크랩"
                onClick={() => toggleBookmark(article, index + 2)}
              />
            </ArticleText>
          ))}
        </TextArticlesContainer>
      </CardBackground>
    </Card>
  );
};

export default SearchListItem;
