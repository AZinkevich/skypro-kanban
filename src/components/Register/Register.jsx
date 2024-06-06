import { Link, useNavigate} from "react-router-dom";
import { paths } from "../../lib/data.js";
import {
  Wrapper,
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalTtl,
  ModalFormLogin,
  ModalInput,
  ModalBtnEnter,
  ModalFormGroup,
  AlertMsg,
} from "./Register.styled";
import { register } from "../../api/auth";
import { useState } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const [inputValue, setInputValue] = useState({
    login: "",
    name: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    const { name, login, password } = inputValue;

    if (!login || !name || !password) {
      return setErrorMsg("Заполните все поля");
    }

    register(inputValue)
      .then(() => {
        setErrorMsg("");
        navigate(paths.LOGIN);
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Регистрация</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogUp" action="#">
              <ModalInput
                onChange={onChangeInput}
                value={inputValue.name}
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
              />
              <ModalInput
                onChange={onChangeInput}
                value={inputValue.login}
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <ModalInput
                onChange={onChangeInput}
                value={inputValue.password}
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <AlertMsg>{errorMsg}</AlertMsg>
              <ModalBtnEnter id="SignUpEnter">
                <a onClick={registerHandler}>Зарегистрироваться</a>{" "}
              </ModalBtnEnter>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
};
