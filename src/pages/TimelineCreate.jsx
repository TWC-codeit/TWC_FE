import { useDrop } from "react-dnd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as T from "../styles/TimelineCreateStyle";
import ScrapPopup from "../components/ScrapPopup";
import ScrapPopupItem from "../components/ScrapPopupItem";
import { getCookie } from "../api/Cookie.js";

const apiUrl = import.meta.env.VITE_APP_API_URL;

function TimelineCreate() {
    const navigate = useNavigate();
    const [droppedScraps, setDroppedScraps] = useState([]);
    const [timelineName, setTimelineName] = useState("");

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "SCRAP_ITEM",
        drop: (item) => {
            setDroppedScraps((prev) => [
                ...prev,
                { scrapId: item.scrapId, title: item.title, source: item.source, imageUrl: item.imageUrl, publishedAt: item.publishedAt, url: item.url },
            ]);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const handleCancel = () => {
        if (droppedScraps.length > 0) {
            setDroppedScraps((prev) => prev.slice(0, -1)); // 마지막 요소 삭제
        } else {
            navigate("/timeline");
        }
    };
    
        
    const handleCreateTimeline = async () => {
        if (!timelineName.trim()) {
            alert("타임라인 이름을 입력해주세요.");
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
        try {
            const response = await axios.post(`${apiUrl}/timelines`, requestBody, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (response.status === 201) {
                alert(`${timelineName} 타임라인 저장이 완료되었습니다.`);
                setDroppedScraps([]);
                setTimelineName("");
                navigate("/timeline");
            }
        } catch (error) {
            console.error("타임라인 생성 실패:", error);
        }
    };
    
    return (
        <T.TimelineCreate>
            <T.InputField
                type="text"
                placeholder="새로운 타임라인"
                value={timelineName}
                onChange={(e) => setTimelineName(e.target.value)}
            />
            <T.DropZone ref={drop} isOver={isOver}>
                {droppedScraps.length === 0 ? (
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>여기로 스크랩을 드래그하세요</div>
                ) : (
                    droppedScraps.map((item) => (
                        <ScrapPopupItem key={item.scrapId} data={item} />
                    ))
                )}
            </T.DropZone>
            <T.ButtonArea>
                    <T.CreateButton onClick={handleCancel} style={{backgroundColor: '#C2C2C1'}}>취소</T.CreateButton>
                    <T.CreateButton onClick={handleCreateTimeline}>저장</T.CreateButton>
                </T.ButtonArea>
            <ScrapPopup />
        </T.TimelineCreate>
    );
}

export default TimelineCreate;
