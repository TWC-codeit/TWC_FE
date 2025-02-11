import styled from "styled-components";


export const Container = styled.div`
  padding: 20px 70px;
`;


export const SearchBar = styled.div`
  display: flex;
  margin-left: 50px;
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
  bottom:2px;
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


/* 📰 뉴스 카드 그리드 */
export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

/* 📌 언론사별 뉴스 카드 */
export const Card = styled.div`
  width: 300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

/* 📰 뉴스 제목 */
export const CardHeader = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

/* 📄 기사 내용 */
export const CardContent = styled.div`
  margin-bottom: 12px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const CardTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const CardDate = styled.p`
  font-size: 12px;
  color: #666;
`;
