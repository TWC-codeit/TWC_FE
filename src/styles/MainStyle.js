import styled from "styled-components";
import palette from "../lib/colorPalette";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  padding-top: 170px;
`;

export const Logo = styled.img`
  width: 18vw;
  padding-bottom: 8px;
`;

export const SearchBar = styled.div`
  width: 40vw;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  border: 1px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  gap: 19px;
  box-shadow: 0 0 10px 0 rgba(182, 191, 209, 0.07);
  box-sizing: border-box;
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  height: 38px;
  gap: 19px;
`;

export const SearchIcon = styled.button`
  width: 38px;
  height: 38px;
  border: none;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 28.5px;
    height: 28.5px;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  height: 36px;
  border: none;
  outline: none;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 36px;
  color: ${palette.gray.text};

  ::placeholder {
    color: #9a9a98;
    opacity: 0.39;
  }
`;
