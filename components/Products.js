import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/shopContext";
import Product from "./Product";

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading ...</div>;
  console.log(products);
  return (
    <div>
      <ProductsListStyles>
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </ProductsListStyles>
    </div>
  );
}
