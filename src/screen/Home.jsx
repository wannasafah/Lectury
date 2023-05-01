import React from "react";
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

function Home(){
    const router = useNavigate();
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
    return(
        <div className="min-h-screen bg-[#F7F6F1] pt-10">
            {/* Navbar */}
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
        
        <img src={HomeImage1} className="px-44 mt-8" alt="" />
        {/* New Arrival */}
        <div className="px-44  mt-8">
            <h1 className="text-4xl">New Arrival</h1>
            {/* Book Container*/}
            <div className="flex flex-wrap gap-x-9 gap-y-4 mt-10">
                {books.map ((book, index) => {
                    if (index < 7)
                    return(
                        <div>
                    <img src={Book1} alt="" />
                    <h3 className="font-semibold mt-1">{book.title}</h3>
                    <p className="mt-1">{book.author}</p>
                </div>
                    )
})}
<img src={NextIcon} alt="" className="cursor-pointer" onClick={() => {
            router("/showmore");
          }}/>
            </div>
        </div>
        <img src={HomeImage2} className="px-44 mt-8" alt="" />
        {/* Category */}
        <div className="px-44  mt-8">
            <h1 className="text-4xl">Category</h1>
            {/* Category Container */}
            <div className="flex flex-wrap mt-10 gap-x-11 gap-y-6">
                {/* Category */}
                {categories.map((category, index) => {
                    if (index < 4)
                    return(
                        <div className="bg-[#D9D9D9] rounded-2xl px-16 py-4">
                    <h2 className="text-center text-xl font-semibold">{category.name}</h2>
                    <img src={Book1} alt="" className="mx-auto mt-2 w-24"/>
                </div>
                    )
            })}
                <img src={NextIcon} alt="" className="cursor-pointer" onClick={() => {
            router("/showmore");
          }}/>
            </div>
        </div>
        <footer className="bg-[#24272C] pl-44 py-7 mt-20">
            <img src={FooterImage} alt="" className=""/>
        </footer>
        </div>
    )
}

export default Home;