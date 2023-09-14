import React from "react";
import "../styles/productCard.scss";

const ProductCard = (props: any) => {
  console.log(props.product);
  return (
    <div className="product-card">
      <img src={props.product.image} alt={props.product.title} />
      <h3>{props.product.title}</h3>
      <p>{props.product.description}</p>
      <p>{props.product.category}</p>
      <p>{props.product.price}</p>
    </div>
  );
};

export default ProductCard;
