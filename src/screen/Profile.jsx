import React, { useState, useEffect } from "react";
import Logo from "../assets/image/logo-darkgreen.png";
import NoProfile from "../assets/image/no-profile.jpg";
import Edit from "../assets/image/edit-profile.svg";
import MailIcon from "../assets/image/mail-icon.svg";
import PhoneIcon from "../assets/image/phone-icon.svg";
import ImageInProfile from "../assets/image/imageinprofile.svg";
import LogoHeart from "../assets/image/logoHeart.svg";
import LogoBookMark from "../assets/image/logoBookMark.svg";
import LogoLogout from "../assets/image/logoLogout.svg";
import Book1 from "../assets/image/Book1.svg";
import Book2 from "../assets/image/Book2.svg";
import Book3 from "../assets/image/Book3.svg";
import Book4 from "../assets/image/Book4.svg";
import Book5 from "../assets/image/Book5.svg";
import Book6 from "../assets/image/Book6.svg";
import SmallHeart from "../assets/image/smallheartlogo.svg";
import SmallBookMarked from "../assets/image/smallbookmarklogo.svg";
import NextItems from "../assets/image/next-items.svg";
import PrevItems from "../assets/image/prev-items.svg";
import X from "../assets/image/x.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import path from "../../path";

function Profile() {
  const router = useNavigate();
  const [user, setUser] = useState();
  const [modal, setModal] = useState(false);
  const [modallogout, setModallogout] = useState(false);

  const [books, setBooks] = useState([
    {
      id: 0,
      title: "Book name",
      author: "Writer's name",
      bookImg: "Book1",
      isLiked: true,
      isBookMarked: true,
    },
    {
      id: 1,
      title: "Book name",
      author: "Writer's name",
      bookImg: "../assets/image/Book2.svg",
      isLiked: true,
      isBookMarked: true,
    },
    {
      id: 2,
      title: "Book name",
      author: "Writer's name",
      bookImg: "../assets/image/Book3.svg",
      isLiked: true,
      isBookMarked: true,
    },
    {
      id: 3,
      title: "Book name",
      author: "Writer's name",
      bookImg: "../assets/image/Book4.svg",
      isLiked: true,
      isBookMarked: true,
    },
    {
      id: 4,
      title: "Book name",
      author: "Writer's name",
      bookImg: "../assets/image/Book5.svg",
      isLiked: true,
      isBookMarked: true,
    },
    {
      id: 5,
      title: "Book name",
      author: "Writer's name",
      bookImg: "../assets/image/Book6.svg",
      isLiked: true,
      isBookMarked: true,
    },
  ]);

  useEffect(() => {
    axios
      .post(`${path}/getuser`, {
        id: localStorage.getItem("userid"),
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-[#F7F6F1] h-screen">
      {/* modal add lecture*/}
      {modal && (
        <div className=" absolute h-full w-full">
          <div className=" h-full absolute flex justify-center items-center w-full">
            <div className="w-full h-full absolute bg-[#24272C]  opacity-50"></div>
            <div className="bg-[#F7F6F1] w-[40%] z-50 rounded-xl p-28 flex justify-center flex-col relative">
              <img
                src={X}
                className=" w-7 absolute right-5 top-5 cursor-pointer"
                alt=""
                onClick={() => {
                  setModal(false);
                }}
              />
              <img src={Logo} className="w-[50%] mb-6" alt="" />

              <p className="mb-1">Title</p>
              <input
                type="text"
                className="w-full border border-[#406C64] rounded-2xl bg-transparent mb-4 px-4 py-1.5"
              />

              <p className="mb-1">Description</p>
              <textarea
                type="text"
                className="w-full border border-[#406C64] rounded-2xl bg-transparent mb-4 px-4 py-1.5"
              />

              <p className="mb-1">Upload File</p>
              <input className="" id="upfile" type="file" />
              {/* <label htmlFor="upfile">
          <button>Upload File</button>
        </label> */}

              <button
                className=" bg-[#406C64] rounded-2xl text-[#ffff] mt-4 py-1.5 w-full"
                onClick={() => {
                  SignupFunction();
                }}
              >
                Add Lecture
              </button>
            </div>
          </div>
        </div>
      )}
      {/* modal logout*/}
      {modallogout && (
        <div className=" absolute h-full w-full">
          <div className=" h-full absolute flex justify-center items-center w-full">
            <div className="w-full h-full absolute bg-[#24272C]  opacity-50"></div>
            <div className="bg-[#F7F6F1] w-[40%] z-50 rounded-xl p-20 flex justify-center flex-col relative">
              {/* <img
                src={X}
                className=" w-7 absolute right-5 top-5 cursor-pointer"
                alt=""
                onClick={() => {
                  setModal(false);
                }}
              /> */}
              <img src={Logo} className="w-[50%] mb-6" alt="" />
              {/* text */}
              <p className="mb-1 text-2xl">Are you sure you want to logout?</p>

              <div className=" grid grid-cols-2 gap-4 mt-6">
                <button
                  className=" bg-transparent border border-[#406C64] rounded-2xl text-[#24272C] py-1.5 w-full"
                  onClick={() => {
                    setModallogout(false);
                  }}
                >
                  CANCEL
                </button>
                <button
                  className=" bg-[#406C64] rounded-2xl text-[#ffff] py-1.5 w-full"
                  onClick={() => {
                    localStorage.removeItem("userid");
                    router("/login");
                  }}
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Top part */}
      <div className="w-full bg-[#24272C] px-32 py-10">
        <img src={Logo} alt="" />
        {/* Profile container*/}
        <div className="flex items-center justify-between px-8">
          <div
            className="w-52 h-52 rounded-full bg-cover"
            style={{ backgroundImage: `url(${NoProfile})` }}
          >
            <img src={Edit} alt="" className="relative left-36" />
          </div>
          {/* Information */}
          {user && (
            <div className="">
              <p className="text-5xl text-[#F7F6F1]">
                {user.firstname + " " + user.lastname}
              </p>
              <div className="flex mt-8">
                <img src={MailIcon} alt="" className="mr-4" />
                <p className="text-2xl text-[#F7F6F1]">{user.email}</p>
              </div>
              <div className="flex mt-6">
                <img src={PhoneIcon} alt="" className="mr-4" />
                <p className="text-2xl text-[#F7F6F1]">{user.tel}</p>
              </div>
            </div>
          )}
          <img src={ImageInProfile} alt="" className="" />
        </div>
        <button
          className="bg-[#D2F268] px-16 py-2.5 rounded-full shadow-xl text-2xl left-2"
          style={{ top: "65px" }}
          onClick={() => {
            setModal(true);
          }}
        >
          Add Lecture
        </button>
      </div>
      {/* Bottom Part */}
      <div className="flex px-24 pt-24">
        {/* Left Part */}
        <div className="w-96 pt-10">
          <div className="flex items-center justify-center">
            <img src={LogoHeart} alt="" />
            <p className="text-3xl ml-2">Your favorite</p>
          </div>
          <hr className="h-px border-0 bg-gray-700 mb-1 mt-4" />
          <div className="flex items-center mt-4 justify-center">
            <img src={LogoBookMark} alt="" />
            <p className="text-3xl ml-2">Your Bookmark</p>
          </div>
          <hr className="h-px border-0 bg-gray-700 mb-1 mt-4" />
          <div
            className="flex items-center mt-4 justify-center cursor-pointer"
            onClick={() => {
              setModallogout(true);
            }}
          >
            <img src={LogoLogout} alt="" />
            <p className="text-3xl ml-2">Logout</p>
          </div>
        </div>
        {/* Middle Part */}
        <div className="ml-24">
          <h1 className="text-4xl mb-6">Your Lecture</h1>
          <div className="flex">
            {/* <img src={PrevItems} alt="" className="mr-12" /> */}
            {books.map((book) => (
              <div className="Book mr-12" key={book.id}>
                <img src={Book1} alt="" className="" />
                <p className="font-black">{book.title}</p>
                <p>{book.author}</p>
                <div className="flex">
                  {/* <img src={SmallHeart} alt="" />
                                <img src={SmallBookMarked} alt="" /> */}
                </div>
              </div>
            ))}
            <img src={NextItems} alt="" className="next" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
