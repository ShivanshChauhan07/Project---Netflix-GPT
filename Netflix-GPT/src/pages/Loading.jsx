import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Loading = () => {
  const location = useLocation();
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    navigate(location.state);
  }, 3000);

  return <div>Loading...</div>;
};

export default Loading;
