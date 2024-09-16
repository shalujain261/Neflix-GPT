import React, { useRef, useState } from "react";
import { checkValidate } from "../Utils/CheckValidation";
import Header from "./Header";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login2 = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
 
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const nameValue = name.current?.value || "";
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const message = checkValidate( emailValue, passwordValue );
    // console.log(message);
    setErrorMessage(message);

    if (message) return;

    //Sign in/ sign up logic

    if (!isSignInForm) {
      // sign up user

      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue, photoURL: "https://cdn-icons-png.flaticon.com/512/21/21104.png"
          }).then(() => {

            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate('/browse');
          }).catch((error) => {
            setErrorMessage(error.message);
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          setErrorMessage(errorCode + errorMessage)
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage)
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        {/* // background image */}
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg"
        />
      </div>
      <form
        className="bg-black absolute p-12 my-36 mx-auto left-0 right-0 w-[500px] text-white rounded-xl bg-opacity-85"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 rounded-md w-[350px] bg-transparent border placeholder:text-white"
          />
        )}

        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="p-4 m-2 rounded-md w-[350px] bg-transparent border placeholder:text-white"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 m-2 rounded-md w-[350px] bg-transparent border placeholder:text-white"
        />
        <p className="text-red-600 font-semibold m-4">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="bg-red-600 rounded-md w-[350px] p-2 m-2 font-semibold text-lg"
        >
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

export default Login2;
