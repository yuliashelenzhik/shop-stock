import React from "react";
import "../../styles/buttons.scss";

const DefaultButton = (props: any) => {
  return <button onClick={props.onClick}>{props.title ?? "Button"}</button>;
};

export default DefaultButton;
