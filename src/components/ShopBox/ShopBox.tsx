import React from "react";
import { ShopBoxConteiner, NameAndValue, InformationBox } from "./ShopBoxStyle";
import { ReactComponent as Bag } from "../../assets/SVG/Bag.svg";
import appleWatch from "../../assets/Images/appleWatch.png"

function ShopBox() {
  return (
    <ShopBoxConteiner>
      <img src={appleWatch}></img>
      <NameAndValue>
        <p>Apple Watch Series 4 GPS</p>
        <div>R$399</div>
      </NameAndValue>
      <p>Redesigned from scratch and completely revised.</p>
      <div>
        <Bag />
        <p>COMPRAR</p>
      </div>
    </ShopBoxConteiner>
  );
}

export default ShopBox;
