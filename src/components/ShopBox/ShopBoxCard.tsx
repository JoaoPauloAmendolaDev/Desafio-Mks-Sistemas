import React from "react";
import { ShopBoxConteiner, NameAndValue, InformationBox } from "./ShopBoxStyle";
import { ReactComponent as Bag } from "../../assets/SVG/Bag.svg";
import appleWatch from "../../assets/Images/appleWatch.png";
import { useGetAllProductsQuery } from "../../redux/reducers/products";
import { addProduct, ProductType } from "../../redux/reducers/cartSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";

type InterfaceProductCard = {
  product: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
  };
};

function ShopBox({ product }: InterfaceProductCard) {
  const { description, id, price, brand, name, photo } = product;

  const dispatch = useAppDispatch();

  return (
    <ShopBoxConteiner key={id}>
      <img src={photo}></img>
      <NameAndValue>
        <p>{name}</p>
        <div>{price}</div>
      </NameAndValue>
      <p>{description}</p>
      <button onClick={() => dispatch(addProduct(product))}>
        <Bag />
        <span>COMPRAR</span>
      </button>
    </ShopBoxConteiner>
  );
}

export default ShopBox;
