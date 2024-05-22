import { paths } from "../../../data.js";
//import { CalendarContent } from "../../Calendar/Calendar.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./PopBrowse.styled.js";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/userContext.jsx";
import { CardContext } from "../../../contexts/cardContext.jsx";
import { Calendar } from "../../Calendar/Calendar.jsx";
import { deleteCard, editCard } from "../../../api/cardsApi.js";
import { AlertMsg } from "../../Register/Register.styled.js";
//import { useState } from "react";

export const PopBrowse = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { cards, setCards } = useContext(CardContext);
  const [selected, setSelected] = useState();
  const currentCard = cards.find((el) => id === el._id);
  const [popEdit, setPopEdit] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [saveCards, setSaveCards] = useState({
    title: currentCard.title,
    description: currentCard.description,
    topic: currentCard.topic,
    date: currentCard.date,
    status: currentCard.status,
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setSaveCards({
      ...saveCards,
      [name]: value,
    });
  };

  useEffect(() => {
    setPopEdit(true);
  }, []);

  const handleDeleteClick = (e) => {
    e.preventDefault();

    deleteCard({ _id: currentCard._id, token: user.token })
      .then((res) => {
        setCards(res.tasks);
        navigate(paths.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleSaveClick = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setSaveCards({
      ...saveCards,
      [name]: value,
    });

    editCard({
      _id: currentCard._id,
      token: user.token,
      newSaveCard: saveCards,
    })
      .then((response) => {
        setCards(response.tasks);
        navigate(paths.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <S.PopBrows id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>
                Название задачи {currentCard.title}
              </S.PopBrowseTtl>
              <S.CategotiesTheme $topic={currentCard.topic}>
                <p className="_orange">{currentCard.topic}</p>
              </S.CategotiesTheme>
            </S.PopBrowseTopBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              {popEdit ? (
                <S.StatusThemes>
                  <S.StatusThemeLight>
                    <p>{currentCard.status}</p>
                  </S.StatusThemeLight>
                </S.StatusThemes>
              ) : (
                <S.StatusThemes>
                  <S.StatusTheme>
                    <S.EditInput
                      type="radio"
                      id="status1"
                      name="status"
                      value="Без статуса"
                      onChange={handleInputChange}
                    />
                    <p>Без статуса</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <S.EditInput
                      type="radio"
                      id="status2"
                      name="status"
                      value="Нужно сделать"
                      onChange={handleInputChange}
                    />
                    <p>Нужно сделать</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <S.EditInput
                      type="radio"
                      id="status3"
                      name="status"
                      value="В работе"
                      onChange={handleInputChange}
                    />
                    <p>В работе</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <S.EditInput
                      type="radio"
                      id="status4"
                      name="status"
                      value="Тестирование"
                      onChange={handleInputChange}
                    />
                    <p>Тестирование</p>
                  </S.StatusTheme>
                  <S.StatusTheme>
                    <S.EditInput
                      type="radio"
                      id="status5"
                      name="status"
                      value="Готово"
                      onChange={handleInputChange}
                    />
                    <p>Готово</p>
                  </S.StatusTheme>
                </S.StatusThemes>
              )}
            </div>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.PopBrowseFormBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly={true}
                    placeholder="Введите описание задачи..."
                    value={currentCard.description}
                  />
                </S.PopBrowseFormBlock>
              </S.PopBrowseForm>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <Calendar selected={currentCard.date} />
                </div>
              </div>
            </S.PopBrowseWrap>
            <AlertMsg>{error && error}</AlertMsg>
            <S.PopBrowseBtn>
              {popEdit ? (
                <S.BtnGroup>
                  <S.BtnBor
                    onClick={() => {
                      setPopEdit(false);
                    }}
                  >
                    Редактировать задачу
                  </S.BtnBor>
                  <S.BtnBor onClick={handleDeleteClick}>
                    Удалить задачу
                  </S.BtnBor>
                </S.BtnGroup>
              ) : (
                <S.BtnGroup>
                  <S.BtnBor onClick={handleSaveClick}>Сохранить</S.BtnBor>
                  <S.BtnBor
                    onClick={() => {
                      setPopEdit(true);
                    }}
                  >
                    Отменить
                  </S.BtnBor>
                  <S.BtnBor onClick={handleDeleteClick}>
                    Удалить задачу
                  </S.BtnBor>
                </S.BtnGroup>
              )}
              <S.BtnBg>
                <Link to={paths.MAIN}>Закрыть</Link>
              </S.BtnBg>
            </S.PopBrowseBtn>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrows>
  );
};
