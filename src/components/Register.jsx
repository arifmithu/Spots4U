import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet-async";
import auth from "../firebase/firebase.config";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const { user, createUser, setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have atleast one upper case letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Password should have atleast one lower case letter.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log("profile upadated");
          })
          .catch((error) => {
            console.log(error);
          });
        setRegisterSuccess("User created succesfully");
        toast("Registration succesful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegisterError(errorMessage);
        toast("Email already in use");
      });
  };
  return (
    <div className="w-full mt-10">
      <Helmet>
        <title>Spots4U | Register</title>
      </Helmet>
      <h1 className="mb-8 text-3xl font-bold text-center text-red-500">
        Please <span className="text-orange-500">Register</span>
      </h1>
      <div className="w-2/3 mx-auto">
        <form onSubmit={handleRegister}>
          <input
            className="w-full px-4 py-2 mb-3 border rounded bg-white"
            type="text"
            name="name"
            required
            placeholder="Your name"
          />{" "}
          <br />
          <input
            className="w-full px-4 py-2 mb-3 border rounded bg-white"
            type="text"
            name="photoURL"
            placeholder="Your photoURL"
          />{" "}
          <br />
          <input
            className="w-full px-4 py-2 border rounded bg-white"
            type="email"
            name="email"
            required
            placeholder="Your email"
          />{" "}
          <br />
          <input
            className="w-full px-4 py-2 mt-3 border rounded bg-white"
            type="password"
            name="password"
            required
            placeholder="Your password"
          />
          <br />
          <input
            className="w-full my-3 text-xl font-bold text-white btn btn-secondary"
            type="submit"
            value="Register"
          />
          <br />
          {registerError && <p className="text-red-600">{registerError}</p>}
          {registerSuccess && (
            <p className="text-green-600">{registerSuccess}</p>
          )}
          <div className="w-full text-lg font-bold text-center">
            <p>
              <span className="text-orange-500">Already have an account ?</span>{" "}
              <NavLink
                to={"/login"}
                className="ml-4 font-bold text-blue-500 hover:bg-gray-300 hover:rounded-lg hover:px-4 hover:py-2"
              >
                Log In !
              </NavLink>{" "}
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
