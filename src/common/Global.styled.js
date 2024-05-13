import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";


export   const lightTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#eaeef6',
  mainBackground: '#eaeef6',
  headerUserColor: '#565eef',
  backgroundColorCard: '#ffffff',
  colorCardTitle: '#000000',
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
  outline: none;
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
