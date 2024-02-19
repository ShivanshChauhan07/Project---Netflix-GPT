import React, { useEffect, useRef, useState } from "react";
import validateForm from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Form = ({ toggle, setToggle, show, setShow }) => {
  const [errorMessage, setErrormessage] = useState(null);
  const [emailError, setEmailerror] = useState(false);
  const [passwordError, setPassworderror] = useState(false);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const rePassword = useRef(null);
  const name = useRef("");

  const messageTimer = () => {
    setTimeout(() => {
      setEmailerror(false);
      setPassworderror(false);
      setErrormessage(null);
    }, 5000);
  };

  useEffect(() => {
    messageTimer();
  }, [emailError, passwordError, errorMessage]);

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="gap-5 flex flex-col w-full"
      >
        <h1 className="text-4xl font-bold">{toggle ? "Sign Up" : "Sign In"}</h1>
        {toggle && (
          <input
            className="p-2 h-12 bg-inherit border border-slate-50 rounded-md"
            type="text"
            placeholder="Enter Your Name"
            ref={name}
          />
        )}
        <input
          className="p-2 h-12 bg-inherit border border-slate-50 rounded-md"
          type="text"
          placeholder="Email or Phone Number"
          ref={email}
        />

        <p className="text-red-600 ">{emailError && "Email ID is not valid"}</p>

        <input
          className="p-2 h-12  bg-inherit border border-slate-50 rounded-md"
          type={show ? "text" : "password"}
          placeholder="Password"
          ref={password}
        />

        <p className="text-red-600 ">
          {passwordError && "Password is not valid"}
        </p>
        {toggle && (
          <>
            <input
              className="p-2 h-12 bg-inherit border border-slate-50 rounded-md"
              type="password"
              placeholder="Re-enter Your Password"
              ref={rePassword}
            />
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          </>
        )}
        <button
          className="bg-red-600 h-12 rounded-md text-lg font-medium text-center hover:brightness-125"
          onClick={() => {
            const message = validateForm(
              email.current.value,
              password.current.value,
              setEmailerror,
              setPassworderror
            );

            if (emailError || passwordError) return;

            if (toggle) {
              if (password.current.value !== rePassword.current.value) {
                setErrormessage("Password doesn't match.");
                return;
              }
            }

            // sign up logic here
            if (toggle) {
              createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
              )
                .then((userCredential) => {
                  // Signed up
                  const user = userCredential.user;
                  updateProfile(user, {
                    displayName: "Shivansh Chauhan",
                    photoURL: "https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg",
                  })
                    .then(() => {
                      const { uid, email, displayName, photoURL } =
                        auth.currentUser;
                      dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      );
                    })
                    .catch((error) => {
                      setErrormessage(error);
                    });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorGist = error.message;
                  setErrormessage(errorGist);
                  // ..
                });
            }
            // sign in logic here.
            else if (password.current.value.length !== 0) {
              signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
              )
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  updateProfile(user, {
                    displayName: "Shivansh Chauhan",
                    photoURL: "https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg",
                  })
                    .then(() => {
                      const { uid, email, displayName, photoURL } =
                        auth.currentUser;
                      dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      );
                    })
                    .catch((error) => {
                      setErrormessage(error);
                    });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorGist = error.message;
                  console.log(errorCode);
                  setErrormessage(errorGist);
                });
            }
            password.current.value = "";
            setShow(!show);
          }}
        >
          {toggle ? "Sign up" : "Sign in"}
        </button>
        {!toggle && (
          <button className=" h-12 rounded-md text-lg font-medium text-center">
            Forgot password?
          </button>
        )}
        <p
          className="text-white p-2 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle
            ? "Already Registered ? Sign in Now."
            : "New to Netflix? Sign up Now."}
        </p>
      </form>
    </>
  );
};

export default Form;
