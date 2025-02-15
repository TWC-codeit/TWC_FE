import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "../styles/SearchStyle";
import SearchListItem from "../components/SearchListItem";
import searchIcon from "../assets/icons/search-sm.svg";
import ScrapPopup from "../components/ScrapPopup";

function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || "대통령";

  const [searchKeyword, setSearchKeyword] = useState(query);
  const [searchResults, setSearchResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchSearchResults(searchKeyword);
    fetchTotalCount(searchKeyword);
  }, [searchKeyword]);

  const fetchSearchResults = async (keyword) => {
    try {
      const response = await fetch(
        `http://13.238.115.119/api/articles/list?keywords=${keyword}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSearchResults(data[keyword]);
      } else {
        console.error("API 요청 실패");
      }
    } catch (error) {
      console.error("API 요청 오류:", error);
    }
  };

  const fetchTotalCount = async (keyword) => {
    try {
      const response = await fetch(
        `http://13.238.115.119/api/articles/count?keywords=${keyword}`
      );
      if (response.ok) {
        const data = await response.json();

        setTotalCount(data[keyword].totalCount);
      } else {
        console.error("API 요청 실패");
      }
    } catch (error) {
      console.error("API 요청 오류:", error);
    }
  };

  const handleSearch = () => {
    const input = document.getElementById("search-input").value.trim();
    if (input) setSearchKeyword(input);
  };

  return (
    <S.Container>
      <S.SearchBar>
        <S.SearchBox>
          <S.SearchIcon onClick={handleSearch}>
            <img src={searchIcon} alt="검색 아이콘" />
          </S.SearchIcon>
          <S.SearchInput
            id="search-input"
            type="text"
            placeholder="키워드를 입력하세요"
            defaultValue={searchKeyword}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
        </S.SearchBox>
      </S.SearchBar>

      <S.Results>
        "<span className="keyword">{searchKeyword}</span>" 뉴스 검색 결과 총{" "}
        <span className="count">{totalCount}</span>건입니다.
      </S.Results>

      <S.CardGrid>
        {Object.entries(searchResults).map(([publisher, articles]) => (
          <SearchListItem
            key={publisher}
            publisher={publisher}
            articles={articles}
            keyword={searchKeyword}
          />
        ))}
      </S.CardGrid>
      <ScrapPopup />
    </S.Container>
  );
}

export default Search;
