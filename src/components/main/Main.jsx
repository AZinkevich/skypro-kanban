import Column from "../column/Colunm";
import Card from "../card/Card";

function Main() {
// const tasks = [{theme: "Wed Design",
// title: "Название задачи",
// style: "card__theme _orange",
// themeStyle: "_orange",
// }]

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
                  cardThemeStyle={"_green"}
                />
              }
            />
            <Column
              name={"В работе"}
              cards={
                <Card
                  cardTheme={"Сopywriting"}
                  cardTitle={"Название задачи"}
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
