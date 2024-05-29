import { paths, statusList } from "../../../lib/data.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./PopBrowse.styled.js";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/userContext.jsx";
import { CardContext } from "../../../contexts/cardContext.jsx";
import { Calendar } from "../../Calendar/Calendar.jsx";
import { deleteCard, editCard } from "../../../api/cardsApi.js";
import { AlertMsg } from "../../Register/Register.styled.js";

export const PopBrowse = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { cards, setCards } = useContext(CardContext);
  const [selected, setSelected] = useState();
  const currentCard = cards.find((el) => id === el._id);
  const [popEdit, setPopEdit] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isStatus, setIsStatus] = useState(false);

  const [saveCards, setSaveCards] = useState({
    title: currentCard.title,
    description: currentCard.description,
    topic: currentCard.topic,
    date: selected,
    status: currentCard.status,
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    // console.log(currentCard.status);
    // console.log(isStatus);

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

  const changeStatus = (Status) => {
    setSaveCards({ ...saveCards, status: Status });
    //console.log(Status);
    setIsStatus(Status);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setSaveCards({
      ...saveCards,
      [name]: value,
    });

    const newDate = selected ? selected : currentCard.date;
    const newSaveCard = { ...saveCards, date: newDate };
    editCard({
      _id: currentCard._id,
      token: user.token,
      newSaveCard,
    })
      .then((res) => {
        setCards(res.tasks);
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
              <S.CategoriesTheme $topic={currentCard.topic}>
                <p>{currentCard.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.PopBrowseStatusP>Статус</S.PopBrowseStatusP>
              <S.StatusThemes>
                {popEdit ? (
                  <S.StatusThemeBtn $highlighted value={currentCard.status}>
                    <p>{currentCard.status}</p>
                  </S.StatusThemeBtn>
                ) : (
                  statusList.map((Status) => (
                    <S.StatusThemeBtn
                      key={Status}
                      $highlighted={Status === currentCard.status}
                      $isChecked={Status === isStatus}
                      onClick={() => changeStatus(Status)}
                    >
                      <p>{Status}</p>
                    </S.StatusThemeBtn>
                  ))
                )}
              </S.StatusThemes>
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.PopBrowseFormBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  {popEdit ? (
                    <S.FormBrowseArea
                      value={currentCard.description}
                      name="description"
                      id="textArea1"
                      disabled
                    ></S.FormBrowseArea>
                  ) : (
                    <S.FormBrowseArea_2
                      value={saveCards.description}
                      name="description"
                      id="textArea2"
                      onChange={handleInputChange}
                    ></S.FormBrowseArea_2>
                  )}
                </S.PopBrowseFormBlock>
              </S.PopBrowseForm>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                {popEdit ? (
                  <Calendar selected={currentCard.date} />
                ) : (
                  <Calendar selected={selected} setSelected={setSelected} />
                )}
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
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrows>
  );
};
