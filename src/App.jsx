import "./App.css";
import { Header } from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { PopBrowse } from "./components/popups/popBrowse/PopBrowse.jsx";
import PopExit from "./components/popups/popExit/PopExit.jsx";
import { PopNewCard } from "./components/popups/popNewCard/PopNewCard.jsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
