import React from "react";
import mainImage from "../assets/image/Group 59.svg";

function GetStart() {
  return (
    <div className=" flex bg-[#F7F6F1] h-screen justify-center">
      {/* top line */}
      <div className="absolute w-full mt-8 px-14">
      <hr className="h-px border-0 bg-gray-700 mb-1"/>
      <div className="flex justify-between">
      <p className="text-[#406C64] font-semibold">You</p>
      <p className="text-[#406C64] font-semibold">Connected</p>
      <p className="text-[#406C64] font-semibold">World</p>
      </div>
      </div>
      {/* main Content */}
      {/* <div className="self-center flex h-2/3">
        <div className="w-96 h-full rounded-full bg-[#24272C] z-40"></div>
        <div className="w-96 h-full rounded-full bg-[#406C64] relative z-30 right-10"></div>
        <div className="w-96 h-full rounded-full bg-blue-500 relative z-20 right-20"></div>
      </div> */}
      <div className="self-center relative ">
        <img className="" src={mainImage} alt="" />
        <a href="/login" className="absolute bottom-44 left-14 bg-[#D2F268] px-20 py-3 rounded-full text-2xl font-semibold">GET START</a>
      </div>
      {/* Bottom line */}
      <div className="absolute w-full mt-12 px-14 bottom-8">
      <p className="text-end text-[#406C64] font-semibold mb-1">2023</p>
      <hr className="h-px border-0 bg-gray-700"/>
      </div>
    </div>
  );
}

export default GetStart;
