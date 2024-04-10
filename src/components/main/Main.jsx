import Column from "../column/Colunm";
import Card from "../card/Card";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column
              name={"Без статуса"}
              cards={
                <Card
                  cardTheme={"Wed Design"}
                  cardTitle={"Название задачи"}
                  cardStyle={"card__theme _orange"}
                  cardThemeStyle={"_orange"}
                />
              }
            />
            <Column
              name={"Нужно сделать"}
              cards={
                <Card
                  cardTheme={"Research"}
                  cardTitle={"Название задачи"}
                  cardStyle={"card__theme _green"}
                  cardThemeStyle={"_green"}
                />
              }
            />
            <Column
              name={"В работе"}
              cards={
                <Card
                  cardTheme={"Сopywhriting"}
                  cardTitle={"Название задачи"}
                  cardStyle={"card__theme _purple"}
                  cardThemeStyle={"_purple"}
                />
              }
            />
            <Column
              name={"Тестирование"}
              cards={
                <Card
                  cardTheme={"Research"}
                  cardTitle={"Название задачи"}
                  cardStyle={"card__theme _orange"}
                  cardThemeStyle={"_orange"}
                />
              }
            />
            <Column
              name={"Готово"}
              cards={
                <Card
                  cardTheme={"Research"}
                  cardTitle={"Название задачи"}
                  cardStyle={"card__theme _green"}
                  cardThemeStyle={"_green"}
                />
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
