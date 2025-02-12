import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as d3 from "d3-force"; // D3 force simulation 활용

import {
  Container,
  LeftSection,
  HeaderContainer,
  Title,
  Subtitle,
  MentionBar,
  BubbleWrapper,
  Bubble,
  Sidebar,
  SidebarSection,
  SidebarTitle,
  KeywordCount,
  KeywordList,
  KeywordItem,
  NoData,
} from "../styles/TodaynewsStyle";

const apiUrl = import.meta.env.VITE_APP_API_URL;

function Todaynews() {
  const [keywords, setKeywords] = useState([]);
  const [bubbleData, setBubbleData] = useState([]);
  const [keywordCounts, setKeywordCounts] = useState({});
  const navigate = useNavigate();

  // 🔹 키워드 목록 가져오기
  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const response = await axios.get(`${apiUrl}/keywords`);
        console.log("API 응답 데이터:", response.data);

        if (Array.isArray(response.data.keywords)) {
          const keywordList = response.data.keywords.slice(0, 20);
          setKeywords(keywordList);
        } else {
          console.error("예상과 다른 응답 구조:", response.data);
          setKeywords([]);
        }
      } catch (error) {
        console.error("키워드 목록 불러오기 실패:", error);
        setKeywords([]);
      }
    };

    fetchKeywords();
  }, []);

  // 🔹 각 키워드별 뉴스 개수 가져오기
  useEffect(() => {
    if (keywords.length > 0) {
      const fetchKeywordCounts = async () => {
        try {
          const requests = keywords.map((keyword) =>
            axios.get(`${apiUrl}/articles/count/${keyword}`)
          );

          const responses = await Promise.all(requests);

          const counts = {};
          responses.forEach((res) => {
            counts[res.data.keyword] = res.data.totalCount;
          });

          console.log("🔹 키워드별 뉴스 개수:", counts);
          setKeywordCounts(counts);
        } catch (error) {
          console.error("🔻 키워드별 뉴스 개수 불러오기 실패", error);
        }
      };

      fetchKeywordCounts();
    }
  }, [keywords]);

  // 🔹 버블 데이터 설정
  useEffect(() => {
    if (Object.keys(keywordCounts).length > 0) {
      const sortedKeywords = Object.entries(keywordCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      const maxCount = sortedKeywords[0][1];
      const width = 600;
      const height = 500; // 🔹 버블 크기에 맞춰 박스 크기 조정

      const nodes = sortedKeywords.map(([keyword, count], index) => ({
        id: keyword,
        size: 40 + (count / maxCount) * 120, // 🔹 비율에 맞게 크기 조정 (최소 40, 최대 160)
        x: width / 2 + (Math.random() - 0.5) * width, // 랜덤 위치
        y: height / 2 + (Math.random() - 0.5) * height,
      }));

      const simulation = d3
        .forceSimulation(nodes)
        .force("center", d3.forceCenter(width / 2, height / 2)) // 🔹 중앙 정렬
        .force(
          "collide",
          d3.forceCollide().radius((d) => d.size / 2 + 5)
        ) // 🔹 버블 간 최소 간격 유지
        .force("charge", d3.forceManyBody().strength(-5)) // 🔹 반발력 추가 (너무 떨어지지 않게)
        .force(
          "x",
          d3
            .forceX()
            .x((d) => Math.max(d.size / 2, Math.min(width - d.size / 2, d.x)))
        ) // 🔹 X축 범위 제한
        .force(
          "y",
          d3
            .forceY()
            .y((d) => Math.max(d.size / 2, Math.min(height - d.size / 2, d.y)))
        ) // 🔹 Y축 범위 제한
        .stop();

      for (let i = 0; i < 300; i++) simulation.tick();

      setBubbleData(nodes);
    }
  }, [keywordCounts]);

  return (
    <Container>
      {/* 왼쪽 영역 */}
      <LeftSection>
        <HeaderContainer>
          <div>
            <Title>Today's News</Title>
            <Subtitle>
              매일 수집된 뉴스 속에서 각 키워드가 포함된 뉴스 건수가 높은 순으로
              보여집니다
            </Subtitle>
          </div>
          <MentionBar>
            <span>언급 적음</span>
            <div className="bar"></div>
            <span>언급 많음</span>
          </MentionBar>
        </HeaderContainer>

        <BubbleWrapper>
          {bubbleData.length > 0 ? (
            bubbleData.map((bubble, index) => (
              <Bubble
                key={index}
                size={bubble.size}
                style={{ left: `${bubble.x}px`, top: `${bubble.y}px` }}
              >
                {bubble.id}
              </Bubble>
            ))
          ) : (
            <NoData>데이터를 불러오는 중...</NoData>
          )}
        </BubbleWrapper>
      </LeftSection>

      {/* 오른쪽 사이드바 */}
      <Sidebar>
        {/* 🔹 오늘의 키워드가 언급된 뉴스의 수 (내림차순 정렬) */}
        <SidebarSection>
          <SidebarTitle>오늘의 키워드가 언급된 뉴스의 수</SidebarTitle>
          <KeywordList>
            {Object.entries(keywordCounts)
              .sort((a, b) => b[1] - a[1]) // 🔹 내림차순 정렬
              .map(([keyword, count], index) => (
                <KeywordItem key={index}>
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
