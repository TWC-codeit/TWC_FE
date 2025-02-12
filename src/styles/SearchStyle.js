import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 70px;
`;

export const SearchBar = styled.div`
  display: flex;
  margin-left: 50px;
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 150%;
  max-width: 880px;
  height: 35px;
  background: #ffffff;
  border-radius: 4px;
  padding: 0 16px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  bottom: 2px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const SearchInput = styled.input`
  font-family: "Pretendard";
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  color: #000000;
  padding: 12px 16px;
  padding-left: 40px;
  background: none;
`;

export const Results = styled.p`
  font-size: 14px;
  font-family: "Pretendard";
  margin: 20px 60px;
  text-align: left;
  color: #535350;

  span.keyword {
    color: #387DFF;
  }

  span.count {
    color: #387DFF;
  }
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;
  justify-content: left;
`;
