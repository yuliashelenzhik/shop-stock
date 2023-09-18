import React, { useEffect, useState } from "react";
import DefaultModal from "./DefaultModal";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/slices/modalSlice";
import { useRegisterMutation } from "../../api/api";
import { showToast, hideToast } from "../../redux/slices/toastSlice";

const RegisterModal = (props: any) => {
  const dispatch = useDispatch();
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [newUserData, setNewUserData] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: 0,
      zipcode: "",
    },
    phone: "",
  });
  const [register] = useRegisterMutation();

  const handleSignup = async (e: React.FormEvent) => {
    try {
      if (
        isValidEmail(newUserData.email) &&
        newUserData.email &&
        newUserData.password &&
        newUserData.username
      ) {
        const response = await register(newUserData).unwrap();
        console.log(response);
        dispatch(
          showToast({
            message: "A new user has been registered. Please log in now",
            type: "success",
          })
        );
        setTimeout(() => {
          dispatch(hideToast());
        }, 5000);
        goToLogin();
      } else {
        dispatch(
          showToast({
            message: "Please correctly fill in the necessary data",
            type: "error",
          })
        );
        setTimeout(() => {
          dispatch(hideToast());
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      dispatch(
        showToast({
          message: "There has been an error registering a new user",
          type: "error",
        })
      );
      setTimeout(() => {
        dispatch(hideToast());
      }, 5000);
    }
  };

  const goToLogin = () => {
    dispatch(showModal({ modal: "RegisterModal", isVisible: false }));
    dispatch(showModal({ modal: "LoginModal", isVisible: true }));
  };

  useEffect(() => {
    if (passwordCheck === passwordConfirm) {
      setNewUserData({ ...newUserData, password: passwordConfirm });
    }
  }, [passwordCheck, passwordConfirm]);

  function isValidEmail(email: string) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  const body = (
    <>
      <input
        type="email"
        placeholder="Email*"
        value={newUserData.email}
        onChange={(e) => {
          setNewUserData({ ...newUserData, email: e.target.value });
        }}
      />
      {!isValidEmail(newUserData.email) && newUserData.email.length > 0 && (
        <p className="validation-message">
          Please enter a valid email address.
        </p>
      )}
      <input
        type="text"
        placeholder="Username*"
        value={newUserData.username}
        onChange={(e) =>
          setNewUserData({ ...newUserData, username: e.target.value })
        }
      />
      <input
        type="password"
        autoComplete="off"
        placeholder="Password*"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
      />
      <input
        type="password"
        autoComplete="off"
        placeholder="Confirm password*"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      {passwordCheck !== passwordConfirm && passwordConfirm.length > 0 && (
        <p className="validation-message">Passwords don't match</p>
      )}

      <p className="contact-title">Name: </p>
      <input
        type="text"
        placeholder="First name"
        value={newUserData.name.firstname}
        onChange={(e) =>
          setNewUserData({
            ...newUserData,
            name: { ...newUserData.name, firstname: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Last name"
        value={newUserData.name.lastname}
        onChange={(e) =>
          setNewUserData({
            ...newUserData,
            name: { ...newUserData.name, lastname: e.target.value },
          })
        }
      />
      <p className="contact-title">Contact: </p>
      <input
        type="text"
        placeholder="City"
        value={newUserData.address.city}
        onChange={(e) =>
          setNewUserData({
            ...newUserData,
            address: { ...newUserData.address, city: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Street"
        value={newUserData.address.street}
        onChange={(e) =>
          setNewUserData({
            ...newUserData,
            address: { ...newUserData.address, street: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Number"
        value={newUserData.address.number}
        onChange={(e) =>
          setNewUserData({
            ...newUserData,
            address: { ...newUserData.address, number: Number(e.target.value) },
          })
        }
      />
      <input
        type="text"
        placeholder="Zipcode"
        value={newUserData.address.zipcode}
        onChange={(e) =>
          setNewUserData({
            ...newUserData,
            address: { ...newUserData.address, zipcode: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Phone"
        value={newUserData.phone}
        onChange={(e) =>
          setNewUserData({
            ...newUserData,
            phone: e.target.value,
          })
        }
      />
    </>
  );
  return (
    <div>
      <DefaultModal
        wide
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
