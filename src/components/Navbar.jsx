import React from "react";
import Logo from "../assets/image/logo-lightgreen.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchLogo from "../assets/image/black-search-icon.svg"
import GreenProfile from "../assets/image/white-green-profile-icon.svg"

function Navbar(){
    const router = useNavigate();
    return(
        <div
          className="bg-[#24272C] mx-20 rounded-full px-28 py-3 flex justify-between"
        >
          <img src={Logo} alt="" className="cursor-pointer" onClick={() => {
            router("/home");
          }}/>
          {/* Search */}
          <div className="flex justify-center items-center">
          <div className="relative">
          <input id="thisone" className="bg-[#D9D9D9] rounded-full py-1 pl-12 mr-6">
          </input>
          <label
            htmlFor="thisone"
            className="absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <img src={SearchLogo} alt="search" className="w-" />
          </label>
          </div>
          <img src={GreenProfile} alt="" />
          </div>
        </div>
    )
}

export default Navbar;