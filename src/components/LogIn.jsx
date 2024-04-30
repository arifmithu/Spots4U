import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { FaRegEye, FaRegEyeSlash, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

const LogIn = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const location = useLocation();
  console.log("inside location", location);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire("Something went wrong ! Try again.");
      });
  };
  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire("Something went wrong ! Try again.");
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");
    const email = e.target.email.value;
    const password = e.target.password.value;
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

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast("Log in successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegisterError(errorMessage);
        toast("Invalid Email or Password");
      });
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-red-500">Login now!</h1>
        </div>
        <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="relative form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <span className="absolute right-5 top-14">
                {showPassword ? (
                  <FaRegEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-red-500"
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-red-500"
                  />
                )}
              </span>
              {registerError && <p className="text-red-600">{registerError}</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <input type="submit" value="Log In" className="btn btn-primary" />
          </form>
          <p className="mx-auto mb-2 text-green-500 font-bold">Log In with :</p>
          <div className="flex gap-3 mx-auto mb-4">
            <FcGoogle
              onClick={handleGoogleLogIn}
              className="p-1 text-6xl bg-gray-300 border rounded-lg"
            />
            <FaGithub
              onClick={handleGithubLogIn}
              className="p-1 text-6xl bg-gray-300 border rounded-lg"
            />
          </div>

          <p className="mx-auto mb-5">
            <span className="text-green-500">New here ?</span>{" "}
            <span className="text-blue-500 hover:text-green-500">
              <NavLink to={"/register"}>Register Now!</NavLink>
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
