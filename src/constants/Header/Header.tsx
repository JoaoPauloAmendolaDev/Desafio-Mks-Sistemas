import React from "react";
import { HeaderBoxStyle, Text } from "./HeaderStyle";
import Vector from "../../assets/images/Vector.png";

function Header() {
  return (
    <HeaderBoxStyle>
      <Text>
        <h1>MKS</h1>
        <p>sistemas</p>
      </Text>
      <div>
        <img src={Vector} />
        <p>0</p>
      </div>
    </HeaderBoxStyle>
  );
}

export default Header;
