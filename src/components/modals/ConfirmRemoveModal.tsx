import React from "react";
import "../../styles/modals.scss";
import DefaultModal from "./DefaultModal";
import { useRemoveProductMutation } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../redux/slices/modalSlice";

const ConfirmRemoveModal = (props: any) => {
  const productId = useSelector((state: any) => state.modal.data);
  const dispatch = useDispatch();
  const [removeProduct, { isLoading }] = useRemoveProductMutation();

  const handleCancel = () => {
    dispatch(showModal({ modal: "ConfirmRemoveModal", isVisible: false }));
  };

  const handleConfirmRemove = async () => {
    try {
      const deletedProduct = await removeProduct(productId).unwrap();
      console.log(`Product ${JSON.stringify(deletedProduct)} has been deleted`);
      dispatch(showModal({ modal: "ConfirmRemoveModal", isVisible: false }));
    } catch (error) {
      console.error("Could not delete the product: ", error);
    }
  };

  const body = (
    <>
      <p className="confirm-text">
        Are you sure you want to remove the selected product?
      </p>
    </>
  );

  return (
    <div className="blur-bg" onClick={handleCancel}>
      <DefaultModal
        title="Remove product"
        body={body}
        onClickOk={handleConfirmRemove}
        onClickCancel={handleCancel}
      />
    </div>
  );
};

export default ConfirmRemoveModal;
