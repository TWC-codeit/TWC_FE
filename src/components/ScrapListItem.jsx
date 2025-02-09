import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../assets/api/Cookie.js";
import * as S from "../styles/components/ScrapListItemStyle.js";

import bookmarkIcon from "../assets/icons/bookmark.svg";
import bookmarkFilledIcon from "../assets/icons/bookmark_filled.svg";
import noImage from "../assets/noimage/no-image-icon.png";
import noIcon from "../assets/noimage/noIcon.jpeg";

import Kyunghyang from "../assets/source/Kyunghyang Shinmun.png";
import Hankyoreh from "../assets/source/Hankyoreh.png";
import MoneyToday from "../assets/source/Money today.png";
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

/* 뉴스사별 아이콘 매핑 */
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

// 발행일 "YYYY.MM.DD" 포맷화
const formatPublishedDate = (isoDate) => {
  if (!isoDate) return "날짜 없음";
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const apiUrl = import.meta.env.VITE_APP_API_URL;

const ScrapListItem = ({ scrap, isEmpty }) => {
  const [isBookmarked, setIsBookmarked] = useState(true);

  if (isEmpty) {
    return <S.EmptyCard />;
  }

  const accessToken = getCookie(access_token); //로그인할때 쿠키 저장된 키로 바꾸기

  /* 북마크 버튼 핸들 함수 */
  const handleBookmarkToggle = async (event) => {
    event.stopPropagation(); // 이벤트 전파 방지

    try {
      if (isBookmarked) {
        // 스크랩 삭제 API 호출
        const response = await axios.delete(
          `${apiUrl}/scraps/${scrap.scrapId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setIsBookmarked(false);
        if (response.status === 404) {
          console.error({ message });
        } else if (response.status === 200) console.log("스크랩 삭제 성공");
      } else {
        // 스크랩 생성 API 호출
        const response = await axios.post(
          `${apiUrl}/scraps`,
          { articleId: scrap.articleId },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setIsBookmarked(true);
        if (response.status === 201) {
          console.log("스크랩 추가 성공");
        }
      }
    } catch (error) {
      console.error("스크랩 API 호출 중 오류:", error);
    }
  };

  return (
    <S.Card onClick={() => window.open(scrap.url, "_blank")}>
      <S.CardBackground>
        <S.SourceIconContainer>
          <S.SourceIcon
            src={sourceIconMap[scrap.source] || noIcon}
            alt="뉴스사"
            style={sourceIconMap[scrap.source] ? {} : { objectFit: "cover" }}
          />
        </S.SourceIconContainer>
        {/* 이미지 링크 null 이나 오류일 경우 default Image 출력 */}
        <S.ThumbnailContainer>
          <S.Thumbnail
            src={scrap.imageUrl || noImage}
            alt="썸네일"
            onError={(e) => {
              e.target.onerror = null; // 무한 루프 방지
              e.target.src = noImage;
              e.target.style.objectFit = "contain";
            }}
            style={scrap.imageUrl ? {} : { objectFit: "contain" }}
          />
          <S.BookmarkButton onClick={handleBookmarkToggle}>
            <img
              src={isBookmarked ? bookmarkFilledIcon : bookmarkIcon} // 상태에 따라 아이콘 변경
              alt="북마크"
            />
          </S.BookmarkButton>
        </S.ThumbnailContainer>

        <S.CardContent>
          <S.ContentHeader>
            <S.Keyword>{scrap.keyword}</S.Keyword>
            <S.PublishedDate>
              {formatPublishedDate(scrap.publishedAt)}
            </S.PublishedDate>
          </S.ContentHeader>
          <S.Title>{scrap.title}</S.Title>
        </S.CardContent>
      </S.CardBackground>
    </S.Card>
  );
};
export default ScrapListItem;
