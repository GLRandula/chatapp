import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {

  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 bg-base-200 text-primary-content">
      <div className="containerWrap navbar bg-base-200">
        <div className="flex-1">
          <a className="btn bg-base-200 text-xl">Instant-Chat</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
            {currentUser ? <button className="btn btn-outline btn-error" onClick={handleLogout}>Logout</button> : ""}
            </li>
          </ul>
        </div>
      </div>
    </div>

    // <div className="navbar fixed z-10 bg-neutral text-neutral-content">
    //   <div className="containerWrap flex justify-between">
    //     <a className="btn btn-ghost normal-case text-xl">instantChat</a>
    //     {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
    //   </div>
    // </div>
  );
};

export default Navbar;
