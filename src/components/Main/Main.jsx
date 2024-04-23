import { Column } from "../Column/Colunm.jsx";


export const Main = ({cards, isLoading}) => {
  

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
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
          </div>
        </div>
      </div>
    </main>
  );
}

