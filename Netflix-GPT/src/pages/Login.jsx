import React, { useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const Login = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="border border-black h-screen bg-no-repeat bg-cover brightness-75 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')]">
      <div className="absolute top-7 left-44 brightness-200 contrast-200 saturate-200 ">
        <Header />
      </div>
      <div className="bg-black bg-opacity-80 p-10 rounded-md  text-white w-1/4 mx-auto my-[10%] min-h-[50%]">
        <Form toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
};

export default Login;
