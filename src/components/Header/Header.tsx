import { HeaderBoxStyle, Text } from "./HeaderStyle";
import { ReactComponent as Cart } from "../../assets/SVG/Cart.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setTrue } from "../../redux/reducers/isOpenLateralBox";

function Header() {
  const IsOpen = useAppSelector((state) => state.isOpenSlice.value.isOpen);
  const cart = useAppSelector((state) => state.cart.value.cartItems);
  const dispatch = useAppDispatch();

  function OpenTotal() {
    dispatch(setTrue(true));
    
  }

  return (
    <HeaderBoxStyle>
      <Text>
        <h1>MKS</h1>
        <p>sistemas</p>
      </Text>
      <div onClick={OpenTotal}>
        <Cart />
        <p>{cart.length}</p>
      </div>
    </HeaderBoxStyle>
  );
}

export default Header;
