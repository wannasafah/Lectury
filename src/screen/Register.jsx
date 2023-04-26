import React from "react";
import Bookimg from "../assets/image/book-login.png";
import Logo from "../assets/image/logo-darkgreen.png";

function Register() {
  return (
    <div className=" flex bg-[#F7F6F1] h-screen">
      {/* top line */}
      <div className="absolute w-full mt-8 px-14">
      <hr className="h-px border-0 bg-gray-700 mb-1"/>
      <p className="text-[#406C64] font-semibold">Lectury</p>
      </div>
      {/* left side */}
      <div className=" w-1/2 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="GroupForm">
        <img src={Logo} alt="" />
        <p className=" text-[#406C64] text-xl ml-4 mb-10">Create an account to get start !</p>
        {/* input */}
        <div className=" flex flex-col">
            {/* name */}
          <p className="text-[#406C64] text-lg">Name</p>
          <input type="text" className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"/>
          {/* email */}
          <p className="text-[#406C64] text-lg">Email</p>
          <input type="text" className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"/>
          {/* phone */}
          <p className="text-[#406C64] text-lg">Phone</p>
          <input type="phone" className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"/>
          {/* password */}
          <p className="text-[#406C64] text-lg">Password</p>
          <input
            type="password"
            className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"
          />
          {/*Confirm password */}
          <p className="text-[#406C64] text-lg">Confirm Password</p>
          <input
            type="password"
            className=" border border-[#406C64] rounded-2xl bg-transparent mb-16 px-4 py-1.5"
          />

          {/* button */}
          <button className=" bg-[#406C64] rounded-2xl text-[#ffff] mb-6 py-1.5">
            Register
          </button>
          <div className="text-center">
            <span className="text-lg">Already have account ? </span>
            <a href="/login" to="" className="text-[#406C64] font-semibold">
              LOGIN
            </a>
          </div>
        </div>
        </div>
      </div>
      {/* right side */}

      <div className="h-screen w-1/2">
        {/* img book */}
        <img src={Bookimg} alt="" className="w-full h-full"/>
      </div>

      {/* Bottom line */}
      <div className="absolute w-full mt-12 px-14 bottom-8">
      <p className="text-[#406C64] font-semibold mb-1">2023</p>
      <hr className="h-px border-0 bg-gray-700"/>
      </div>
    </div>
  );
}

export default Register;
