import { Link } from "react-router-dom";
import { Wrapper } from "../common/Common.styled";
import { paths } from "../data";

export const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1> Страница не найдена</h1>
      <button>
        <Link to={paths.MAIN}>Перейти на главную</Link>
      </button>
    </Wrapper>
  );
};
