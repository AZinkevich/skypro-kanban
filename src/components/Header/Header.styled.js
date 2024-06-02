import styled from "styled-components";
import { Hover01, Hover02, Hover03 } from "../../common/Global.styled";
import { device } from "../../lib/breakpoints.js";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({theme}) => theme.body};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogoImg = styled.img`
  width: 85px;
`;

export const HeaderNav = styled.div`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonNew = styled(Hover01('button'))`
  width: 250px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  @media ${device.md} {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const HeaderButtonText = styled.a`
  color: #ffffff;

  &:hover {
    color: #565eef;
  }
`;

export const HeaderUser = styled(Hover02('a'))`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.headerUserColor};

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({theme}) => theme.headerUserColor};
    border-bottom: 1.9px solid ${({theme}) => theme.headerUserColor};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

//Popup

export const HeaderPopSet = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 155px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
  &:target {
    display: block;
  }
`;

export const PopUserName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  //display: flex;
  display: none;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  & p {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
  & input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  & input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }
  & input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;

export const ButtonUsetPop = styled(Hover03('button'))`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;
  padding: 0px;
  & a {
    color: #565eef;
  }
`;