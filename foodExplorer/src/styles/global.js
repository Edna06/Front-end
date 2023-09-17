//imports
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    font-size: 62.5%;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};

::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
}
::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
    border-radius: 10px;
}
}

body,
input,
::placeholder{
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
}

body, input, button, textarea{
    outline: none;
    font-size: 1.6rem;
}


h1{
    font-size: 700;
}

h2, span {
    color: ${({ theme }) => theme.COLORS.GRAY};
}

h2, h3, a, button{
    font-family: 'Poppins', sans-serif;
}

a{
    text-decoration: none;
}

button {
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    border: none;
}


button:hover{
      transform: scale(0.99);
      transition: all 0.7s;
}

button, a{
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    border: none;

    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover{
    filter: brightness(0.9)
}

::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
}

`