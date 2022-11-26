import React from "react";
import ShopBox from "./components/ShopBox/ShopBox";
import ShopCardBox from "./components/ShopCardBox/ShopCardBox";
import Body from "./constants/ItensConteiner/ItensConteiner";
import Footer from "./constants/Footer/Footer";
import Header from "./constants/Header/Header";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {},
});

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Body>
          <ShopBox />
        </Body>
        <Footer />
      </Provider>
    </>
  );
};

export default App;
