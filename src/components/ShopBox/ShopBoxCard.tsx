import { ShopBoxConteiner, NameAndValue, InformationBox } from "./ShopBoxStyle";
import { ReactComponent as Bag } from "../../assets/SVG/Bag.svg";
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
      <img src={photo} />
      <NameAndValue>
        <p>{name}</p>
        <div>R${price}</div>
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
