import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../../lib/data.js";
import { useContext, useState } from "react";
import { addNewCardApi } from "../../../api/cardsApi.js";
import { UserContext } from "../../../contexts/userContext.jsx";
import { CardContext } from "../../../contexts/cardContext.jsx";
import { AlertMsg } from "../../Register/Register.styled.js";
import "react-day-picker/dist/style.css";
import * as S from "./PopNewCard.styled.js";
import { Calendar } from "../../Calendar/Calendar.jsx";

export const PopNewCard = () => {
  const { user } = useContext(UserContext);
  const { setCards } = useContext(CardContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [selected, setSelected] = useState();
  //const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState({
    title: "",
    topic: "",
    status: "",
    description: "",
  });

  //const currentData = date.toLocaleDateString("ru-RU");

  const onAddNewCard = () => {
    setError("");
    const title = !inputValue.title ? "Новая задача" : inputValue.title;
    const topic = !inputValue.topic ? "Research" : inputValue.topic;
    const status = !inputValue.status ? "Без статуса" : inputValue.status;
    const newCard = {
      description: inputValue.description,
      title,
      topic,
      status,
      date: selected,
    };

    if (!inputValue.description) {
      return setError("Заполните поле описания");
    }

    addNewCardApi({ newCard, token: user.token })
      .then((res) => {
        setCards(res.tasks);
        navigate(paths.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={paths.MAIN} className="pop-new-card__close">
              <S.PopNewCardClose>
              ✖
              </S.PopNewCardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                  <S.FormNewInput
                    onChange={onChangeInput}
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.Subttl htmlFor="textArea">Описание задачи</S.Subttl>
                  <S.PopNewCardArea
                    onChange={onChangeInput}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    defaultValue={inputValue.description}
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <div>
                <S.Calendar__ttl>Даты</S.Calendar__ttl>
                <Calendar selected={selected} setSelected={setSelected} />
              </div>
            </S.PopNewCardWrap>
            <S.Categories>
              <S.Subttl>Категория</S.Subttl>
              <S.CategoriesThemes>
                <div>
                  <S.Label1
                    type="radio"
                    id="radio1"
                    name="topic"
                    value="Web Design"
                    onChange={onChangeInput}
                  />
                  <S.PopNewCardLabel1 htmlFor="radio1">
                    <p>Web Design</p>
                  </S.PopNewCardLabel1>
                </div>
                <div>
                  <S.Label2
                    type="radio"
                    id="radio2"
                    name="topic"
                    value="Research"
                    onChange={onChangeInput}
                  />
                  <S.PopNewCardLabel2 htmlFor="radio2">
                    <p>Research</p>
                  </S.PopNewCardLabel2>
                </div>
                <div>
                  <S.Label3
                    type="radio"
                    id="radio3"
                    name="topic"
                    value="Copywriting"
                    onChange={onChangeInput}
                  />
                  <S.PopNewCardLabel3 htmlFor="radio3">
                    <p>Copywriting</p>
                  </S.PopNewCardLabel3>
                </div>
              </S.CategoriesThemes>
            </S.Categories>
            <AlertMsg>{error && error}</AlertMsg>
            <S.FormNewCreate onClick={onAddNewCard} id="btnCreate">
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};
