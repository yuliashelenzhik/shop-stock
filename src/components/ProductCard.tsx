import React from "react";
import "../styles/productCard.scss";

const ProductCard = (props: any) => {
  console.log(props.props);
  return (
    <div key={props.props.id} className="product-card">
      <img src={props.props.image} alt={props.props.title} />
      <h3>{props.props.title}</h3>
    </div>
  );
};

export default ProductCard;
