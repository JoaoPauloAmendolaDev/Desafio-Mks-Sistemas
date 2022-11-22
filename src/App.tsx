import React from "react";
import Body from "./constants/Body/Body";
import Footer from "./constants/Footer/Footer";
import Header from "./constants/Header/Header";
import GlobalStyle from "./GlobalStyle/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
