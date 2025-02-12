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
      {/* 📂 폴더 윗부분 */}
      <T.FolderTop $isHovered={isHovered} />

      {/* 📂 폴더 본체 */}
      <T.FolderContent>
        <T.NewsLabel>News</T.NewsLabel>
        <T.TimelineTitle>{timeline.name}</T.TimelineTitle> {/* 🔹 이름 표시 */}
      </T.FolderContent>
    </T.TimelineFolder>
  );
};

export default TimelineItem;
