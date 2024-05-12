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
