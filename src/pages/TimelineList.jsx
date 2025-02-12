import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TimelineItem from "../components/TimelineItem";
import {
  Container,
  Title,
  TimelineGrid,
  AddTimeline,
  NoData,
} from "../styles/TimelineStyle";

const apiUrl = import.meta.env.VITE_APP_API_URL;
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzM5MzYzMTYxLCJleHAiOjE3MzkzNjY3NjF9.ezWMpSnVau9TMnKkFjOZ4kGHpHmNITk-nY5lIr0byw8";

const TimelineList = () => {
  const [timelines, setTimelines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 🔹 타임라인 가져오기 (JWT 포함)
    const fetchTimelines = async () => {
      try {
        const response = await axios.get(`${apiUrl}/timelines`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        setTimelines(response.data.timelines);
      } catch (error) {
        console.error("❌ 타임라인 불러오기 실패:", error);
      }
    };

    fetchTimelines();
  }, []);

  return (
    <Container>
      <Title>타임라이너</Title>
      <TimelineGrid>
        <AddTimeline onClick={() => navigate("/timeline/create")}>
          <span>+ 타임라이너 추가하기</span>
        </AddTimeline>

        {/* 🔹 타임라인 목록 */}
        {timelines.length > 0 ? (
          timelines.map((timeline) => (
            <TimelineItem key={timeline.id} timeline={timeline} /> // 🔹 timeline 데이터 전달
          ))
        ) : (
          <NoData>타임라인이 없습니다.</NoData>
        )}
      </TimelineGrid>
    </Container>
  );
};

export default TimelineList;
