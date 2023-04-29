import React, { useState } from "react";
import Logo from "../assets/image/logo-lightgreen.svg"
import NoProfile from "../assets/image/no-profile.jpg"
import Edit from "../assets/image/edit-profile.svg"
import MailIcon from "../assets/image/mail-icon.svg"
import PhoneIcon from "../assets/image/phone-icon.svg"
import ImageInProfile from "../assets/image/imageinprofile.svg"
import LogoHeart from "../assets/image/logoHeart.svg"
import LogoBookMark from "../assets/image/logoBookMark.svg"
import LogoLogout from "../assets/image/logoLogout.svg"
import Book1 from "../assets/image/Book1.svg"
import Book2 from "../assets/image/Book2.svg"
import Book3 from "../assets/image/Book3.svg"
import Book4 from "../assets/image/Book4.svg"
import Book5 from "../assets/image/Book5.svg"
import Book6 from "../assets/image/Book6.svg"
import SmallHeart from "../assets/image/smallheartlogo.svg"
import SmallBookMarked from "../assets/image/smallbookmarklogo.svg"
import NextItems from "../assets/image/next-items.svg"
import PrevItems from "../assets/image/prev-items.svg"


function Profile(){
    const [books, setBooks] = useState([
        {
            id: 0,
            title: "Book name",
        author: "Writer's name",
        bookImg: "Book1",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:1,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book2.svg",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:2,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book3.svg",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:3,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book4.svg",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:4,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book5.svg",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:5,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book6.svg",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:6,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book6.svg",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:7,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book6.svg",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:7,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book6.svg",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:7,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book6.svg",
        isLiked: true,
        isBookMarked: true
    },
    {
        id:7,
        title: "Book name",
        author: "Writer's name",
        bookImg: "../assets/image/Book6.svg",
        isLiked: true,
        isBookMarked: true
    },
    ])
    return (

        <div className="bg-[#F7F6F1] h-screen">
            {/* Top part */}
            <div className="w-full bg-[#24272C] px-32 py-10">
                <img src={Logo} alt="" />
                {/* Profile container*/}
                <div className="flex items-center justify-between px-8">
                    <div className="w-52 h-52 rounded-full bg-cover" style={{backgroundImage : `url(${NoProfile})`}}>
                    <img src={Edit} alt="" className="relative left-36"/>
                    </div>
                    {/* Information */}
                    <div className="">
                        <p className="text-5xl text-[#F7F6F1]">Wannasa Chonchoochart</p>
                        <div className="flex mt-8">
                        <img src={MailIcon} alt="" className="mr-4"/>
                        <p className="text-2xl text-[#F7F6F1]">wannasafah4@gmail.com</p>
                        </div>
                        <div className="flex mt-6">
                        <img src={PhoneIcon} alt="" className="mr-4"/>
                        <p className="text-2xl text-[#F7F6F1]">wannasafah4@gmail.com</p>
                        </div>
                    </div>
                    <img src={ImageInProfile} alt=""  className=""/>
                </div>
                <button className="bg-[#D2F268] relative px-16 py-2.5 rounded-full shadow-xl text-2xl left-2" style={{top : "65px"}}>Add Lecture</button>
            </div>
            {/* Bottom Part */}
            <div className="flex px-24 pt-28">
                {/* Left Part */}
                <div className="w-96">
                    <div className="flex items-center justify-center">
                        <img src={LogoHeart} alt="" />
                        <p className="text-3xl ml-2">Your favorite</p>
                    </div>
                    <hr className="h-px border-0 bg-gray-700 mb-1 mt-4"/>
                    <div className="flex items-center mt-4 justify-center">
                        <img src={LogoBookMark} alt="" />
                        <p  className="text-3xl ml-2">Your Bookmark</p>
                    </div>
                    <hr className="h-px border-0 bg-gray-700 mb-1 mt-4"/>
                    <div className="flex items-center mt-4 justify-center">
                        <img src={LogoLogout} alt="" />
                        <p  className="text-3xl ml-2">Logout</p>
                    </div>
                </div>
                {/* Middle Part */}
                <div className="ml-24">
                    <h1 className="text-4xl mb-6">Your Lecture</h1>
                    <div className="flex">
                        {books.map((book, i) => {
                            if( i < 6)
                            return(
                                <div className="Book mr-12" key={book.id}>
                            <img src={Book1} alt="" className=""/>
                            <p className="font-black">{book.title}</p>
                            <p>{book.author}</p>
                            <div className="flex">
                                <img src={SmallHeart} alt="" />
                                <img src={SmallBookMarked} alt="" />
                            </div>
                        </div>
                            )
                            })}
                        <img src={NextItems} alt="" className="next"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;
