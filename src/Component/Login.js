import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg"
        />
      </div>
      <form className="bg-black absolute p-12 my-36 mx-auto left-0 right-0 w-[500px] text-white rounded-xl bg-opacity-85">
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 rounded-md w-[350px] bg-transparent border placeholder:text-white"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 m-2 rounded-md w-[350px] bg-transparent border placeholder:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 rounded-md w-[350px] bg-transparent border placeholder:text-white"
        />
        <button className="bg-red-600 rounded-md w-[350px] p-2 m-2 font-semibold text-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
