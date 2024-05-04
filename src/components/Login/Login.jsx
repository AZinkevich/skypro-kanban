import { Link, useNavigate } from "react-router-dom";
//import { Wrapper } from "../../common/Common.styled.js";
import { paths } from "../../data.js";
import { Wrapper, ContainerSignin, Modal, ModalBlock, ModalTtl, ModalFormLogin, ModalInput, ModalBtnEnter, ModalFormGroup } from "./Login.styled.js";

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginHandler = () => {
    setIsAuth(true);
    navigate(paths.MAIN);
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
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
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
