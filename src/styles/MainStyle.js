import styled from "styled-components";
import palette from "../lib/colorPalette";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding-top: 130px;
`;

export const Logo = styled.img`
  width: 18vw;
  padding-bottom: 6px;
`;

export const SearchBar = styled.div`
  width: 40vw;
  padding: 12px 12px;
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
  width: 38vw;
  height: 2vw;
  gap: 16px;
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
  font-size: 20px;
  line-height: 36px;
  color: ${palette.gray.text};
  ::placeholder {
    color: ${palette.gray.gray2};
    opacity: 0.39; 
  }
`;
export const KeywordBox = styled.div`
  width: 37vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 18px;
`;

export const KeywordTitle = styled.div`
  font-family: "Pretendard";
  font-weight: 600; 
  font-size: 20px; 
  line-height: 38px; 
  color:${palette.gray.gray1};
  white-space: nowrap;
`;

export const Line = styled.div`
  height: 35px; 
  width: 1px;
  background-color: ${palette.gray.gray1};
  opacity: 0.38;
`;

export const KeywordButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  border: 1px solid${palette.gray.gray4};
  border-radius: 7px; 
  background-color: #ffffff; 
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 500;
  color: ${palette.gray.gray1};
  cursor: pointer;
  white-space: nowrap; 

  height: 40px; 
  box-sizing: border-box;
  }
`;