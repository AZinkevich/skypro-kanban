import { useContext, useState } from "react";
import { Container } from "../../common/Common.styled.js";
import * as S from "./Header.styled.js";
import { paths } from "../../data.js";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext.jsx";

export const Header = ({ setTheme, theme }) => {
  const navigate = useNavigate();
  const [isOpenUser, setIsOpenUser] = useState(false);
  const { user } = useContext(UserContext);

  const toggleOpenUser = (e) => {
    e.preventDefault();
    setIsOpenUser((prev) => !prev);
  };

  const addCard = () => {
    navigate(paths.NEWCARD);
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
              {user.name}
            </S.HeaderUser>
            {isOpenUser && (
              <S.HeaderPopSet id="user-set-target">
                <S.PopUserName>{user.name}</S.PopUserName>
                <S.PopUserMail>{user.login}</S.PopUserMail>
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
