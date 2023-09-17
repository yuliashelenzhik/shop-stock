import React, { useState } from "react";
import DefaultModal from "./DefaultModal";
import "../../styles/mainScreen.scss";
import { useAddProductMutation } from "../../api/api";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/slices/modalSlice";

const AddProductModal = (props: any) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [addProduct] = useAddProductMutation();
  const dispatch = useDispatch();

  const handleAddProduct = async () => {
    try {
      const productData = { title, image, description, category, price };
      const response = await addProduct(productData).unwrap();
      console.log(response);
      dispatch(showModal({ modal: "AddProductModal", isVisible: false }));
    } catch (error) {
      console.error("Couln't add new product: ", error);
    }
  };

  const handleCancel = () => {
    dispatch(showModal({ modal: "AddProductModal", isVisible: false }));
  };

  const body = (
    <>
      <input
        type="text"
        placeholder="Product title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
    </>
  );
  return (
    <div className="blur-bg" onClick={handleCancel}>
      <DefaultModal
        title="Add a new product"
        body={body}
        onClickOk={handleAddProduct}
        onClickCancel={handleCancel}
      />
    </div>
  );
};

export default AddProductModal;
