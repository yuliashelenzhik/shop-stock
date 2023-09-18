import React from "react";
import "../../styles/toasts.scss";

const DefaultToast = (props: any) => {
  return (
    <div className={props.type}>
      <p>{props.message ?? "Success"}</p>
    </div>
  );
};

export default DefaultToast;
