import React from "react";
import * as S from "../styles/SearchDetailStyle";
import { useParams } from "react-router-dom";

function SearchDetail() {
    // useParams 사용해서 동적으로 전달된 언론사 이름 가져오기
    const { publisherName } = useParams();

    return (
        <>
            <S.SearchDetail>오늘의 보도들 - 키워드 검색 후 언론사 선택 후 페이지</S.SearchDetail>
            <S.SearchDetail>{publisherName}</S.SearchDetail>
        </>
    );
}

export default SearchDetail;