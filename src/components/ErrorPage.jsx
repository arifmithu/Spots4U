import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className=" h-lvh  justify-center flex flex-col items-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/9sfWY2G/blob-scene-haikei.png")',
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-8xl font-bold">
          4<span className="fill-slate-300">0</span>4
        </h1>
        <h3 className="text-4xl mb-5">Page not found</h3>
        <p className="w-[350px]">
          The page you are looking for might have been removed, had its name
          changed or temporarily unavailable.
        </p>
      </div>
      <div className="mt-20">
        <Link to={"/"}>
          <button className="btn btn-secondary">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
