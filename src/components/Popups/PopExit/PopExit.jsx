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
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <Link to={paths.LOGIN}>Да, выйти</Link>
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
              <Link to={paths.MAIN}>Нет, остаться</Link>
              </button>
            </div>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
