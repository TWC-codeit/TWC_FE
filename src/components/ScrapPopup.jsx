import React, { useState, useEffect } from "react";
import ScrapPopupItem from "./ScrapPopupItem";
import popupBtn from "../assets/icons/popup-btn.png";
import * as S from "../styles/components/ScrapPopupStyle.js";
import alertMsg from "../assets/icons/alert.png";
import axios from "axios";
import { getCookie } from "../api/Cookie.js";

const apiUrl = import.meta.env.VITE_APP_API_URL;

const ScrapPopup = () => {
  const [isListVisible, setListVisible] = useState(false);
  const [scraps, setScraps] = useState([]);
  const toggleList = () => {
    setListVisible(!isListVisible);
  };

  useEffect(() => {
    const fetchScraps = async () => {
      try {
        const accessToken = getCookie(access_token); //로그인할때 쿠키 저장된 키로 바꾸기

        const response = await axios.get(`${apiUrl}/scraps`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const transformedScraps = response.data.scraps.map((item) => ({
          scrapId: item.scrapId,
          title: item.title,
          publishedAt: item.publishedAt,
          source: item.source,
          imageUrl: item.imageUrl,
          url: item.url,
        }));

        setScraps(transformedScraps);
      } catch (error) {
        console.error("스크랩 목록 불러오기 실패", error);
      }
    };

    fetchScraps();
  }, []);

  return (
    <div>
      <S.AlertContainer isPopupVisible={isListVisible}>
        <S.Alert src={alertMsg} />
        <S.AlertText>스크랩 목록을 확인하세요</S.AlertText>
      </S.AlertContainer>
      <S.FloatingButton isPopupVisible={isListVisible} onClick={toggleList}>
        <img src={popupBtn} />
      </S.FloatingButton>
      <S.ScrapPopupContainer isVisible={isListVisible}>
        {scraps.map((item) => (
          <ScrapPopupItem key={item.scrapId} data={item} />
        ))}
      </S.ScrapPopupContainer>
    </div>
  );
};

export default ScrapPopup;
