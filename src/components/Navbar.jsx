import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Weather</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.freepik.com/free-vector/illustrated-business-person-meditating_52683-60757.jpg?w=900&t=st=1679715027~exp=1679715627~hmac=8ee8b97b92c48d766d5083defa7fe08c603a4463af6601a4937f525b26d15006" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
