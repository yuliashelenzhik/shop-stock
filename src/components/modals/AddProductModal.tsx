import React from "react";
import DefaultModal from "./DefaultModal";
import "../../styles/mainScreen.scss";

const AddProductModal = () => {
  const body = (
    <>
      <input type="text" placeholder="Product title" />
      <input type="text" placeholder="Image" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Category" />
      <input type="number" placeholder="Price" />
    </>
  );
  return (
    <div className="blur-bg">
      <DefaultModal
        title="Add a product"
        body={body}
        onClickCancel={() => console.log("Cancel")}
      />
    </div>
  );
};

export default AddProductModal;
