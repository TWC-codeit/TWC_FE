import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BubbleChart from "../components/BubbleChart";

import {
  Container,
  LeftSection,
  HeaderContainer,
  Title,
  Subtitle,
  MentionBar,
  Sidebar,
  SidebarSection,
  SidebarTitle,
  TopKeyword,
  KeywordCount,
  KeywordList,
  KeywordItem,
  NoData,
} from "../styles/TodaynewsStyle";

const apiUrl = import.meta.env.VITE_APP_API_URL;

function Todaynews() {
  const [keywords, setKeywords] = useState([]); // 키워드 목록
  const [keywordCounts, setKeywordCounts] = useState({}); // 기사 개수
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKeywordData = async () => {
      try {
        // 🔹 키워드 목록 가져오기
        const response = await axios.get(`${apiUrl}/keywords`);
        if (response.data?.keywords) {
          const keywordList = response.data.keywords.slice(0, 20); // 상위 20개 키워드 사용
          setKeywords(keywordList);

          console.log("Keyword List:", keywordList);

          const encodedKeywords = keywordList.map(encodeURIComponent).join(",");

          const countResponse = await axios.get(
            `${apiUrl}/articles/count/total?keywords=${encodedKeywords}`
          );

          console.log("API Response:", countResponse.data);

          // 🔹 API 응답 데이터 확인 및 변환 (totalCount 추출)
          if (countResponse.data) {
            const counts = {};
            Object.entries(countResponse.data).forEach(([keyword, data]) => {
              if (data !== null) {
                counts[keyword] = data; // ✅ null이 아닌 경우에만 저장
              }
            });
            setKeywordCounts(counts);
          } else {
            console.error("API 응답이 예상과 다름:", countResponse.data);
            setKeywordCounts({});
          }
        } else {
          console.error("키워드 API 응답이 예상과 다름:", response.data);
          setKeywords([]);
          setKeywordCounts({});
        }
      } catch (error) {
        console.error("키워드 데이터 가져오기 실패:", error);
        setKeywords([]);
        setKeywordCounts({});
      }
      setIsLoading(false);
    };

    fetchKeywordData();
  }, []);

  // 🔹 키워드 클릭 시 검색 페이지로 이동
  const handleKeywordClick = (keyword) => {
    navigate(`/search?query=${encodeURIComponent(keyword)}`);
  };

  // 🔹 가장 많이 언급된 키워드 찾기
  const sortedKeywords = Object.entries(keywordCounts).sort(
    (a, b) => b[1] - a[1]
  );
  const mostMentioned = sortedKeywords.length > 0 ? sortedKeywords[0] : null;

  return (
    <Container>
      <LeftSection>
        <HeaderContainer>
          <div>
            <Title>오늘의 보도들</Title>
            <Subtitle>뉴스에서 가장 많이 언급된 키워드를 확인하세요.</Subtitle>
          </div>
          <MentionBar>
            <span>적음</span>
            <div className="bar"></div>
            <span>많음</span>
          </MentionBar>
        </HeaderContainer>

        {/* 🔹 BubbleChart 컴포넌트 추가 */}
        {isLoading ? (
          <NoData>데이터를 불러오는 중...</NoData>
        ) : keywords.length > 0 ? (
          <BubbleChart
            keywordCounts={keywordCounts}
            onKeywordClick={handleKeywordClick}
          />
        ) : (
          <NoData>데이터를 불러오지 못했습니다.</NoData>
        )}
      </LeftSection>

      <Sidebar>
        <SidebarSection>
          <SidebarTitle>오늘 가장 많이 언급된 키워드</SidebarTitle>
          {mostMentioned && (
            <TopKeyword
              onClick={() => handleKeywordClick(mostMentioned[0])}
              style={{ cursor: "pointer" }}
            >
              {mostMentioned[0]}{" "}
              <KeywordCount>{mostMentioned[1]}건</KeywordCount>
            </TopKeyword>
          )}
        </SidebarSection>

        <SidebarSection>
          <SidebarTitle>오늘의 키워드가 언급된 뉴스의 수</SidebarTitle>
          <KeywordList>
            {sortedKeywords.map(([keyword, count], index) => (
              <KeywordItem
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                style={{ cursor: "pointer" }}
              >
                {keyword} <KeywordCount>{count}건</KeywordCount>
              </KeywordItem>
            ))}
          </KeywordList>
        </SidebarSection>
      </Sidebar>
    </Container>
  );
}

export default Todaynews;
