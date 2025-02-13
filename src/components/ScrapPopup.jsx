import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrapPopupItem from "./ScrapPopupItem";
import popupBtn from "../assets/icons/popup-btn.png";
import * as S from "../styles/components/ScrapPopupStyle.js";
import alertMsg from "../assets/icons/alert.png";
import axios from "axios";
import { getCookie } from "../api/Cookie.js";
import { useModal } from "../api/ModalContext";

const apiUrl = import.meta.env.VITE_APP_API_URL;

const ScrapPopup = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const [isListVisible, setListVisible] = useState(false);
  const [scraps, setScraps] = useState([]);
  const toggleList = async () => {
    const accessToken = getCookie("access_token");
    if (!accessToken) {
      openModal({
        type: "button",
        message: "로그인하셔야 본 서비스를 이용할 수 있습니다.",
        leftText: "확인",
        rightText: "로그인하기",
        onLeft: () => {
          closeModal();
        },
        onRight: () => {
          closeModal();
          navigate("/login");
        },
      });
      return;
    }
    setListVisible(!isListVisible);
    if (!isListVisible) {
      await fetchScraps();
    }
  };

  useEffect(() => {
    const fetchScraps = async () => {
      try {
        const accessToken = getCookie("access_token");

        const response = await axios.get(`${apiUrl}/scraps`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.data.scraps.length === 0) {
          setScraps(null); // 데이터가 없을 경우 null 처리
        } else {
          const transformedScraps = response.data.scraps.map((item) => ({
            scrapId: item.scrapId,
            title: item.title,
            publishedAt: item.publishedAt,
            source: item.source,
            imageUrl: item.imageUrl,
            url: item.url,
          }));
          setScraps(transformedScraps);
        }
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
        {scraps === null ? (
          <S.NoScrapText>스크랩 정보가 존재하지 않습니다</S.NoScrapText>
        ) : (
          scraps.map((item) => (
            <ScrapPopupItem key={item.scrapId} data={item} />
          ))
        )}
      </S.ScrapPopupContainer>
    </div>
  );
};

export default ScrapPopup;
