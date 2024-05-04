import { Link } from "react-router-dom";
import { paths } from "../../../data";
import * as S from "./PopExit.styled.js"


export const PopExit = () => {
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
                <Link to={paths.LOGIN}>Да, выйти</Link>
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
}
