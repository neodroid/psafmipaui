import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "./component/header";
import Footer from "./component/footer";
import { Global, css } from "@emotion/core";
import theme from '../theme';


const breakpoints = ["360px", "768px", "1024px", "1440px"];




const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset /> 
      <Header />
      <Global
          styles={css`
            @font-face {
              
              
              {
                font-family: 'Montserrat';
                src: url('/fonts/Montserrat-Regular.ttf');
              }
              

            }
            @font-face {
              {
                font-family: 'Montserrat-Black';
                src: url('/fonts/Montserrat-Black.ttf');
              }
              
            
              

            }
          `}
        />
     
      <Component  />
      <Footer/>
    </ThemeProvider>
  );
};

export default App;

