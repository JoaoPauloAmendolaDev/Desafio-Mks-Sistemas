import React from "react";
import { HeaderBoxStyle, Text } from "./HeaderStyle";
import { ReactComponent as Cart } from "../../assets/SVG/Cart.svg";

function Header() {
  return (
    <HeaderBoxStyle>
      <Text>
        <h1>MKS</h1>
        <p>sistemas</p>
      </Text>
      <div>
        <Cart />
        <p>0</p>
      </div>
    </HeaderBoxStyle>
  );
}

export default Header;
