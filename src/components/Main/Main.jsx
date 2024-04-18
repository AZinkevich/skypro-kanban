import { Column } from "../Column/Colunm.jsx";
//import {tasks} from "../../data.js"


export const Main = ({cards}) => {
  

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column
              name={"Без статуса"}
              cards={cards.filter((task) => task.name === "Без статуса")}
            />
            <Column
              name={"Нужно сделать"}
              cards={cards.filter((task) => task.name === "Нужно сделать")}
            />
            <Column
              name={"В работе"}
              cards={cards.filter((task) => task.name === "В работе")}
            />
            <Column
              name={"Тестирование"}
              cards={cards.filter((task) => task.name === "Тестирование")}
            />
            <Column
              name={"Готово"}
              cards={cards.filter((task) => task.name === "Готово")}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

