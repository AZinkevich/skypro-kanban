import styled from "styled-components";
import { device } from "../../lib/breakpoints.js";

export const Main = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.mainBackground};
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media ${device.xl} {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media ${device.xl} {
    display: block;
  }
`;
