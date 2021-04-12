import React from "react";
import styled from 'styled-components';

const ItemStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
`;

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img src={product?.images[0]?.src} alt={product.name} />
      <p>{product.title}</p>
    </ItemStyles>
  );
}
