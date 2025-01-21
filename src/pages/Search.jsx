import React from "react";
import * as S from "../styles/SearchStyle";
// import { useNavigate } from "react-router-dom";

function Search() {
    // 언론사 이름을 동적 경로에 포함시켜 SearchDetail 페이지로 이동
    // const navigate = useNavigate();

    // const handleClick = (publisherName) => {
    //     navigate(`/search/${publisherName}`);
    // };

    return (
        <>
            <S.Search>오늘의 보도들 - 키워드 검색 후 언론사별 페이지</S.Search>
        </>
    );
}

export default Search;