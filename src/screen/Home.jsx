import React, { useEffect } from "react";
import Logo from "../assets/image/logo-lightgreen.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Book1 from "../assets/image/Book1.svg";
import NextIcon from "../assets/image/next-circle-icon.svg";
import HomeImage1 from "../assets/image/HomeImage1.svg"
import HomeImage2 from "../assets/image/HomeImage2.svg"
import SearchLogo from "../assets/image/black-search-icon.svg"
import GreenProfile from "../assets/image/white-green-profile-icon.svg"
import FooterImage from "../assets/image/footer.svg"
import X from "../assets/image/x.png";

function Home(){
    const router = useNavigate();
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState({
      bookimg : "",
      title : "dqwd",
      author : "qwdqd"
  })
    const [books, setBooks] = useState([
        {
          id: 0,
          title: "Book name1",
          author: "Writer's name",
          bookImg: "Book1",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 1,
          title: "Book name2",
          author: "Writer's name",
          bookImg: "../assets/image/Book2.svg",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 2,
          title: "Book name3",
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
        {
          id: 6,
          title: "Book name",
          author: "Writer's name",
          bookImg: "../assets/image/Book6.svg",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 7,
          title: "Book name",
          author: "Writer's name",
          bookImg: "../assets/image/Book6.svg",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 7,
          title: "Book name",
          author: "Writer's name",
          bookImg: "../assets/image/Book6.svg",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 7,
          title: "Book name",
          author: "Writer's name",
          bookImg: "../assets/image/Book6.svg",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 7,
          title: "Book name",
          author: "Writer's name",
          bookImg: "../assets/image/Book6.svg",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 7,
          title: "Book name",
          author: "Writer's name",
          bookImg: "../assets/image/Book6.svg",
          isLiked: true,
          isBookMarked: true,
        },
      ]);
      const [categories, setCategories] = useState([
        {
            id : 0,
            name : "Science"
        },
        {
            id : 1,
            name : "Math"
        },
        {
            id : 2,
            name : "Thai"
        },
        {
            id : 3,
            name : "English"
        },
        {
            id : 4,
            name : "Health"
        },
        {
            id : 5,
            name : "History"
        },
      ])
      function openModal(img, bookTitle, author){
        let copiedBook = {...modalContent}
        console.log(copiedBook)
        setModalContent({
            bookimg : "",
            title : bookTitle,
            author : author
        })
        setModal(true);
    }
    function closeModal(){
        setModal(false);
    }
    return(
        <div className="min-h-screen bg-[#F7F6F1]">
          {/* modal add lecture*/}
      {modal && (
        <div className="h-full w-full fixed z-10">
          <div className=" h-full absolute flex justify-center items-center w-full">
            <div className="w-full h-full absolute bg-[#24272C] opacity-50"></div>
            <div className="bg-[#F7F6F1] w-[45%] z-50 rounded-xl py-12 px-12 flex justify-center flex-col relative">
              <img
                src={X}
                className=" w-7 absolute right-5 top-5 cursor-pointer"
                alt=""
                onClick={() => {
                  closeModal();
                }}
              />
              <p className='text-4xl font-semibold'>{modalContent.title}</p>
              <p className='text-2xl mt-6'>โดย : {modalContent.author}</p>
              <img src={Book1} alt="" className='w-64 mt-6'/>
            </div>
          </div>
        </div>
      )}
      <br />
            {/* Navbar */}
            <div
          className="bg-[#24272C] mx-20 rounded-full px-28 py-3 flex justify-between mt-4"
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
        <img src={HomeImage1} className="px-44 mt-8 w-full" alt="" />
        {/* New Arrival */}
        <div className="px-44  mt-8">
            <h1 className="text-4xl">New Arrival</h1>
            {/* Book Container*/}
            <div className="flex gap-x-9 gap-y-4 mt-10 w-full items-center">
                {books.map ((book, index) => {
                  if(index < 7)
                    return(
                        <div className="cursor-pointer" id="book" onClick={() => {openModal("", book.title, book.author);}}>
                    <img src={Book1} alt="" />
                    <h3 className="font-semibold mt-1">{book.title}</h3>
                    <p className="mt-1">{book.author}</p>
                </div>
                    )
})}
<div>
<img src={NextIcon} alt="" className="cursor-pointer" onClick={() => {
            router("/showmore");
          }}/>
</div>
            </div>
        </div>
        <img src={HomeImage2} className="px-44 mt-8 w-full" alt="" />
        {/* Category */}
        <div className="px-44 mt-8">
            <h1 className="text-4xl">Category</h1>
            {/* Category Container */}
            <div className="flex mt-10 gap-x-11 gap-y-6 items-center w-full">
                {/* Category */}
                {categories.map((category, index) => {
                    if (index < 4)
                    return(
                        <div className="bg-[#D9D9D9] rounded-2xl px-16 py-4 h-full">
                    <h2 className="text-center text-xl font-semibold">{category.name}</h2>
                    <img src={Book1} alt="" className=""/>
                </div>
                    )
            })}
            <div>
            <img src={NextIcon} alt="" className="cursor-pointer shrink-0" onClick={() => {
            router("/showmore");
          }}/>
            </div>
            </div>
        </div>
        <footer className="bg-[#24272C] pl-44 py-7 mt-20">
            <img src={FooterImage} alt="" className=""/>
        </footer>
        </div>
    )
}

export default Home;
