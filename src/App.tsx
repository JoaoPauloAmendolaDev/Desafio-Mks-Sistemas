import React, { useEffect } from "react";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { useAppSelector } from "./redux/hooks/hooks";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShopBoxConteiner from "./components/ShopBoxConteiner/ShopBoxConteiner";
import SideBar from "./components/SideBar/sideBar";

const App: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.value.cartItems);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <ShopBoxConteiner />
      <SideBar />
      <Footer />
    </>
  );
};

export default App;
