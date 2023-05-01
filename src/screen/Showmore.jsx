import Logo from '../assets/image/logo-lightgreen.svg'
import { useState } from 'react';
import Book1 from "../assets/image/Book1.svg";
import Smallheart from "../assets/image/logoHeart.svg"
import Smallbookmark from "../assets/image/logoBookMark.svg"
import X from "../assets/image/x.png";

function Showmore (){
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
          author: "Writer's name1",
          bookImg: "Book1",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 1,
          title: "Book name2",
          author: "Writer's name2",
          bookImg: "../assets/image/Book2.svg",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 2,
          title: "Book name3",
          author: "Writer's name3",
          bookImg: "../assets/image/Book3.svg",
          isLiked: true,
          isBookMarked: true,
        },
        {
          id: 3,
          title: "Book name4",
          author: "Writer's name4",
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
            id: 8,
            title: "Book name",
            author: "Writer's name",
            bookImg: "../assets/image/Book6.svg",
            isLiked: true,
            isBookMarked: true,
          },
          {
            id: 9,
            title: "Book name",
            author: "Writer's name",
            bookImg: "../assets/image/Book6.svg",
            isLiked: true,
            isBookMarked: true,
          },
      ]);
    return (
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
            <div className="bg-[#24272C] mx-14 rounded-full px-16 py-3 cursor-pointer mt-4"
          onClick={() => {
            router("/home");
          }}>
            <img src={Logo} alt="" />
          </div>
          {/* Content */}
          <div className='mt-16 mx-32'>
            <h1 className='text-6xl mb-16'>New Arrival</h1>
            {/* All Books */}
            <div className='mt-8'>
                {/* book */}
                <div className='flex flex-wrap gap-x-12'>
                    {books.map((book) => (
                        <div className="Book w-56 mb-16 cursor-pointer" key={book.id} onClick={() => {
                            openModal("", book.title, book.author);
                          }}>
                        <img src={Book1} alt="" className="w-full" />
                        <p className="font-black ml-4 text-xl">{book.title}</p>
                        <p className='ml-4 text-xl mt-1.5'>{book.author}</p>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
    );
}
export default Showmore;
