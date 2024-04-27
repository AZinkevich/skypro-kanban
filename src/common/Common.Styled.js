//import { css } from "styled-components";
import styled from "styled-components";
import { device } from "../lib/breakpoints";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media ${device.md} {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({theme}) => theme.body};
`;
