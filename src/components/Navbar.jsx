import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 text-primary-content">
      <div className="containerWrap navbar bg-base-200">
        <div className="flex-1">
          <a className="btn bg-base-200 text-xl">Instant-Chat</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
            <a className="btn btn-outline btn-error text-md">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
