import { Column } from "../Column/Colunm.jsx";
import {tasks} from "../../data.js"


export const Main = () => {
  

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column
              name={"Без статуса"}
              cards={tasks.filter((task) => task.name === "Без статуса")}
            />
            <Column
              name={"Нужно сделать"}
              cards={tasks.filter((task) => task.name === "Нужно сделать")}
            />
            <Column
              name={"В работе"}
              cards={tasks.filter((task) => task.name === "В работе")}
            />
            <Column
              name={"Тестирование"}
              cards={tasks.filter((task) => task.name === "Тестирование")}
            />
            <Column
              name={"Готово"}
              cards={tasks.filter((task) => task.name === "Готово")}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

