import React from "react";
import {
  ShopCardConteiner,
  ExcludeButton,
  AddOrRemoveButton,
} from "./ShopCardBoxStyle";
import AppleWatchMini from "../../assets/Images/appleWatchMini.png";

function ShopCardBox() {
  return (
    <ShopCardConteiner>
      <ExcludeButton>
        <p>X</p>
      </ExcludeButton>
      <img src={AppleWatchMini} />
      <p>Apple Watch Series 4 GPS</p>
      <AddOrRemoveButton>
        <div>-</div> <div>0</div> <div>+</div>
      </AddOrRemoveButton>
      <span>R$399</span>
    </ShopCardConteiner>
  );
}

export default ShopCardBox;
