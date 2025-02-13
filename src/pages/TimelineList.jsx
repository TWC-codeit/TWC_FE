import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TimelineItem from "../components/TimelineItem";
import { getCookie } from "../api/Cookie";
import {
  Container,
  Title,
  TimelineGrid,
  AddTimelineIcon,
  NoData,
  LoadingMessage, // ✅ 추가된 스타일
} from "../styles/TimelineStyle";
import addtimeline from "../assets/icons/addtimeline.svg"; // ✅ 추가 버튼 아이콘

const apiUrl = import.meta.env.VITE_APP_API_URL;

const TimelineList = () => {
  const [timelines, setTimelines] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ 로딩 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimelines = async () => {
      const accessToken = getCookie("access_token");
      if (!accessToken) {
        console.error("❌ Access Token 없음. 로그인 필요");
        setIsLoading(false); // ✅ 로딩 상태 종료
        return;
      }

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
      setIsLoading(false); // ✅ 로딩 상태 종료
    };

    fetchTimelines();
  }, []);

  return (
    <Container>
      <Title>타임라이너</Title>
      <TimelineGrid>
        {/* 🔹 Add Timeline 버튼 */}
        <AddTimelineIcon
          src={addtimeline}
          alt="Add Timeline"
          onClick={() => navigate("/timeline/create")}
        />

        {/* 🔹 로딩 중 메시지 */}
        {isLoading ? (
          <LoadingMessage>데이터를 불러오는 중...</LoadingMessage> // ✅ 로딩 중일 때만 표시
        ) : timelines.length > 0 ? (
          timelines.map((timeline) => (
            <TimelineItem key={timeline.id} timeline={timeline} />
          ))
        ) : (
          <NoData>타임라인이 없습니다.</NoData> // ✅ 로딩이 끝난 후 데이터가 없을 때만 표시
        )}
      </TimelineGrid>
    </Container>
  );
};

export default TimelineList;
