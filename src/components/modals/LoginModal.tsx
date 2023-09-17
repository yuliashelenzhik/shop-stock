import React, { useState } from "react";
import DefaultModal from "./DefaultModal";
import { useLoginMutation } from "../../api/usersApi";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../redux/slices/authSlice";
import { showModal } from "../../redux/slices/modalSlice";

const LoginModal = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const credentials = { username, password };
      const response = await login(credentials).unwrap();
      dispatch(setAuthenticated(true));
      localStorage.setItem("authToken", response.token);
      dispatch(showModal({ modal: "LoginModal", isVisible: false }));
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };
  const goToRegister = () => {
    dispatch(showModal({ modal: "LoginModal", isVisible: false }));
    dispatch(showModal({ modal: "RegisterModal", isVisible: true }));
  };

  const body = (
    <div className="login-body">
      <input
        type="text"
        placeholder="Username"
        value={username}
        autoComplete="off"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
  return (
    <div>
      <DefaultModal
        title="Log in"
        body={body}
        button="Log in"
        switchModal="Sign up"
        onClickOk={handleLogin}
        onSwitchModal={goToRegister}
      />
    </div>
  );
};

export default LoginModal;
