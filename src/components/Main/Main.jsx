import { Container } from "../../common/Common.styled.js";
import { Column } from "../Column/Column.jsx";
import * as S from "./Main.styled.js"



export const Main = ({cards, isLoading}) => {
  

  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
           {isLoading ? "Данные загружаются..." : (
            <> 
            <Column
            status={"Без статуса"}
            cards={cards.filter((task) => task.status === "Без статуса")}
          />
          <Column
            status={"Нужно сделать"}
            cards={cards.filter((task) => task.status === "Нужно сделать")}
          />
          <Column
            status={"В работе"}
            cards={cards.filter((task) => task.status === "В работе")}
          />
          <Column
            status={"Тестирование"}
            cards={cards.filter((task) => task.status === "Тестирование")}
          />
          <Column
            status={"Готово"}
            cards={cards.filter((task) => task.status === "Готово")}
          />
          </>
           )}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

