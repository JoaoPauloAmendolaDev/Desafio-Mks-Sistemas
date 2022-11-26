import React from "react";
import ShopBox from "./components/ShopBox/ShopBox";
import Body from "./constants/ItensConteiner/ItensConteiner";
import Footer from "./constants/Footer/Footer";
import Header from "./constants/Header/Header";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { useGetAllProductsQuery } from "./Redux/Reducers/Products";

const App: React.FC = () => {

  const {data, error, isLoading} = useGetAllProductsQuery(undefined)
  console.log(isLoading ? 'Está carregando' : data)

  return (
    <>
      <GlobalStyle />
      <Header />
      <Body>
        <ShopBox />
      </Body>
      <Footer />
    </>
  );
};

export default App;
