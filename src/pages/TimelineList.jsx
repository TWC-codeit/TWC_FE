import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TimelineItem from "../components/TimelineItem";
import { Container, Title, TimelineWrapper, AddTimeline, NoData } from "../styles/TimelineStyle";
import { getCookie } from "../api/Cookie.js";

const apiUrl = import.meta.env.VITE_APP_API_URL;

const TimelineList = () => {
  const [timelines, setTimelines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimelines = async () => {
      const accessToken = getCookie("access_token");

      if (!accessToken) {
        console.error("JWT 토큰이 없습니다.");
        return;
      }

      try {
        const response = await axios.get(`${apiUrl}/timelines`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setTimelines(response.data.timelines);
      } catch (error) {
        console.error("타임라인 불러오기 실패:", error);
      }
    };

    fetchTimelines();
  }, []);

  console.log(timelines);

  return (
    <Container>
      <Title>타임라이너</Title>
      <TimelineWrapper>
        <AddTimeline onClick={() => navigate("/timeline/create")}>
          <span>+ 타임라이너 추가하기</span>
        </AddTimeline>
        {timelines.length > 0 ? (
          timelines.map((timeline) => (
            <TimelineItem key={timeline.id} timeline={timeline} />
          ))
        ) : (
          <NoData>타임라인이 없습니다.</NoData>
        )}
      </TimelineWrapper>
    </Container>
  );
};

export default TimelineList;
