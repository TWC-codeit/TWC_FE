import React from "react";
import * as M from "../styles/MainStyle";
import LogoImage from "../assets/icons/Logo.svg";
import SearchIcon from "../assets/icons/search-sm.svg";

function Main() {
  return (
    <>
      <M.Main>
        {/*로고*/}
        <M.Logo src={LogoImage} alt="TWINCLE Logo" />
        {/*검색창*/}
        <M.SearchBar>
          <M.SearchBox>
            <M.SearchIcon>
              <img src={SearchIcon} alt="Search Icon" />
            </M.SearchIcon>
            <M.SearchInput type="text" placeholder="Search by keyword" />
          </M.SearchBox>
        </M.SearchBar>
        {/*키워드*/}
      </M.Main>
    </>
  );
}

export default Main;
