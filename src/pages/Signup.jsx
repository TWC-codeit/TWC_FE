import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/SignupStyle";

const API_URL = "http://13.238.115.119/api/auth/signup";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    gender: "",
    birthDate: "",
  });

  const [placeholders, setPlaceholders] = useState({
    username: "5자 이상으로 입력해주세요",
    password: "8자 이상으로 입력해주세요",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("회원가입 성공!");
        navigate("/login");
      } else {
        console.error("회원가입 실패");
      }
    } catch (error) {
      console.error("서버 연결 오류:", error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSignup}>
        <S.Title>회원가입</S.Title>
        <S.Row>
          <S.InputContainer>
            <S.Label>아이디</S.Label>
            <S.Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder={placeholders.username}
              required
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={placeholders.password}
              required
            />
          </S.InputContainer>
        </S.Row>
        <S.InputContainer>
          <S.Label>이름</S.Label>
          <S.Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </S.InputContainer>
        <S.Row>
          <S.InputContainer>
            <S.Label>성별</S.Label>
            <S.Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">선택</option>
              <option value="남성">남성</option>
              <option value="여성">여성</option>
              <option value="비공개">비공개</option>
            </S.Select>
          </S.InputContainer>
          <S.InputContainer>
            <S.Label>생년월일</S.Label>
            <S.Input
              type="text"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              placeholder="ex) 0000-00-00"
              required
            />
          </S.InputContainer>
        </S.Row>
        <S.CheckboxContainer>
          <S.Checkbox>
            <input type="checkbox" id="remember-id" />
            <label htmlFor="remember-id">ID 기억하기</label>
          </S.Checkbox>
          <S.Checkbox>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">(필수) 개인정보 수집 및 허용 동의</label>
          </S.Checkbox>
        </S.CheckboxContainer>
        <S.SubmitButton type="submit">계정 생성</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
}

export default Signup;
