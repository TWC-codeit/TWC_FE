import React, { useState, useEffect } from "react";
import * as S from "../styles/ScrapListStyle.js";
import ScrapListItem from "../components/ScrapListItem.jsx";
import axios from "axios";
import { getCookie } from "../assets/api/Cookie.js";
const apiUrl = import.meta.env.VITE_APP_API_URL;

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
  const [isLoading, setIsLoading] = useState(true);

  const fetchScraps = async () => {
    try {
      const accessToken = getCookie(access_token); //로그인할때 쿠키 저장된 키로 바꾸기
      const response = await axios.get(`${apiUrl}/scraps`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 인증 헤더 추가
        },
      });

      const scraps = response.data.scraps; // scraps 배열 추출
      console.log(scraps);

      // 날짜별 그룹화
      if (Array.isArray(scraps)) {
        const groupByDate = (scraps) =>
          scraps.reduce((acc, scrap) => {
            const date = scrap.scrapedAt?.split("T")[0] || "날짜 없음";
            if (!acc[date]) acc[date] = [];
            acc[date].push(scrap);
            return acc;
          }, {});

        setGroupedScraps(groupByDate(scraps));
      } else {
        console.error("데이터 형식 오류:", response.data);
      }
    } catch (error) {
      console.error("스크랩 데이터 불러오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };
  // 열 개수 업데이트 함수
  const updateColumns = () => {
    if (window.innerWidth >= 1200) setColumns(5);
    else if (window.innerWidth >= 1000) setColumns(4);
    else if (window.innerWidth >= 800) setColumns(3);
    else if (window.innerWidth >= 600) setColumns(2);
    else setColumns(1);
  };

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
  const accessToken = "토큰테스트";

  //const token = getCookie('access_token');
  useEffect(() => {
    fetchScraps();
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  if (isLoading) {
    return <S.Message>로딩 중...</S.Message>;
  }
  if (Object.keys(groupedScraps).length === 0) {
    return <S.Message>스크랩한 기사가 없습니다.</S.Message>;
  }

  return (
    <S.Container>
      <S.Heading>스크랩 목록</S.Heading>
      {Object.entries(groupedScraps).map(([date, scraps]) => (
        <S.Section key={date}>
          <S.DateHeading>{formatDateHeading(date)}</S.DateHeading>
          <S.Grid columns={columns}>
            {fillEmptyCards(scraps).map((scrap) => {
              return (
                <ScrapListItem
                  key={scrap.id}
                  scrap={scrap}
                  isEmpty={scrap.isEmpty}
                />
              );
            })}
          </S.Grid>
        </S.Section>
      ))}
    </S.Container>
  );
}

export default ScrapList;
