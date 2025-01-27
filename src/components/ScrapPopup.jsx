import React, { useState } from "react";
import ScrapPopupItem from "./ScrapPopupItem";
import popupBtn from "../assets/icons/popup-btn.png";
import * as S from "../styles/components/ScrapPopupStyle.js";
import alertMsg from "../assets/icons/alert.png";

/*API 연결 전 테스트 데이터*/
const scrapData = [
  { id: "1", articleID: "101", title: "경제 뉴스 테스트 해보기" },
];

const data = [
  {
    articleID: "101",
    title:
      "경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목",
    source: "YTN",
    imageUrl: "/src/assets/test/images.png",
    url: "https://",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  {
    articleID: "101",
    title:
      "경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목",
    source: "YTN",
    imageUrl: "/src/assets/test/images.png",
    url: "https://",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  {
    articleID: "101",
    title:
      "경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목",
    source: "YTN",
    imageUrl: "/src/assets/test/images.png",
    url: "https://",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  {
    articleID: "101",
    title:
      "경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목",
    source: "YTN",
    imageUrl: "/src/assets/test/images.png",
    url: "https://",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  {
    articleID: "101",
    title:
      "경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목",
    source: "YTN",
    imageUrl: "/src/assets/test/images.png",
    url: "https://",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  {
    articleID: "101",
    title:
      "경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목 경제 뉴스 기사제목",
    source: "YTN",
    imageUrl: "/src/assets/test/images.png",
    url: "https://",
    publishedAt: "2025-01-17T10:00:00Z",
  },
];

const ScrapPopup = () => {
  const [isListVisible, setListVisible] = useState(false);
  const toggleList = () => {
    setListVisible(!isListVisible);
  };

  return (
    <div>
      <S.AlertContainer isPopupVisible={isListVisible}>
        <S.Alert src={alertMsg} />
        <S.AlertText>스크랩 목록을 확인하세요</S.AlertText>
      </S.AlertContainer>
      <S.FloatingButton isPopupVisible={isListVisible} onClick={toggleList}>
        <img src={popupBtn} />
      </S.FloatingButton>
      <S.ScrapPopupContainer isVisible={isListVisible}>
        {data.map((item) => (
          <ScrapPopupItem key={item.articleID} data={item} />
        ))}
      </S.ScrapPopupContainer>
    </div>
  );
};

export default ScrapPopup;
