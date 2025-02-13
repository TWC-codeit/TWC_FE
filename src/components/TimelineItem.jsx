import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../styles/TimelineStyle";
import folderIcon from "../assets/icons/newstimelineclose.svg"; // 폴더 닫힘 아이콘
import folderIcon2 from "../assets/icons/newstimelineopen.svg"; // 폴더 열림 아이콘
import addtimeline from "../assets/icons/addtimeline.svg";

const TimelineItem = ({ timeline }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <T.TimelineFolder
      onClick={() => navigate(`/timeline/${timeline.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 📂 폴더 아이콘 변경 */}
      <T.FolderIcon
        src={isHovered ? folderIcon2 : folderIcon}
        alt="Folder Icon"
      />

      {/* 📂 폴더 내용 */}
      <T.FolderContent>
        <T.TimelineTitle>{timeline.name}</T.TimelineTitle> {/* 🔹 이름 표시 */}
      </T.FolderContent>
    </T.TimelineFolder>
  );
};

export default TimelineItem;
