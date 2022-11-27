import React from "react";
import Empty from "./ShopBoxEmptyStyle";

const loadingCarts = ["", "", "", "", "", "", "", ""];

function ShopBoxEmpty() {
  return (
    <>
      {loadingCarts.map((value, index) => (
        <Empty>
          <div />
        </Empty>
      ))}
    </>
  );
}
export default ShopBoxEmpty;
