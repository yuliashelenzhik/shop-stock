import React from "react";
import "../../styles/modals.scss";

const DefaultModal = (props: any) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (props.onClickOk) {
      props.onClickOk();
    }
  };
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h3 className="modal-header">{props.title ?? DefaultModal}</h3>
      <form onSubmit={handleSubmit}>
        <div className={props.wide ? "modal-body modal-wide" : "modal-body"}>
          {props.body ?? ""}
        </div>
        <div className="modal-buttons">
          <div className="btns-ok-cancel">
            <button className="ok-btn" onClick={props.onClickOk} type="submit">
              {props.button ?? "Ok"}
            </button>
            {props.onClickCancel && <button className="ok-btn">Cancel</button>}
          </div>
          {props.switchModal && (
            <button className="switch-link" onClick={props.onSwitchModal}>
              {props.switchModal ?? "Log in"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DefaultModal;
