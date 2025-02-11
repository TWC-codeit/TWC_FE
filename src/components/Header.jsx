import React from "react";
import { Link } from "react-router-dom"; 
import * as H from "../styles/components/HeaderStyle";
import Logo from "../assets/TWC.svg";
import NotificationIcon from "../assets/icons/notification.svg";
import ProfileIcon from "../assets/icons/profile.svg";

function Header() {
  const isLoggedIn = false; 

  return (
    <H.HeaderContainer>

      <H.Left>
        <Link to="/">
          <H.Logo src={Logo} alt="TWC Logo" />
        </Link>
        <H.Menu>
          <H.Item>
            <Link to="/today">오늘의 보도들</Link>
          </H.Item>
          <H.Item>
            <Link to="/timeline">타임라이너</Link>
          </H.Item>
          <H.Item>
            <Link to="/scrap">스크랩 목록</Link>
          </H.Item>
        </H.Menu>
      </H.Left>

      <H.Right>
        {isLoggedIn ? (
          <>
            <H.Notice src={NotificationIcon} alt="Notification" />
            <H.Profile src={ProfileIcon} alt="Profile" />
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
