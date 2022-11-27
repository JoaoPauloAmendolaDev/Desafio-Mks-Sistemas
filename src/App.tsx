import React, { useEffect } from "react";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { useGetAllProductsQuery } from "./redux/reducers/products";
import { useAppSelector } from "./redux/hooks/hooks";
import Header from "./components/Header/Header";
import ShopBox from "./components/ShopBox/ShopBoxCard";
import Footer from "./components/Footer/Footer";
import ShopBoxConteiner from "./components/ShopBoxConteiner/ShopBoxConteiner";

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
      <Footer />
    </>
  );
};

export default App;
