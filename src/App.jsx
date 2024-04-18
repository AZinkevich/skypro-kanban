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

  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}
        <Header />
        <Main cards={cards} />
      </div>
    </>
  );
}

export default App;
