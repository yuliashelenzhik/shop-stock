import React from "react";
import "../styles/productCard.scss";
import { ReactComponent as RemoveIcon } from "../assets/icons/trash-delete-bin.svg";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../redux/slices/modalSlice";

const ProductCard = (props: any) => {
  const dispatch = useDispatch();

  function truncate(string: string) {
    return string.length > 30 ? string.substring(0, 31) : string;
  }
  const toggleFullDescription = () => {
    console.log("toggleFullDescription");
  };

  const removeItem = () => {
    console.log(props.product.id);
    dispatch(
      showModal({
        modal: "ConfirmRemoveModal",
        data: props.product.id,
        isVisible: true,
      })
    );
    console.log("Remove");
  };

  return (
    <div className="product-card">
      <p className="prod-remove" onClick={removeItem}>
        <RemoveIcon />
      </p>
      <img src={props.product.image} alt={props.product.title} />
      <h3>{props.product.title}</h3>
      <p>
        {truncate(props.product.description)}
        {props.product.description.length > 30 ? (
          <span onClick={toggleFullDescription}>...</span>
        ) : (
          ""
        )}
      </p>
      <p className="prod-detail">{props.product.category}</p>
      <p className="prod-detail">{props.product.price}€</p>
    </div>
  );
};

export default ProductCard;
