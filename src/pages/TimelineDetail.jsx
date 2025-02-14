import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as T from "../styles/TimelineDetailStyle";
import * as C from "../styles/TimelineCreateStyle";
import { getCookie } from "../api/Cookie.js";
import ScrapPopupItem from "../components/ScrapPopupItem";

const apiUrl = import.meta.env.VITE_APP_API_URL;

const TimelineDetail = () => {
    const navigate = useNavigate();
    const { id: timelineId } = useParams();
    const [droppedScraps, setDroppedScraps] = useState([]);
    const [timelineName, setTimelineName] = useState("");

    useEffect(() => {
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
                    setDroppedScraps(items.map((item) => ({
                        id: item.id,
                        scrapId: item.scrapId,
                        createdAt: item.createdAt || "날짜 없음",
                        articleId: item.article.id,
                        title: item.article.title,
                        keyword: item.article.keyword,
                        source: item.article.source,
                        publishedAt: item.article.publishedAt,
                        content: item.article.content,
                        imageUrl: item.article.imageUrl,
                        url: item.article.url,
                    })));
                }
            } catch (error) {
                console.error("타임라인 불러오기 실패:", error);
                alert("타임라인 데이터를 불러오는 데 실패했습니다.");
                navigate("/timeline");
            }
        };

        fetchTimeline();
    }, [timelineId, navigate]);

    const handleDeleteTimeline = async () => {
        if (!window.confirm("정말로 삭제하시겠습니까?")) return;
    
        try {
            const response = await axios.delete(`${apiUrl}/timelines/${timelineId}`, {
                headers: {
                    Authorization: `Bearer ${getCookie("access_token")}`,
                },
            });
    
            if (response.status === 200) {
                alert("타임라인이 삭제되었습니다.");
                navigate("/timeline");
            }
        } catch (error) {
            console.error("타임라인 삭제 실패:", error);
            alert("타임라인 삭제에 실패했습니다.");
        }
    };    

    return (
        <T.Container>
            <T.DropZone>
                <T.Title>{timelineName}</T.Title>
                <T.Zone>
                    {droppedScraps.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <ScrapPopupItem key={item.scrapId} data={item} />
                            {index < droppedScraps.length - 1 && <T.Arrow>▶</T.Arrow>}
                        </React.Fragment>
                    ))}
                </T.Zone>
            </T.DropZone>
            <C.ButtonArea>
                <C.CreateButton onClick={() => navigate(`/timeline/${timelineId}/update`)}>타임라인 수정하기</C.CreateButton>
                <C.CreateButton onClick={handleDeleteTimeline}>타임라인 삭제하기</C.CreateButton>
            </C.ButtonArea>
        </T.Container>
    );
};

export default TimelineDetail;
