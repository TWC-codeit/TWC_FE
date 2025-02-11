import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/MainStyle";
import LogoImage from "../assets/icons/Logo.svg";
import SearchIcon from "../assets/icons/search-sm.svg";

const apiUrl = "http://13.238.115.119/api/keywords"; 

function Main() {
  const [keywords, setKeywords] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setKeywords(data.keywords.slice(0, 4)); // 키워드 크기가 작아서 4개로 해놓음
        } else {
          console.error("키워드 API 호출 실패");
        }
      } catch (error) {
        console.error("키워드 API 요청 중 오류 발생:", error);
      }
    };
    fetchKeywords();
  }, []);

  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`); 
    }
  };

  return (
    <M.Main>
      <M.Logo src={LogoImage} alt="TWINCLE Logo" />
      <M.SearchBar>
        <M.SearchBox>
          <M.SearchIcon onClick={() => handleSearch(searchInput)}>
            <img src={SearchIcon} alt="Search Icon" />
          </M.SearchIcon>
          <M.SearchInput
            type="text"
            placeholder="Search by keyword"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </M.SearchBox>
      </M.SearchBar>
      <M.KeywordBox>
        <M.KeywordTitle>오늘 핫한 키워드</M.KeywordTitle>
        <M.Line />
        {keywords.map((keyword, index) => (
          <M.KeywordButton
            key={index}
            onClick={() => handleSearch(keyword)} 
          >
            {keyword}
          </M.KeywordButton>
        ))}
      </M.KeywordBox>
    </M.Main>
  );
}

export default Main;
