import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-gray-00: #000000;
    --color-gray-40: #373737;
    --color-gray-60: #2C2C2C;
    --color-gray-90: #EEEEEE;
    --color-gray-100: #ffffff;
    --color-blue: #0F52BA;

    font-size: 60%;   
  }


  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export const StyleButtons = css`
  border-radius: 5px;
  padding: 9px;
  width: 324px;
  max-width: 100%;
  height: 48px;
  text-align: center;
  cursor: pointer;
`;
