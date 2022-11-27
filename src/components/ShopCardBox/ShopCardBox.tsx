import { useAppDispatch } from "../../redux/hooks/hooks";
import {
  ShopCardConteiner,
  ExcludeButton,
  AddOrRemoveButton,
} from "./ShopCardBoxStyle";
import {
  removeFromCart,
  addProduct,
  removeTotalItemFromCart,
} from "../../redux/reducers/cartSlice";

type InterfaceProductCard = {
  product: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    quantity: number;
  };
};

function ShopCardBox({ product }: InterfaceProductCard) {
  const { id, name, brand, description, photo, price, quantity } = product;
  const dispatch = useAppDispatch();

  function removeItem() {
    dispatch(removeTotalItemFromCart(product));
  }

  function remove() {
    dispatch(removeFromCart(product));
  }

  function add() {
    dispatch(addProduct(product));
  }

  return (
    <ShopCardConteiner>
      <ExcludeButton onClick={removeItem}>
        <p>X</p>
      </ExcludeButton>
      <img src={photo} />
      <p>{name}</p>
      <AddOrRemoveButton>
        <button onClick={remove}>-</button>
        <div>{quantity}</div>
        <button onClick={add}>+</button>
      </AddOrRemoveButton>
      <span>R${price}</span>
    </ShopCardConteiner>
  );
}

export default ShopCardBox;
