import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../styles/TimelineStyle";

const TimelineItem = ({ timeline }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <T.TimelineFolder
      onClick={() => navigate(`/timeline/${timeline.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
    >
      <T.FolderTop $isHovered={isHovered} />
      <T.FolderContent>
        <T.NewsLabel>News</T.NewsLabel>
        <T.TimelineTitle>{timeline.title}</T.TimelineTitle>
      </T.FolderContent>
    </T.TimelineFolder>
  );
};

export default TimelineItem;
