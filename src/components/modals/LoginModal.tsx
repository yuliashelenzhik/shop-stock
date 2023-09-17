import React, { useState } from "react";
import DefaultModal from "./DefaultModal";
import { useLoginMutation } from "../../api/usersApi";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../redux/slices/authSlice";
// import { loginUser, setError, setToken } from "../../redux/slices/authSlice";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
// import { SerializedError } from "@reduxjs/toolkit";

const LoginModal = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError, error, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const credentials = { username, password };
      const response = await login(credentials).unwrap();
      dispatch(setAuthenticated(true));
      localStorage.setItem("authToken", response.token);
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  //   const handleLogin = async () => {

  //     try {
  //       const data = await login({
  //         username,
  //         password,
  //       });
  //       if (data) {
  //         console.log(data);
  //         //   dispatch(setToken(`Bearer ${data.token}`));
  //         // dispatch(setToken(`Bearer ${data?.token}`));
  //       }
  //     } catch (error: any) {
  //       dispatch(setError(error.message));
  //     }
  //   };

  //   const handleLogin = () => {
  //     console.log("Hi");
  //   };
  const body = (
    <div className="login-body">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
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
        // switchModal={props.sw}
      />
    </div>
  );
};

export default LoginModal;
