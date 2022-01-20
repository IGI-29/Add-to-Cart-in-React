import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          IncQua={props.IncQua}
          DecQua={props.DecQua}
          index={i}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>No Products Exists in the Cart</h1>
  );
}
