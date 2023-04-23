import React from "react";
import Bookimg from "../assets/image/book-login.png";
import Logo from "../assets/image/logo-darkgreen.png";

function Login() {
  return (
    <div className=" flex bg-[#F7F6F1]">
      {/* left side */}
      <div className="w-full">
        {/* img book */}
        <img src={Bookimg} alt="" />
      </div>

      {/* right side */}
      <div className=" w-full flex flex-col justify-center items-center">
        {/* Logo */}
        <img src={Logo} alt="" />
        <p className=" text-[#406C64]">Hi, welcome back !</p>

        {/* input */}
        <div className=" flex flex-col">
          {/* email */}
          <p>Email</p>
          <input type="text" className=" border border-[#406C64] rounded-xl" />

          {/* password */}
          <p>Password</p>
          <input
            type="password"
            className=" border border-[#406C64] rounded-xl"
          />

          {/* button */}
          <button className=" bg-[#406C64] rounded-xl text-[#ffff]">
            LOGIN
          </button>
          <div>
            <span>Don’t have an account? </span>
            <a href="" to="">
              SIGN UP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
