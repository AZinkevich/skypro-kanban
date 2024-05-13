import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../../data";
import * as S from "./PopExit.styled.js";

export const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logOut = () => {
    setIsAuth("");
    localStorage.setItem("user", "");
    navigate(paths.LOGIN);
  };

  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form id="formExit" action="#">
            <S.PopExitGroup>
              <S.PopExitYes id="exitYes">
                <Link onClick={logOut}>Да, выйти</Link>
              </S.PopExitYes>
              <S.PopExitNo id="exitNo">
                <Link to={paths.MAIN}>Нет, остаться</Link>
              </S.PopExitNo>
            </S.PopExitGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};
