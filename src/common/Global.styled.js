import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";


export   const lightTheme = {
  body: '#FFF',
  text: '#94a6be',
  background: '#eaeef6',
  mainBackground: '#eaeef6',
  headerUserColor: '#565eef',
  backgroundColorCard: '#ffffff',
  colorCardTitle: '#000000',
  textPopNewCardTtl: '#000000',
  textSubttl: '#000000',
  textlight: '#ffffff',
  backgroundColorlight: '#94A6BE',
  //backgroundColorOrange: '#ffe4c2',
  // colorOrange: '#ff6d00',
  
  // Другие стили светлой темы
};

export const darkTheme = {
  body: '#20202c',
  text: '#FAFAFA',
  background: '#151419',
  mainBackground: '#151419',
  headerUserColor: '#ffffff',
  backgroundColorCard: '#20202C',
  colorCardTitle: '#ffffff',
  textPopNewCardTtl: '#ffffff',
  textSubttl: '#ffffff',
  textlight: '#94A6BE',
  backgroundColorlight: '#ffffff',
  // backgroundColorOrange: '#FF6D00',
  // colorOrange: '#FFE4C2',

  // Другие стили темной темы
};

export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  //outline: none;
  border-radius: 8px;
  //border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  //background-color: #1a1a1a;
  transition: border-color 0.25s;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
html,
body {
  width: 100%;
  //height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.body};
  background:  ${(theme) => theme.background};
}
`;

export const Hover01 = (elem) => styled[elem]`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = (elem) => styled[elem]`
  &:hover {
    color: #33399b;
  }
`;

export const Hover03 = (elem) => styled[elem]`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
    a {
      color: #ffffff;
    }
  }
`;
