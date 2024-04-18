import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { PopBrowse } from "./components/popups/PopBrowse/PopBrowse.jsx";
import { PopExit } from "./components/popups/PopExit/PopExit.jsx";
import { PopNewCard } from "./components/popups/PopNewCard/PopNewCard.jsx";
import { Main } from "./components/Main/Main.jsx";
import { useState } from "react";
import {tasks} from "./data.js";

function App() {

  const [cards, setCards] = useState(tasks)
  
  function addCard(e) {
    e.preventDefault()
    const newCard = {
      
        id: cards[cards.length - 1].id + 1,
        date: "new Date()",
        theme: "Wed Design",
        title: "Название новой задачи",
        name: "Без статуса",
        themeStyle: "_orange",
      
    }

    setCards([...cards, newCard])
console.log(cards)
  }

  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}
        <Header addCard={addCard}/>
        <Main cards={cards} />
      </div>
    </>
  );
}

export default App;
