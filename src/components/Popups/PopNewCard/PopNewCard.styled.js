import styled from "styled-components";
import { Hover01 } from "../../../common/Global.styled";
import { device } from "../../../lib/breakpoints.js";

export const Calendar__ttl = styled.p`
  margin-left: 16px;
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopNewCard = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColorCard};
  color: ${({ theme }) => theme.text};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTtl = styled.h3`
  background-color: ${({ theme }) => theme.backgroundColorCard};
  color: ${({ theme }) => theme.textPopNewCardTtl};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  @media ${device.md} {
    flex-direction: column;
    gap: 0px;
  }
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  color: ${({ theme }) => theme.text};

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  border-color: ${({ $isError }) =>
    $isError ? "red" : "rgba(148, 166, 190, 0.4)"};
`;

export const Subttl = styled.label`
  background-color: ${({ theme }) => theme.backgroundColorCard};
  color: ${({ theme }) => theme.textSubttl};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopNewCardArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.text};

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media ${device.md} {
    height: 150px;
  }
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 14px;
`;

export const FormNewCreate = styled(Hover01("button"))`
  width: 138px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  @media ${device.sm} {
    font-size: 12px;
  }
`;

export const PopNewCardLabel1 = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${({ $theme }) =>
    $theme === "dark" ? "#ff6d00" : "#FFE4C2"};
  color: ${({ $theme }) => ($theme === "dark" ? "#fff" : "#FF6D00")};
  @media ${device.sm} {
    padding: 8px 10px;
  }
  &:hover {
    opacity: 1 !important;
  }
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    white-space: nowrap;
    @media ${device.sm} {
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
    }
  }
`;

export const Label1 = styled.input`
  display: none;
  &:checked + label {
    opacity: 1 !important;
  }
`;

export const PopNewCardLabel2 = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${({ $theme }) =>
    $theme === "dark" ? "#06b16e" : "#B4FDD1"};
  color: ${({ $theme }) => ($theme === "dark" ? "#fff" : "#06B16E")};
  @media ${device.sm} {
    padding: 8px 10px;
  }

  &:hover {
    opacity: 1 !important;
  }
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    white-space: nowrap;
    @media ${device.sm} {
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
    }
  }
`;

export const Label2 = styled.input`
  display: none;
  &:checked + label {
    opacity: 1 !important;
  }
`;

export const PopNewCardLabel3 = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${({ $theme }) =>
    $theme === "dark" ? "#9a48f1" : "#E9D4FF"};
  color: ${({ $theme }) => ($theme === "dark" ? "#fff" : "#9A48F1")};
  @media ${device.sm} {
    padding: 8px 10px;
  }
  &:hover {
    opacity: 1 !important;
  }
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    white-space: nowrap;
    @media ${device.sm} {
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
    }
  }
`;

export const Label3 = styled.input`
  display: none;
  &:checked + label {
    opacity: 1 !important;
  }
`;

export const PopNewCardClose = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;
