import styled from "styled-components";



export const Main = styled.div`
  width: 730px;
  height: 280px; 
  margin: 170px auto;
  gap: 37px; 
  box-sizing: border-box;
`;


export const Logo = styled.div`
  img {
    width: 355px; 
    height: 65px;
    display: block; 
    margin: 0 auto;
    margin-bottom: 45px; 
  }
`;
export const SearchBar = styled.div`
  width: 730px;
  height: 76px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  border: 1px ;
  border-radius: 10px;
  background-color: #ffffff;
  gap: 19px; 
  box-shadow: 0px 0px 10px 0px #B6BFD1;
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
  font-size: 24px; 
  line-height: 36px;
  color: #161613;

  ::placeholder {
    color: #9a9a98; 
    opacity: 0.39;
  }
`;