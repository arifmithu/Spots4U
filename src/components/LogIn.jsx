import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const LogIn = () => {
  const { signInUser } = useContext(AuthContext);
  return (
    <div className="mx-5 lg:mx-[80px] mt-3 lg:mt-10 bg-red-300 rounded-lg mb-5 lg:mb-14">
      <h1>Please Log In !</h1>
      <form></form>
    </div>
  );
};

export default LogIn;
