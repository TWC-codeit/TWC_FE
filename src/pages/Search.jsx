import React, { useState, useEffect } from "react";
import * as S from "../styles/SearchStyle";
import searchIcon from "../assets/icons/search-sm.svg";

function Search() {
  const [searchKeyword, setSearchKeyword] = useState("대통령");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSearchResults(searchKeyword);
  }, [searchKeyword]);

  const fetchSearchResults = async (keyword) => {
    try {
      const response = await fetch(`http://13.238.115.119/api/articles/${keyword}`);
      const data = await response.json();
      setSearchResults(data.articles);
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
          />
        </S.SearchBox>
      </S.SearchBar>

      <S.Results>
        "<span className="keyword">{searchKeyword}</span>" 뉴스 검색 결과 총{" "}
        <span className="count">{Object.keys(searchResults).length}</span>건입니다.
      </S.Results>

    
      <S.CardGrid>
        {Object.entries(searchResults).map(([publisher, articles]) => (
          <S.Card key={publisher}>
            <S.CardHeader>{publisher}</S.CardHeader>
            {articles.map((article, index) => (
              <S.CardContent key={index}>
                <S.CardImage src={article.thumbnail} alt="기사 썸네일" />
                <S.CardTitle>{article.title}</S.CardTitle>
                <S.CardDate>{article.write_time}</S.CardDate>
              </S.CardContent>
            ))}
          </S.Card>
        ))}
      </S.CardGrid>
    </S.Container>
  );
}

export default Search;