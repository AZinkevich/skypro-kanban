import { useState } from "react";
import { Container } from "../../common/Common.styled.js";
import * as S from "./Header.styled.js";
import { paths } from "../../data.js";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
//import { paths } from "../../data.js";

export const Header = ({isAuth, addCard, setTheme, theme }) => {
  const [isOpenUser, setIsOpenUser] = useState(false);

  const toggleOpenUser = (e) => {
    e.preventDefault();
    setIsOpenUser((prev) => !prev);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <div>
            {theme ? (
              <a href="" target="_self">
                <S.HeaderLogoImg src="../public/logo.png" alt="logo" />
              </a>
            ) : (
              <a href="" target="_self">
                <S.HeaderLogoImg src="../public/logo_dark.png" alt="logo" />
              </a>
            )}
          </div>
          <S.HeaderNav>
            <S.HeaderButtonNew onClick={addCard} id="btnMainNew">
              <S.HeaderButtonText>Создать новую задачу</S.HeaderButtonText>
            </S.HeaderButtonNew>
            <S.HeaderUser href="#user-set-target" onClick={toggleOpenUser}>
            {isAuth.name}
            </S.HeaderUser>
            {isOpenUser && (
              <S.HeaderPopSet id="user-set-target">
                <S.PopUserName>{isAuth.name}</S.PopUserName>
                <S.PopUserMail>{isAuth.login}</S.PopUserMail>
                <S.PopUserTheme>
                  <p>Темная тема</p>
                  <input
                    onChange={() => setTheme(!theme)}
                    type="checkbox"
                    name="checkbox"
                  />
                </S.PopUserTheme>
                <S.ButtonUsetPop>
                  <Link to={paths.EXIT}>Выйти</Link>
                </S.ButtonUsetPop>
              </S.HeaderPopSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
