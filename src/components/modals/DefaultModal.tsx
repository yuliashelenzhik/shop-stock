import React from "react";
import "../../styles/modals.scss";

const DefaultModal = (props: any) => {
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h3 className="modal-header">{props.title ?? DefaultModal}</h3>
      <div className="modal-body">{props.body ?? ""}</div>
      <div className="modal-buttons">
        <div className="btns-ok-cancel">
          <button className="ok-btn" onClick={props.onClickOk}>
            {props.button ?? "Ok"}
          </button>
          {props.onClickCancel && (
            <button className="ok-btn" onClick={props.onClickCancel}>
              Cancel
            </button>
          )}
        </div>
        {props.switchModal && (
          <button className="switch-link">
            {props.switchModal ?? "Log in"}
          </button>
        )}
      </div>
    </div>
  );
};

export default DefaultModal;
