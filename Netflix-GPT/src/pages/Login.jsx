import React, { useState } from "react";
import Form from "../components/Form";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[800px] w-screen bg-no-repeat bg-cover brightness-75 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')]">
        {" "}
      </div>
      <div>
        <div className="relative z-10 bg-black flex bg-opacity-80 p-8 rounded-md  text-white w-[27%] mx-auto my-[10%] min-h-[50%]">
          <Form
            toggle={toggle}
            setToggle={setToggle}
            show={show}
            setShow={setShow}
          />
          <span
            className={`h-fit w-6 relative ${
              toggle ? "top-56" : "top-40"
            } left-3`}
          >
            <i
              className={
                show
                  ? "fa-regular fa-eye-slash cursor-pointer mx-auto"
                  : "fa-regular fa-eye cursor-pointer mx-auto"
              }
              onClick={() => setShow(!show)}
            ></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
