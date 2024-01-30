import React from "react";

const Form = ({ toggle, setToggle }) => {
  return (
    <>
      <form className="gap-5 flex flex-col ">
        <h1 className="text-4xl font-bold">{toggle ? "Sign Up" : "Sign In"}</h1>
        {toggle && (
          <input
            className="p-2 h-12 bg-inherit border border-slate-50 rounded-md"
            type="text"
            placeholder="Enter Your Name"
          />
        )}
        <input
          className="p-2 h-12 bg-inherit border border-slate-50 rounded-md"
          type="text"
          placeholder="Email or Phone Number"
        />
        <input
          className="p-2 h-12 bg-inherit border border-slate-50 rounded-md"
          type="password"
          placeholder="Password"
        />
        {toggle && (
          <input
            className="p-2 h-12 bg-inherit border border-slate-50 rounded-md"
            type="password"
            placeholder="Re-enter Your Password"
          />
        )}
        <button className="bg-red-600 h-12 rounded-md text-lg font-medium text-center hover:brightness-125">
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
