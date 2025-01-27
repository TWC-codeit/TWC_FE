import React from "react";
import * as S from "../styles/components/ScrapPopupItemStyle.js";

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
  return (
    <S.Card>
      <S.Thumbnail src={data.imageUrl}></S.Thumbnail>
      <S.Container>
        <S.PublishedDate>{formatDateTime(data.publishedAt)}</S.PublishedDate>
        <S.Source>{data.source}</S.Source>
        <S.Title>{data.title}</S.Title>
      </S.Container>
    </S.Card>
  );
};

export default ScrapPopupItem;
