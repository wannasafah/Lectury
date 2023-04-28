import React, { useState } from "react";
import Bookimg from "../assets/image/book-login.png";
import Logo from "../assets/image/logo-darkgreen.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" flex bg-[#F7F6F1] h-screen">
      {/* top line */}
      <div className="absolute w-full mt-8 px-14">
        <hr className="h-px border-0 bg-gray-700 mb-1" />
        <p className="text-end text-[#406C64] font-semibold">Lectury</p>
      </div>
      {/* left side */}
      <div className="h-screen w-1/2">
        {/* img book */}
        <img src={Bookimg} alt="" className="w-full h-full" />
      </div>

      {/* right side */}
      <div className=" w-1/2 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="GroupForm">
          <img src={Logo} alt="" />
          <p className=" text-[#406C64] text-end text-xl mr-4">
            Hi, welcome back !
          </p>
          {/* input */}
          <div className=" flex flex-col">
            {/* email */}
            <p className="text-[#406C64] text-lg">Email</p>
            <input
              type="text"
              className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"
              style={{}}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />

            {/* password */}
            <p className="text-[#406C64] text-lg">Password</p>
            <input
              type="password"
              className=" border border-[#406C64] rounded-2xl bg-transparent mb-16 px-4 py-1.5"
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />

            {/* button */}
            <button className=" bg-[#406C64] rounded-2xl text-[#ffff] mb-6 py-1.5">
              LOGIN
            </button>
            <div className="text-center">
              <span className="text-lg">Don’t have an account? </span>
              <a
                href="/register"
                to=""
                className="text-[#406C64] font-semibold"
              >
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom line */}
      <div className="absolute w-full mt-12 px-14 bottom-8">
        <p className="text-end text-[#406C64] font-semibold mb-1">2023</p>
        <hr className="h-px border-0 bg-gray-700" />
      </div>
    </div>
  );
}

export default Login;
