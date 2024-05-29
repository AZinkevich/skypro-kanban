import styled from "styled-components";
import { Hover01, Hover03 } from "../../../common/Global.styled";
import { topicStyles } from "../../../lib/topic.js";
import { device } from "../../../lib/breakpoints.js";

export const PopBrows = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
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

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media ${device.sm} {
    padding: 20px 15px 19px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
  @media ${device.sm} {
    margin: 0px;
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  @media ${device.sm} {
    flex-direction: column;
    gap: 10px;
    align-items: start;
  }
`;

export const PopBrowseTtl = styled.h3`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textPopNewCardTtl};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  opacity: 1;
  display: block;
  opacity: 1 !important;
  background-color: ${({ $topic, $theme }) => {
    const background = topicStyles[$topic]?.backgroundColor || "#94A6BE";
    return $theme === "dark" ? topicStyles[$topic]?.text : background;
  }};
  @media ${device.sm} {
    padding: 8px 10px;
  }
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    color: ${({ $topic, $theme }) => {
      const color = topicStyles[$topic]?.color || "#FFFFFF";

      return $theme === "dark" ? "#FFFFFF" : color;
    }};
    @media ${device.sm} {
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
    }
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;
export const PopBrowseStatusP = styled.p`
  background-color: ${({ theme }) => theme.backgroundColorCard};
  color: ${({ theme }) => theme.textSubttl};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusThemeBtn = styled.button`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${props => props.$highlighted || props.$isChecked ? '#94a6be': ' #FFFFFF'};
  color: ${props => props.$highlighted || props.$isChecked ? '#FFFFFF': '#94a6be'};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  @media ${device.md} {
    padding: 8px 10px;
  }
 & p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  @media ${device.md} {
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
    }
 }
`
export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  @media ${device.md} {
    flex-direction: column;
    gap: 0px;
  }
`;
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const PopBrowseFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.label`
  background-color: ${({ theme }) => theme.backgroundColorCard};
  color: ${({ theme }) => theme.textSubttl};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background-color: ${(props) => props.theme.background};
  color: #94a6be;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
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
  @media ${device.sm} {
    height: 150px;
  }
`;

export const FormBrowseArea_2 = styled.textarea`
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
  @media ${device.sm} {
    height: 150px;
  }
`;

export const PopBrowseBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
`;

export const BtnGroup = styled.div`
  gap: 20px;
  & button {
    margin-right: 8px;
  }
`;

export const BtnBor = styled(Hover03("button"))`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  @media ${device.md} {
    font-size: 12px;
  }
  & a {
    color: #565eef;
  }
`;

export const BtnBg = styled(Hover01("button"))`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  @media ${device.md} {
    font-size: 12px;
  }
  & a {
    color: #ffffff;
  }
`;


