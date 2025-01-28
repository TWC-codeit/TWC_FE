import React from "react";
import * as S from "../styles/ScrapListStyle";
import ScrapPopup from "../components/ScrapPopup.jsx";

function ScrapList() {
  return (
    <>
      <S.ScrapList>스크랩 목록 페이지</S.ScrapList>
      <ScrapPopup />
    </>
  );
}

export default ScrapList;
