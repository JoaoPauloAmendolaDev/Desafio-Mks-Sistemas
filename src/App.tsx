import React from "react";
import Header from "./constants/Header/Header";
import GlobalStyle from "./GlobalStyle/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};

export default App;
