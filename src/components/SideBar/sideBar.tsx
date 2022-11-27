import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { ProductType } from "../../redux/reducers/cartSlice";
import { setFalse } from "../../redux/reducers/isOpenLateralBox";
import ShopCardBox from "../ShopCardBox/ShopCardBox";
import {
  ExitButton,
  ConfirmBuy,
  ItemsConteiner,
  LateralBar,
  TextAndCloseButton,
  Total,
} from "./sideBarStyle";

function SideBar() {
  let isOpen = useAppSelector((state) => state.isOpenSlice.value.isOpen);
  const cart = useAppSelector((state) => state.cart.value.cartItems);
  const [total, setTotal] = useState(0);

  const dispatch = useAppDispatch();

  function toDispatch() {
    dispatch(setFalse(false));
  }

  console.log(isOpen);
  useEffect(() => {
    //@ts-ignore
    let newvalue = cart.map((item) => item.price * item.quantity);
    setTotal(newvalue.reduce((total, number) => total + number, 0));
  }, [cart]);

  return isOpen ? (
    <LateralBar>
      <TextAndCloseButton>
        <div>
          <div>
            <p>Carrinho</p>
            <p>de compras</p>
          </div>
        </div>
        <ExitButton onClick={toDispatch}>
          <p>X</p>
        </ExitButton>
      </TextAndCloseButton>
      <ItemsConteiner>
        {cart.map((item: ProductType) => (
          //@ts-ignore
          <ShopCardBox product={item} key={item.id} />
        ))}
      </ItemsConteiner>
      <Total>
        <p>Total:</p> <p>R${total}</p>
      </Total>
      <ConfirmBuy>
        <span>FINALIZAR COMPRA</span>
      </ConfirmBuy>
    </LateralBar>
  ) : null;
}

export default SideBar;
