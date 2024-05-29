import { Link } from "react-router-dom";
import { Wrapper } from "../common/Common.styled";
import { paths } from "../lib/data.js";

export const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1> Страница не найдена :(</h1>
      <Link to={paths.MAIN}>Перейти на главную</Link>
    </Wrapper>
  );
};
