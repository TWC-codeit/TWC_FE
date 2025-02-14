import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as H from "../styles/components/HeaderStyle";
import Logo from "../assets/TWC.svg";
import NotificationIcon from "../assets/icons/notification.svg";
import ProfileIcon from "../assets/icons/profile.svg";
import { getCookie, removeCookie } from "../api/Cookie.js";
import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_API_URL;

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie("access_token");
    setIsLoggedIn(!!token); // token이 존재하면 true, 없으면 false
  }, [getCookie("access_token")]); // 임시조치 - 추후 AuthContext로 로그인 상태 전역관리로 리팩토링 추천

  const handleLogout = async () => {
    try {
      const token = getCookie("access_token");
      if (!token) {
        console.warn("로그인 상태가 아닙니다.");
        return;
      }

      await axios.post(`${apiUrl}/auth/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      removeCookie("access_token");
      setIsLoggedIn(false); // 상태 업데이트
      navigate("/"); // 메인 페이지로 이동
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };
  return (
    <H.HeaderContainer>
      <H.Left>
        <Link to="/">
          <H.Logo src={Logo} alt="TWC Logo" />
        </Link>
        <H.Menu>
          <H.Item className={location.pathname === "/today" ? "active" : ""}>
            <Link to="/today">오늘의 보도들</Link>
          </H.Item>
          <H.Item className={location.pathname === "/timeline" ? "active" : ""}>
            <Link to="/timeline">타임라이너</Link>
          </H.Item>
          <H.Item className={location.pathname === "/scrap" ? "active" : ""}>
            <Link to="/scrap">스크랩 목록</Link>
          </H.Item>
        </H.Menu>
      </H.Left>

      <H.Right>
        {isLoggedIn ? (
          <>
            <H.LoginButton onClick={handleLogout}>로그아웃</H.LoginButton>
          </>
        ) : (
          <>
            <Link to="/login">
              <H.LoginButton>로그인</H.LoginButton>
            </Link>
            <Link to="/signup">
              <H.SignButton>회원가입</H.SignButton>
            </Link>
          </>
        )}
      </H.Right>
    </H.HeaderContainer>
  );
}

export default Header;
