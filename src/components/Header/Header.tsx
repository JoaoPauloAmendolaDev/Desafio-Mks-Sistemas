import { HeaderBoxStyle, Text } from "./HeaderStyle";
import { ReactComponent as Cart } from "../../assets/SVG/Cart.svg";
import { useAppSelector } from "../../redux/hooks/hooks";

function Header() {
  const cart = useAppSelector((state) => state.cart.value.cartItems);

  function OpenTotal() {
    console.log("test");
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
