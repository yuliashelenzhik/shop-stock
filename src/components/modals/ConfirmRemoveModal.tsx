import React from "react";
import "../../styles/modals.scss";
import DefaultModal from "./DefaultModal";
import { useRemoveProductMutation } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../redux/slices/modalSlice";
import { hideToast, showToast } from "../../redux/slices/toastSlice";

const ConfirmRemoveModal = (props: any) => {
  const productId = useSelector((state: any) => state.modal.data);
  const dispatch = useDispatch();
  const [removeProduct] = useRemoveProductMutation();

  const handleCancel = () => {
    dispatch(showModal({ modal: "ConfirmRemoveModal", isVisible: false }));
  };

  const handleConfirmRemove = async () => {
    try {
      const response: any = await removeProduct(productId).unwrap();
      if (response) {
        dispatch(
          showToast({
            message: "The product has been removed",
            type: "success",
          })
        );
        setTimeout(() => {
          dispatch(hideToast());
        }, 5000);
        dispatch(showModal({ modal: "ConfirmRemoveModal", isVisible: false }));
      }
    } catch (error) {
      console.error(error);
      dispatch(
        showToast({
          message: "There has been a problem removing the product",
          type: "error",
        })
      );
      setTimeout(() => {
        dispatch(hideToast());
      }, 5000);
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
