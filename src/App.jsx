import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { PopBrowse } from "./components/Popups/PopBrowse/PopBrowse.jsx";
import { PopExit } from "./components/Popups/PopExit/PopExit.jsx";
import { PopNewCard } from "./components/Popups/PopNewCard/PopNewCard.jsx";
import { Main } from "./components/Main/Main.jsx";
import { useEffect, useState } from "react";
import { tasks } from "./data.js";
import { format } from "date-fns";
import { Wrapper } from "./common/Common.Styled.js";

function App() {
  const [cards, setCards] = useState(tasks);
  const [isLoading, setIsLoading] = useState(false);

  function addCard(e) {
    e.preventDefault();
    const newCard = {
      id: cards[cards.length - 1].id + 1,
      date: `${format(new Date(), "dd.MM.yy")}`,
      theme: "Web Design",
      title: "Название новой задачи",
      status: "Без статуса",
      themeStyle: "_orange",
    };

    setCards([...cards, newCard]);
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Wrapper>
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}
        <Header addCard={addCard} />
        <Main cards={cards} isLoading={isLoading} />
      </Wrapper>
    </>
  );
}

export default App;
