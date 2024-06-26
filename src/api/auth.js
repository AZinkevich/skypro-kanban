const url = "https://wedev-api.sky.pro/api/user";

export const register = ({ login, name, password }) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      login: login,
      name: name,
      password: password,
    }),
  }).then((res) => {
    if (res.status === 400) {
      throw new Error("Пользователь с таким логином уже существует");
    }
    if (res.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (!res.ok) {
      throw new Error("что-то пошло не так");
    }
    return res.json();
  });
};

export const signIn = ({ login, password }) => {
  return fetch(url + '/login', {
    method: "POST",
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  }).then((res) => {
    if (res.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    if (res.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (!res.ok) {
      throw new Error("что-то пошло не так");
    }
    return res.json();
  });
};
