import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/shopContext";
import Product from "./Product";

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
`;

export default function Recommended({ matches }) {
  const { fetchAllProducts, products } = useContext(ShopContext);

  /*useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);*/

  if (!products || products.length === 0) return <div>Loading ...</div>;

  let recommenedProds = [];
  for (let index = 0; index < 5; index++) {
    const rand = Math.floor(Math.random() * products.length);
    const element = products[rand];

    if (recommenedProds.some((q) => q === element)) {
    } else {
      recommenedProds = [...recommenedProds, element];
    }    
  }
  return (
    <div>
      <ProductsListStyles>
        {recommenedProds.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </ProductsListStyles>
    </div>
  );
}
