import React, { useState } from "react";
import Bookimg from "../assets/image/book-login.png";
import Logo from "../assets/image/logo-darkgreen.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  function SignupFunction() {
    axios
      .put(`${path}/user`, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        password1: password1,
        password2: password2,
      })
      .then((res) => {
        if (res.data.length != 0) {
          localStorage.setItem("userid", res.data);
          router("/login");
        }
      })
      .catch();
  }

  return (
    <div className=" flex bg-[#F7F6F1] h-screen">
      {/* top line */}
      <div className="absolute w-full mt-8 px-14">
        <hr className="h-px border-0 bg-gray-700 mb-1" />
        <p className="text-[#406C64] font-semibold">Lectury</p>
      </div>
      {/* left side */}
      <div className=" w-1/2 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="GroupForm">
          <img src={Logo} alt="" />
          <p className=" text-[#406C64] text-xl ml-4 mb-8">
            Create an account to get start !
          </p>

          {/* input */}
          <div className=" flex flex-col">
            {/* name */}
            <p className="text-[#406C64] text-lg">First Name</p>
            <input
              type="text"
              className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />
            <p className="text-[#406C64] text-lg">Last Name</p>
            <input
              type="text"
              className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
            {/* email */}
            <p className="text-[#406C64] text-lg">Email</p>
            <input
              type="text"
              className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            {/* phone */}
            <p className="text-[#406C64] text-lg">Phone</p>
            <input
              type="phone"
              className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            {/* password */}
            <p className="text-[#406C64] text-lg">Password</p>
            <input
              type="password"
              className=" border border-[#406C64] rounded-2xl bg-transparent mb-6 px-4 py-1.5"
              onChange={(event) => {
                setPassword1(event.target.value);
              }}
            />
            {/*Confirm password */}
            <p className="text-[#406C64] text-lg">Confirm Password</p>
            <input
              type="password"
              className=" border border-[#406C64] rounded-2xl bg-transparent mb-10 px-4 py-1.5"
              onChange={(event) => {
                setPassword2(event.target.value);
              }}
            />

            {/* button */}
            <button
              className=" bg-[#406C64] rounded-2xl text-[#ffff] mb-6 py-1.5"
              onClick={() => {
                SignupFunction();
              }}
            >
              SIGN UP
            </button>
            <div className="text-center">
              <span className="text-lg">Already have account ? </span>
              <Link to="/login" className="text-[#406C64] font-semibold">
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}

      <div className="h-screen w-1/2">
        {/* img book */}
        <img src={Bookimg} alt="" className="w-full h-full" />
      </div>

      {/* Bottom line */}
      <div className="absolute w-full mt-12 px-14 bottom-8">
        <p className="text-[#406C64] font-semibold mb-1">2023</p>
        <hr className="h-px border-0 bg-gray-700" />
      </div>
    </div>
  );
}

export default Register;
