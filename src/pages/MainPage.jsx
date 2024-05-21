import { Header } from "../components/Header/Header.jsx";
import { Main } from "../components/Main/Main.jsx";
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { Wrapper } from "../common/Common.styled.js";
import { Outlet } from "react-router-dom";
import { getCards } from "../api/cardsApi.js";
import { UserContext } from "../contexts/userContext.jsx";
import { CardContext } from "../contexts/cardContext.jsx";

export const MainPage = ({ themeColor, setThemeColor }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { user } = useContext(UserContext);
  const { cards, setCards } = useContext(CardContext);

  function addCard(e) {
    e.preventDefault();
    const newCard = {
      _id: cards[cards.length - 1]._id + 1,
      date: `${format(new Date(), "dd.MM.yy")}`,
      topic: "Web Design",
      title: "Название новой задачи",
      status: "Без статуса",
      themeStyle: "_orange",
    };

    setCards([...cards, newCard]);
  }

  useEffect(() => {
    setIsLoading(true);

    getCards(user.token)
      .then((res) => {
        setErrorMsg("");
        setCards(res.tasks);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Wrapper>
        <Outlet />
        <Header addCard={addCard} setTheme={setThemeColor} theme={themeColor} />
        <Main errorMsg={errorMsg} cards={cards} isLoading={isLoading} />
      </Wrapper>
    </>
  );
};
