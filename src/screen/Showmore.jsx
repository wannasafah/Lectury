import Logo from '../assets/image/logo-lightgreen.svg'
import { useState, useEffect } from 'react';
import Book1 from "../assets/image/Book1.svg";
import Smallheart from "../assets/image/logoHeart.svg"
import Smallbookmark from "../assets/image/logoBookMark.svg"
import X from "../assets/image/x.png";
import Navbar from '../components/Navbar';
import axios from "axios";
import path from '../../path';
import PDFViewer from "../components/PDFViewer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Notlike from "../assets/image/notlike.svg"
import NotBookmark from "../assets/image/notbookmark.svg"

function Showmore (props){
  const router = useNavigate();
  const location = useLocation();
  const [condition, setCondition] = useState(true)
  const [heading, setHeading] = useState("New Arrival")
  function openModal(url, bookTitle, author) {
    let copiedBook = { ...modalContent };
    console.log(copiedBook);
    setModalContent({
      url: url,
      title: bookTitle,
      author: author,
    });
    setModal(true);
  }
    function closeModal(){
        setModal(false);
    }
    const [modal, setModal] = useState(false);
    const [dataDoc, setDataDoc] = useState();
    const [modalContent, setModalContent] = useState({
      bookimg: "",
      title: "dqwd",
      author: "qwdqd",
      pdfUrl : "",
    });
    function GetMyDocument() {
      axios
        .get(`${path}/getdocuments`)
        .then((res) => {
          console.log(res.data);
          setDataDoc(res.data);
        })
        .catch((err) => console.log(err));
    }
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
      useEffect(() => {
        GetMyDocument();
      }, []);
    return (
        <div className="min-h-screen bg-[#F7F6F1]">
            {/* modal add lecture*/}
            {modal && (
        <div className="h-full w-full fixed z-10">
          <div className=" h-full absolute flex justify-center items-center w-full">
            <div className="w-full h-full absolute bg-[#24272C] opacity-50"></div>
            <div id="modal" className="bg-[#F7F6F1] w-[60%] z-50 rounded-xl py-12 px-12 flex justify-center flex-col relative">
              <img
                src={X}
                className=" w-7 absolute right-5 top-5 cursor-pointer"
                alt=""
                onClick={() => {
                  closeModal();
                }}
              />
              <p className="text-4xl font-semibold">{modalContent.title}</p>
              <p className="text-2xl mt-6">โดย : {modalContent.author}</p>
              <div className="flex mt-10 ">
              <Link to={modalContent.url.replaceAll(" ", "%20")} className=" cursor-pointer">
              <PDFViewer
                  height={400}
                  fileUrl={modalContent.url.replaceAll(" ", "%20")}
                />
              </Link>
              <div className="ml-8 w-2/4">
                <div>
                <h1 className="text-4xl">Description</h1>
                <hr className="mt-4 border-0 bg-[#406C64] h-px w-44"/>
                </div>
                <p className="mt-4 text-xl break-words">{modalContent.description}</p>
                <div className="flex mt-4 items-center">
                  <img src={Notlike} alt="" className="" style={{height : "34px"}}/>
                  <img src={NotBookmark} alt="" className=" ml-2" style={{height:"28px"}}/>
                </div>
                <Link to={modalContent.url.replaceAll(" ", "%20")} className=" cursor-pointer">
                <button className="bg-[#406C64] px-20 py-1.5 rounded-full text-white cursor-pointer absolute bottom-12 shadow-lg">Read</button>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
            <Navbar/>
          {/* Content */}
          <div className='mt-16'>
            {/* All Books */}
            <div className='mt-8  max-w-6xl  mx-auto'>
            <h1 className='text-6xl mb-1 mb-12'>{location.state.title}</h1>
                {/* book */}
                <div className='grid grid-cols-6 gap-x-12'>
                {dataDoc &&
            dataDoc.map((book, index) => {
              if (index < 7 && condition)
              // book.doc.category.includes("English")
                return (
                  <div
                    className="cursor-pointer mx-auto"
                    id="book"
                    key={index}
                    onClick={() => {
                      openModal(
                        book.file.url,
                        book.doc.title,
                        book.doc.firstname + " " + book.doc.lastname
                      );
                    }}
                  >
                    <div className="mx-auto">
                      <PDFViewer
                        height={200}
                        fileUrl={book.file.url.replaceAll(" ", "%20")}
                      />
                    </div>
                    <h3 className="font-semibold mt-1">{book.doc.title}</h3>
                    <p className="mt-1">
                      {book.doc.firstname + " " + book.doc.lastname}
                    </p>
                  </div>
                );
            })}
                </div>
            </div>
          </div>
        </div>
    );
}
export default Showmore;
