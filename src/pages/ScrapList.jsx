import React, { useState, useEffect } from "react";
import {
  Container,
  Heading,
  Section,
  DateHeading,
  Grid,
} from "../styles/ScrapListStyle.js";

import ScrapListItem from "../components/ScrapListItem.jsx";
import ScrapPopup from "../components/ScrapPopup.jsx";
// 더미 데이터: articleId로 뉴스 정보를 매핑
const articleData = {
  101: {
    source: "YTN",
    title: "AI 기술 동향",
    image: "../src/assets/test/images.png",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  102: {
    source: "MBN",
    title:
      "경제 뉴스 분석 경제 뉴스 분석 경제 뉴스 분석 경제 뉴스 분석경제 뉴스 분석 경제 뉴스 분석 ",
    image: "../src/assets/test/images.png",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  103: {
    source: "SBS",
    title: "기후 변화와 미래",
    image: "../src/assets/test/images.png",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  104: {
    source: "JTBC",
    title: "글로벌 이슈 점검",
    image: "../src/assets/test/images.png",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  105: {
    source: "KBS",
    title: "최신 스포츠 뉴스",
    image: "../src/assets/test/images.png",
    publishedAt: "2025-01-17T10:00:00Z",
  },
  106: {
    source: "조선일보",
    title: "부동산 시장 전망",
    image: "/images/news106.jpg",
    publishedAt: "2025-01-17T10:00:00Z",
  },
};

// 더미 스크랩 데이터
const scraps = [
  {
    id: 1,
    articleId: 101,
    scrapedAt: "2025-01-18T12:30:00Z",
  },
  {
    id: 2,
    articleId: 102,
    scrapedAt: "2025-01-18T14:00:00Z",
  },
  {
    id: 3,
    articleId: 103,
    scrapedAt: "2025-01-18T09:15:00Z",
  },
  {
    id: 4,
    articleId: 104,
    scrapedAt: "2025-01-18T16:45:00Z",
  },
  {
    id: 5,
    articleId: 105,
    scrapedAt: "2025-01-18T11:10:00Z",
  },
  {
    id: 6,
    articleId: 101,
    scrapedAt: "2025-01-18T12:30:00Z",
  },
  {
    id: 7,
    articleId: 102,
    scrapedAt: "2025-01-18T14:00:00Z",
  },
  {
    id: 8,
    articleId: 103,
    scrapedAt: "2025-01-18T09:15:00Z",
  },
  {
    id: 9,
    articleId: 104,
    scrapedAt: "2025-01-18T16:45:00Z",
  },
  {
    id: 10,
    articleId: 105,
    scrapedAt: "2025-01-19T11:10:00Z",
  },
  {
    id: 11,
    articleId: 105,
    scrapedAt: "2025-01-19T11:10:00Z",
  },
  {
    id: 12,
    articleId: 105,
    scrapedAt: "2025-01-20T11:10:00Z",
  },
  {
    id: 13,
    articleId: 105,
    scrapedAt: "2025-01-20T11:10:00Z",
  },
  {
    id: 14,
    articleId: 105,
    scrapedAt: "2025-01-20T11:10:00Z",
  },
];

// "YYYY년 MM월 DD일" 형식으로 scrapedAt 변환
const formatDateHeading = (isoDate) => {
  if (!isoDate) return "날짜 없음";
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}년 ${month}월 ${day}일`;
};

const ScrapList = () => {
  const [groupedScraps, setGroupedScraps] = useState({});
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    // 날짜별 그룹화
    const groupByDate = (scraps) => {
      return scraps.reduce((acc, scrap) => {
        const date = scrap.scrapedAt.split("T")[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push(scrap);
        return acc;
      }, {});
    };

    setGroupedScraps(groupByDate(scraps));

    // 화면 크기에 따라 카드 열 개수 동적으로 계산
    const updateColumns = () => {
      if (window.innerWidth >= 1200) setColumns(5);
      else if (window.innerWidth >= 1000) setColumns(4);
      else if (window.innerWidth >= 800) setColumns(3);
      else if (window.innerWidth >= 600) setColumns(2);
      else setColumns(1);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // 빈 카드 채우기 함수 (열 개수에 맞춰 동적으로)
  const fillEmptyCards = (cards) => {
    const remainder = cards.length % columns;
    if (remainder === 0) return cards;
    const emptyCardsCount = columns - remainder;
    return [
      ...cards,
      ...Array(emptyCardsCount).fill({
        id: `empty-${cards.length}`,
        isEmpty: true,
      }),
    ];
  };

  /* 스크랩, 기사 클릭 시 이벤트 API 연결하기 */
  const handleBookmarkClick = (event) => {
    event.stopPropagation();
    alert("버튼 클릭됨!");
  };

  const handleArticleClick = (id) => {
    alert(`기사 ${id} 클릭`);
  };

  return (
    <Container>
      <Heading>스크랩 목록</Heading>
      {Object.entries(groupedScraps).map(([date, scraps]) => (
        <Section key={date}>
          <DateHeading>{formatDateHeading(date)}</DateHeading>
          <Grid columns={columns}>
            {fillEmptyCards(scraps).map((scrap) => {
              /* 스크랩 데이터의 articleID로 기사 정보 불러오는 부분 */
              const article = articleData[scrap.articleId];
              return (
                <ScrapListItem
                  key={scrap.id}
                  scrap={scrap}
                  article={article}
                  isEmpty={scrap.isEmpty}
                  onArticleClick={() => handleArticleClick(scrap.id)}
                  onBookmarkClick={handleBookmarkClick}
                />
              );
            })}
          </Grid>
        </Section>
      ))}
      <ScrapPopup />
    </Container>
  );
};

export default ScrapList;
