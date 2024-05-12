import { Link, useNavigate } from "react-router-dom";
//import { Wrapper } from "../../common/Common.styled.js";
import { paths } from "../../data.js";
import {
  Wrapper,
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalTtl,
  ModalFormLogin,
  ModalInput,
  ModalBtnEnter,
  ModalFormGroup,
  AlertMsg,
} from "./Login.styled.js";
import { useState } from "react";
import { signIn } from "../../api/auth.js";

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const [inputValue, setInputValue] = useState({
    login: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const { login, password } = inputValue;

    if (!login || !password) {
      return setErrorMsg("Заполните все поля");
    }

    signIn(inputValue)
      .then((res) => {
        setErrorMsg("");
        setIsAuth(res.user);
        localStorage.setItem('user', JSON.stringify(res.user))
        navigate(paths.MAIN);
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin id="formLogIn" action="#">
              <ModalInput
                onChange={onChangeInput}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                onChange={onChangeInput}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <AlertMsg>{errorMsg}</AlertMsg>
              <ModalBtnEnter
                onClick={loginHandler}
                className="modal__btn-enter _hover01"
                id="btnEnter"
              >
                Войти
              </ModalBtnEnter>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
};
