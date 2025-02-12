import styled from "styled-components";
import palette from "../../lib/colorPalette";

export const Header = styled.div``;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 120px;
  box-sizing: border-box;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Logo = styled.img`
  width: 56px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 38px;
  list-style: none;
`;

export const Item = styled.li`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  color: ${palette.gray.gray2};
  cursor: pointer;

  a {
    text-decoration: none; 
    color: inherit; /
  }

  &:hover {
    color: ${palette.gray.text}; 
  }

  &.active {
    color: ${palette.gray.text}; 
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Notice = styled.img`
  width: 22px;
  height: 22px;
  opacity: 0.68;
  cursor: pointer;
  margin-right: 25px;
`;
export const Profile = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  color: ${palette.blue.main};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SignButton = styled.button`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  color:#ffffff; 
  background-color:${palette.blue.main};
  border-radius: 8px;
  border: none;
  padding: 7px 15px;
  cursor: pointer;
  }
`;
