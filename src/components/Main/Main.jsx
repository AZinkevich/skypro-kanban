import { Column } from "../Column/Colunm.jsx";

export const Main = () => {
  const tasks = [
    {
      theme: "Wed Design",
      title: "Название задачи",
      name: "Без статуса",
      themeStyle: "_orange",
    },
    {
      theme: "Research",
      title: "Название задачи",
      name: "Нужно сделать",
      themeStyle: "_green",
    },
    {
      theme: "Сopywriting",
      title: "Название задачи",
      name: "В работе",
      themeStyle: "_purple",
    },
    {
      theme: "Research",
      title: "Название задачи",
      name: "Тестирование",
      themeStyle: "_green",
    },
    {
      theme: "Сopywriting",
      title: "Название задачи",
      name: "Готово",
      themeStyle: "_purple",
    },
    {
      theme: "Research",
      title: "Название задачи1",
      name: "Нужно сделать",
      themeStyle: "_green",
    },
  ];

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

