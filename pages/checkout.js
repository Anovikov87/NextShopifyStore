import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";

export default function checkout() {
  const {
    removeLineItem,
    addItemCheckout,
    fetchAllProducts,
    products,
    checkout,
  } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products || products.length === 0) return <div>Loading ...</div>;

  let checkoutIds = [];
  for (let index = 0; index < 5; index++) {
    const rand = Math.floor(Math.random() * products.length);
    const element = products[rand];

    if (checkoutIds.some((q) => q === element)) {
    } else {
      checkoutIds = [...checkoutIds, element.variants[0].id];
    }
    //console.log(checkoutIds);
  }
  console.log(checkout);
  async function AddItemsToCheck() {
    console.log("uds");
    console.log(checkoutIds);
    for (let index = 0; index < checkoutIds.length; index++) {
      await addItemCheckout(checkoutIds[index], 1);
    }
    console.log(checkout);
  }

  async function RemoveItemsFromCheck(){
    for (let index = 0; index < checkout.lineItems.length; index++) {
      await removeLineItem(checkout.lineItems[index].id);
    }
  }
  return (
    <div>
      Checkout page
      <button onClick={AddItemsToCheck}> Add items to checkout</button>
      <button onClick={RemoveItemsFromCheck}> Remove items from checkout</button>
      {checkout?.webUrl && <Link href={checkout.webUrl}>CHECKOUT</Link>}
    </div>
  );
}
