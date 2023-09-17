import React from "react";
import DefaultModal from "./DefaultModal";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/slices/modalSlice";

const RegisterModal = (props: any) => {
  const dispatch = useDispatch();

  const handleSignup = () => {
    console.log("Sign up");
  };

  const goToLogin = () => {
    dispatch(showModal({ modal: "RegisterModal", isVisible: false }));
    dispatch(showModal({ modal: "LoginModal", isVisible: true }));
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
        switchModal="Login"
        onSwitchModal={goToLogin}
      />
    </div>
  );
};

export default RegisterModal;
