import React, { useState } from "react";
import "../styles/productCard.scss";
import { ReactComponent as RemoveIcon } from "../assets/icons/trash-delete-bin.svg";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/slices/modalSlice";

const ProductCard = (props: any) => {
  const dispatch = useDispatch();
  const shortDescription = truncate(props.product.description);
  const [isDescOpen, setIsDescOpen] = useState(false);

  function truncate(string: string) {
    return string.length > 40 ? string.substring(0, 41) : string;
  }
  const toggleFullDescription = () => {
    setIsDescOpen(!isDescOpen);
  };

  const removeItem = () => {
    dispatch(
      showModal({
        modal: "ConfirmRemoveModal",
        data: props.product.id,
        isVisible: true,
      })
    );
  };

  return (
    <div className="product-card">
      <p className="prod-remove" onClick={removeItem}>
        <RemoveIcon />
      </p>
      <img src={props.product.image} alt={props.product.title} />
      <h3>{props.product.title}</h3>
      {isDescOpen ? (
        <p className="description" onClick={toggleFullDescription}>
          {props.product.description}
        </p>
      ) : (
        <p className="description" onClick={toggleFullDescription}>
          {shortDescription}{" "}
          {props.product.description.length > 40 ? <span>...</span> : ""}
        </p>
      )}

      <p className="prod-detail">{props.product.category}</p>
      <p className="prod-detail">{props.product.price}€</p>
    </div>
  );
};

export default ProductCard;
