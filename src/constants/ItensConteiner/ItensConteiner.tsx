import * as React from "react";
import { BodyConteiner, ProductBox } from "./ItensConteinerStyle";


function Body({children}: any) {
  return (
    <BodyConteiner>
      <ProductBox>
        {children}
      </ProductBox>
    </BodyConteiner>
  );
}

export default Body;
