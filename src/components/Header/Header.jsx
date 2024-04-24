import { useState } from "react";
import { Button, ButtonText, UserLink } from "./Header.Styled.js";
import { Container } from "../../common/Common.Styled.js";
import * as S from "./Header.Styled.js";

export const Header = ({ addCard }) => {
  const [isOpenUser, setIsOpenUser] = useState(false);

  const toggleOpenUser = (e) => {
    e.preventDefault();
    setIsOpenUser((prev) => !prev);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="../public/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="../public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <Button onClick={addCard} id="btnMainNew">
              <ButtonText>Создать новую задачу</ButtonText>
            </Button>
            <UserLink
              href="#user-set-target"
              onClick={toggleOpenUser}
              
            >
              Ivan Ivanov
            </UserLink>
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
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </nav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
