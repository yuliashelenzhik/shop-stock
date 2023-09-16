import React from "react";
import DefaultModal from "./DefaultModal";

const RegisterModal = (props: any) => {
  const handleSignup = () => {
    console.log("Sign up");
  };
  const body = (
    <>
      <input type="email" placeholder="Email*" />
      <input type="text" placeholder="Username*" />
      <input type="text" placeholder="Password*" />
      <input type="text" placeholder="Confirm password*" />
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Phone" />
    </>
  );
  return (
    <div>
      <DefaultModal
        title="Sign up"
        body={body}
        button="Sign up"
        onClickOk={handleSignup}
        switchModal={props.switchModal}
      />
    </div>
  );
};

export default RegisterModal;
