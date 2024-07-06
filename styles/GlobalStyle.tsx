import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    header, footer {
      padding: 0.5rem;
    }

    main {
      padding: 0.5rem;
    }
  }
`;

export default GlobalStyle;
