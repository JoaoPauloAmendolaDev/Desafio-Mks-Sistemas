import React from "react";
import ShopBox from "../ShopBox/ShopBoxCard";
import { useGetAllProductsQuery } from "../../redux/reducers/products";
import { Conteiner } from "./ShopBoxConteinerStyle";
import { ProductType } from "../../redux/reducers/cartSlice";
import ShopBoxEmpty from "../ShopBoxEmpty/ShopBoxEmpty";

function ShopBoxConteiner() {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Conteiner>
          <ShopBoxEmpty />
        </Conteiner>
      ) : data ? (
        <Conteiner>
          {data.products.map((item: ProductType) => (
            <ShopBox product={item} key={item.id} />
          ))}
        </Conteiner>
      ) : null}
    </>
  );
}
export default ShopBoxConteiner;
