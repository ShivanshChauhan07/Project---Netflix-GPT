import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Down } from "../utils/icons";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="absolute top-0 z-30 right-0 flex justify-between bg-gradient-to-b from-black w-screen p-8 ">
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
            <i class="text-red-500  mr-24 my-auto hover:cursor-pointer text-3xl fa-solid fa-magnifying-glass"></i>
            <img className=" w-14 h-14" src={user.photoURL} alt="logo" />
            <div
              className="text-white ml-2 my-auto cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            >
              <Down />
            </div>
          </div>
          <div
            className={`absolute w-2/12 bg-white transition-[height] duration-1000 ${
              dropDown ? "h-24" : "h-0"
            } overflow-hidden right-4 text-right font-medium text-sm cursor-pointer shadow-lg shadow-slate-500 `}
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
                      setDropDown(!dropDown);
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
