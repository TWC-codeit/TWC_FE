import React from "react";
import * as S from "../styles/components/ScrapPopupItemStyle.js";
import noImage from "../assets/noimage/no-image-icon.png";
import { useDrag } from "react-dnd";

const formatDateTime = (isoDate) => {
  if (!isoDate) return "날짜 없음";

  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

const ScrapPopupItem = ({ data }) => {
  const { title, source, imageUrl, publishedAt, url } = data;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "SCRAP_ITEM",
    item: { scrapId: data.scrapId, title: data.title, source: data.source, imageUrl: data.imageUrl, publishedAt: data.publishedAt, url: data.url },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  return (
    <S.Card ref={drag} onClick={() => window.open(url, "_blank")} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <S.Thumbnail
        src={imageUrl || noImage}
        alt="썸네일"
        onError={(e) => {
          e.target.onerror = null; // 무한 루프 방지
          e.target.src = noImage;
          e.target.style.objectFit = "contain";
        }}
        style={data.imageUrl ? {} : { objectFit: "contain" }}
      />
      <S.Container>
        <S.PublishedDate>{formatDateTime(publishedAt)}</S.PublishedDate>
        <S.Source>{source}</S.Source>
        <S.Title>{title}</S.Title>
      </S.Container>
    </S.Card>
  );
};

export default ScrapPopupItem;
