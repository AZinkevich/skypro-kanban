import { useState } from "react";
import { Container } from "../../common/Common.styled.js";
import * as S from "./Header.styled.js";

export const Header = ({ addCard, setTheme, theme }) => {
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
            {theme ? (<a href="" target="_self">
              <S.HeaderLogoImg src="../public/logo.png" alt="logo" />
            </a>) : (<a href="" target="_self">
              <S.HeaderLogoImg src="../public/logo_dark.png" alt="logo" />
            </a>)}
          </div>
          <S.HeaderNav>
            <S.HeaderButtonNew onClick={addCard} id="btnMainNew">
              <S.HeaderButtonText>Создать новую задачу</S.HeaderButtonText>
            </S.HeaderButtonNew>
            <S.HeaderUser
              href="#user-set-target"
              onClick={toggleOpenUser}
              
            >
              Ivan Ivanov
            </S.HeaderUser>
            {isOpenUser && (
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                {/* <a href="">x</a>  */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input onChange={() => setTheme(!theme)} type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
