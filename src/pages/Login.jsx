import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../api/Cookie";
import * as L from "../styles/LoginStyle";

const apiUrl = "http://13.238.115.119";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setCookie("access_token", data.accessToken, { path: "/", maxAge: 3600 });
        setIsLoginFailed(false);
        navigate("/");
      } else {
        setIsLoginFailed(true);
      }
    } catch (error) {
      setIsLoginFailed(true);
    }
  };

  return (
    <L.Container>
      <L.Form
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <L.Title>로그인</L.Title>
        <L.InputContainer>
          <L.Label>아이디</L.Label>
          <L.Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </L.InputContainer>
        <L.InputContainer>
          <L.Label>비밀번호</L.Label>
          <L.Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </L.InputContainer>
        {isLoginFailed && (
          <L.ErrorMessage>
            로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.
          </L.ErrorMessage>
        )}
        <L.LoginForgot>비밀번호를 잊으셨나요?</L.LoginForgot>
        <L.LoginButton type="submit">로그인</L.LoginButton>
        <L.SignupButton onClick={() => navigate("/signup")}>
          회원가입
        </L.SignupButton>
      </L.Form>
    </L.Container>
  );
}

export default Login;
