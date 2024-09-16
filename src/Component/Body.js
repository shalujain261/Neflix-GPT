import React, { useEffect } from "react";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login2 from "./Login2";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login2 />,
  },
  {
    path: "/browse",
    element: <Browser />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // for sign in / sign up
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      }
      // for sign-out
      else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
