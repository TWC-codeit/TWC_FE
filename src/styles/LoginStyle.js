import styled from "styled-components";
import palette from "../lib/colorPalette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  padding: 20px 60px 60px 60px;
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
  margin-bottom: 10px;
  width: 100%;
  gap: 5px;
  align-items: center;
`;

export const Label = styled.label`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 600;
  color: ${palette.gray.text};
  align-self: flex-start;
  margin-left: 18%;
  gap: 5px;
  &::after {
    content: "•";
    font-size: 14px;
    color: ${palette.blue.main};
    position: relative;
    top: -8px;
  }
`;

export const Input = styled.input`
  width: 60%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #d1d1d1;
  border-radius: 6px;
  outline: none;
  font-family: "Pretendard";
  background-color: #ffffff;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 10px;
  margin-bottom: 20px;
  margin-left: -30px;
  text-align: center;
  display: block;
`;

export const LoginForgot = styled.a`
  font-family: "Pretendard";
  font-size: 12px;
  color: ${palette.blue.main};
  cursor: pointer;
  align-self: flex-start;
  margin-top: -15px;
  margin-bottom: 25px;
  margin-left: 70px;
  text-decoration: underline;
`;

export const LoginButton = styled.button`
  width: 65%;
  padding: 12px;
  background-color: ${palette.blue.main};
  color: #ffffff;
  font-size: 12px;
  font-weight: 550;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SignupButton = styled.button`
  width: 65%;
  padding: 12px;
  background-color: ${palette.gray.gray4};
  color: ${palette.gray.gray2};
  font-size: 12px;
  font-weight: 550;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
