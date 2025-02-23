import { useDrop } from "react-dnd";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as T from "../styles/TimelineCreateStyle";
import ScrapPopup from "../components/ScrapPopup";
import ScrapPopupItem from "../components/ScrapPopupItem";
import { getCookie } from "../api/Cookie.js";
import { useModal } from "../api/ModalContext";

const apiUrl = import.meta.env.VITE_APP_API_URL;

function TimelineUpdate() {
  const navigate = useNavigate();
  const { id: timelineId } = useParams();
  const [droppedScraps, setDroppedScraps] = useState([]);
  const [timelineName, setTimelineName] = useState("");
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    // 기존 타임라인 데이터 불러오기
    const fetchTimeline = async () => {
      try {
        const response = await axios.get(`${apiUrl}/timelines/${timelineId}`, {
          headers: {
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        });
        if (response.status === 200) {
          const { name, items } = response.data.timeline;
          setTimelineName(name);
          setDroppedScraps(
            items.map((item) => ({
              scrapId: item.scrapId,
              articleId: item.article.id,
              title: item.article.title || "제목 없음",
              keyword: item.article.keyword || "키워드 없음",
              source: item.article.source || "출처 없음",
              publishedAt: item.article.publishedAt || "",
              content: item.article.content || "내용 없음",
              imageUrl: item.article.imageUrl || "",
              url: item.article.url || "",
            }))
          );
        }
      } catch (error) {
        console.error("타임라인 불러오기 실패:", error);
        alert("타임라인 데이터를 불러오는 데 실패했습니다.");
        navigate("/timeline");
      }
    };

    fetchTimeline();
  }, [timelineId, navigate]);

  console.log(droppedScraps);

  const [{ isOver }, drop] = useDrop({
    accept: "SCRAP_ITEM",
    drop: (item) => {
      console.log("드롭된 아이템:", item);
      setDroppedScraps((prev) => {
        const updatedScraps = [
          ...prev,
          {
            scrapId: item.scrapId,
            title: item.title,
            source: item.source,
            imageUrl: item.imageUrl,
            publishedAt: item.publishedAt,
            url: item.url,
          },
        ];
        console.log("업데이트된 droppedScraps:", updatedScraps);
        return updatedScraps;
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const popupDrop = useDrop(() => ({
    accept: "SCRAP_ITEM",
    drop: (item) => {
      setDroppedScraps((prev) =>
        prev.filter((scrap) => scrap.scrapId !== item.scrapId)
      );
    },
  }))[1];

  const handleCancel = () => {
    navigate("/timeline");
  };

  const handleUpdateTimeline = async () => {
    if (!timelineName.trim()) {
      openModal({
        type: "error",
        message: `타임라인 이름을 입력해주세요.`,
      });

      // 1초 후에 모달 닫기
      setTimeout(() => {
        closeModal();
      }, 1000);
      return;
    }

    const accessToken = getCookie("access_token");
    const requestBody = {
      name: timelineName,
      items: droppedScraps.map((item, index) => ({
        scrapId: item.scrapId,
        position: index + 1,
      })),
    };
    openModal({
      type: "button",
      message: "수정된 타임라인으로 저장하시겠습니까?",
      leftText: "취소",
      rightText: "확인",
      onLeft: () => {
        closeModal();
      },
      onRight: async () => {
        closeModal();
        try {
          const response = await axios.patch(
            `${apiUrl}/timelines/${timelineId}`,
            requestBody,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          if (response.status === 200) {
            openModal({
              type: "alert",
              message: `타임라인이 성공적으로 수정되었습니다.`,
            });

            // 1초 후에 모달 닫기
            setTimeout(() => {
              closeModal();
            }, 1000);
            // 모달 닫힌 후 이동하기
            setTimeout(() => {
              navigate("/timeline");
            }, 1400);
          }
        } catch (error) {
          console.error("타임라인 수정 실패:", error);
          alert("타임라인 수정에 실패했습니다.");
        }
      },
    });
  };

  return (
    <T.TimelineCreate>
      <T.InputField
        type="text"
        placeholder="타임라인 이름을 입력하세요"
        value={timelineName}
        onChange={(e) => setTimelineName(e.target.value)}
      />
      <T.DropZone ref={drop} isOver={isOver} data-target="timeline">
        {droppedScraps.length === 0 ? (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            여기로 스크랩을 드래그하세요
          </div>
        ) : (
          droppedScraps.map((item) => (
            <ScrapPopupItem key={item.scrapId} data={item} />
          ))
        )}
      </T.DropZone>
      <T.ButtonArea>
        <T.CreateButton
          onClick={handleCancel}
          style={{ backgroundColor: "#C2C2C1" }}
        >
          취소
        </T.CreateButton>
        <T.CreateButton onClick={handleUpdateTimeline}>수정</T.CreateButton>
      </T.ButtonArea>
      <div ref={popupDrop} data-target="popup">
        <ScrapPopup />
      </div>
    </T.TimelineCreate>
  );
}

export default TimelineUpdate;
