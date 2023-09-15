import React from "react";

const DefaultModal = (props: any) => {
  return (
    <div className="modal">
      <h3 className="modal-header">{props.title ?? DefaultModal}</h3>
      <div className="modal-body">{props.body ?? ""}</div>
      <div className="modal-buttons">
        <button>{props.btnLeft ?? "left button"}</button>
        <button>{props.btnRight ?? "right button"}</button>
      </div>
    </div>
  );
};

export default DefaultModal;
