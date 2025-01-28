import React from "react";
import Logo from "./Logo";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
const Header = () => {
  return (
    <header className="h-18 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Logo w={100} h={100}></Logo>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-lg border border-gray-100 rounded-full focus-within:shadow-md">
          <input
            placeholder="Search product here"
            className="px-4 w-full outline-none  "
          />
          <div className="cursor-pointer text-lg min-w-[50px] h-8 bg-red-700 hover:bg-red-500 flex items-center justify-center rounded-r-full">
            <IoSearchSharp className="text-white" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-2xl cursor-pointer">
            <FaUserCircle />
          </div>
          <div className="text-2xl cursor-pointer relative">
            <FaCartPlus />
            <div className="absolute bg-red-700 text-white  rounded-full p-1 w-5 h-5 flex items-center justify-center -top-2 -right-3">
                <p className="text-sm">0</p>
            </div>
          </div>
          <div className="ml-4 px-4 py-2 bg-red-700 rounded-full hover:bg-red-500"><p className="text-white font-semibold">Login</p></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
