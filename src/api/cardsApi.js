export const getCards = (token) => {
  return fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (res.status === 401) {
      throw new Error("Нет авторизации");
    }
    if (!res.ok) {
      throw new Error("что-то пошло не так");
    }
    return res.json();
  });
};

export const addNewCardApi = ({ newCard, token }) => {
  return fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify(newCard),
  }).then((res) => {
    console.log(newCard)
    if (res.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (res.status === 401) {
      throw new Error("Нет авторизации");
    }
    if (res.status === 400) {
      throw new Error("Поле описания не заполнено");
    }
    if (!res.ok) {
      throw new Error("что-то пошло не так");
    }
    return res.json();
  });
};
