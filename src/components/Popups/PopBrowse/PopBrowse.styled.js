import styled from "styled-components";
import { Hover01} from "../../../common/Global.styled";

export const BtnBg = styled(Hover01('button'))`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  & a {
    color: #ffffff;
  }
`;