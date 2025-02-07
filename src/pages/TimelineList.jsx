import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TimelineItem from "../components/TimelineItem";
import {
  Container,
  Title,
  TimelineWrapper,
  AddTimeline,
  NoData,
} from "../styles/TimelineStyle";

const TimelineList = () => {
  const [timelines, setTimelines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimelines = async () => {
      try {
        const response = await fetch("http://13.238.115.119/api/timelines");
        if (!response.ok) {
          throw new Error("Failed to fetch timelines");
        }
        const data = await response.json();
        setTimelines(data);
      } catch (error) {
        console.error("Error fetching timelines:", error);
      }
    };

    fetchTimelines();
  }, []);

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
