import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <style jsx global>{`
      html {
        font-family: ${nunito.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>
);

export default App;
