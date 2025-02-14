import styled from "styled-components";
import palette from "../lib/colorPalette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top:-40px;
`;

export const Form = styled.form`  /* 🔥 form으로 변경 */
  width: 400px;
  padding: 20px 60px 50px 60px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${palette.gray.text};
  align-self: flex-start;
  margin-bottom: 30px;
  margin-top: 20px;
  margin-left: -5px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

export const Label = styled.label`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 600;
  color: ${palette.gray.text};
  &::after {
    content: "•";
    font-size: 14px; 
    color: ${palette.blue.main}; 
    position: relative;
    top: -8px;
  }
`;

export const Input = styled.input`
  width: 165px;
  padding: 10px;
  font-size: 13px;
  border: 1px solid #d1d1d1;
  border-radius: 6px;
  outline: none;
  font-family: "Pretendard";
  background-color: #ffffff;
`;

export const Select = styled.select`  /* 🔥 드롭다운 스타일 추가 */
  width: 100%;
  padding: 10px;
  font-size: 13px;
  border: 1px solid #d1d1d1;
  border-radius: 6px;
  outline: none;
  font-family: "Pretendard";
  background-color: #ffffff;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  margin-bottom: 30px;
`;



export const SubmitButton = styled.button`
  width: 60%;
  padding: 10px;
  background-color: ${palette.blue.main};
  color: #ffffff;
  font-size: 12px;
  font-weight: 545;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
