import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Down } from "../utils/icons";

const Header = () => {
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className=" flex justify-between bg-gradient-to-b from-black w-full p-4">
      <div>
        <img
          className="w-44 h-12"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
      </div>
      {user && (
        <div className="">
          <div className="my-auto  flex">
            <img
              className="rounded-full w-14 h-14"
              src={user.photoURL}
              alt="logo"
            />
            <div
              className="text-white ml-2 my-auto cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            >
              <Down />
            </div>
          </div>
          <div
            className={`absolute w-2/12  transition-[height] duration-1000 ${
              dropDown ? "h-24" : "h-0"
            } overflow-hidden right-4 text-right font-medium text-sm cursor-pointer shadow-lg shadow-slate-300 `}
          >
            <ul>
              <li className="my-2 px-2 border-b-2 border-slate-50 hover:text-orange-400 hover:bg-[#f2f2f2]">
                Home
              </li>
              <li className="my-2 px-2 border-b-2 border-slate-50 hover:text-orange-400 hover:bg-[#f2f2f2]">
                Settings
              </li>
              <li
                className="my-2 px-2 border-b-2 border-slate-50 hover:text-orange-400 hover:bg-[#f2f2f2]"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      dispatch;
                      navigate("/");
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
              >
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
