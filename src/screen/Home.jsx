import React, { useEffect } from "react";
import Logo from "../assets/image/logo-lightgreen.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Book1 from "../assets/image/Book1.svg";
import NextIcon from "../assets/image/next-circle-icon.svg";
import HomeImage1 from "../assets/image/HomeImage1.svg";
import HomeImage2 from "../assets/image/HomeImage2.svg";
import SearchLogo from "../assets/image/black-search-icon.svg";
import GreenProfile from "../assets/image/white-green-profile-icon.svg";
import FooterImage from "../assets/image/footer.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import X from "../assets/image/x.png";
import axios from "axios";
import PDFViewer from "../components/PDFViewer";
import path from "../../path";
import Notlike from "../assets/image/notlike.svg";
import NotBookmark from "../assets/image/notbookmark.svg";
import Heart from "../assets/image/logoHeart.svg";
import Bookmark from "../assets/image/logoBookMark.svg";

function Home() {
  const router = useNavigate();
  const [modal, setModal] = useState(false);
  const [dataDoc, setDataDoc] = useState();
  const [user, setUser] = useState();
  const [modalContent, setModalContent] = useState({
    bookimg: "",
    title: "dqwd",
    author: "qwdqd",
    pdfUrl: "",
  });
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: "Science",
    },
    {
      id: 1,
      name: "Math",
    },
    {
      id: 2,
      name: "Thai",
    },
    {
      id: 3,
      name: "English",
    },
    {
      id: 4,
      name: "Health",
    },
    {
      id: 5,
      name: "History",
    },
  ]);
  function GetMyDocument() {
    axios
      .get(`${path}/getdocuments`)
      .then((res) => {
        console.log(res.data);
        setDataDoc(res.data);
      })
      .catch((err) => console.log(err));
  }
  function openModal(
    url,
    bookTitle,
    author,
    description,
    like,
    bookmark,
    index
  ) {
    setModalContent({
      url: url,
      title: bookTitle,
      author: author,
      description: description,
      like: like,
      index: index,
      bookmark: bookmark,
    });
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function GetUser() {
    axios
      .post(`${path}/getuser`, {
        id: localStorage.getItem("userid"),
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    GetMyDocument();
    GetUser();
  }, []);

  function DeleteLike(title) {
    let index = user.favorites.indexOf(title);
    axios
      .post(`${path}/deletelike`, {
        user_id: user.id,
        index: index,
      })
      .then((res) => {
        console.log(res.data);
        user.favorites.splice(index, 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function AddLike(title) {
    axios
      .post(`${path}/addlike`, {
        user_id: user.id,
        favorites: title,
      })
      .then((res) => {
        console.log(res.data);
        user.favorites.push(title);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function DeleteBookmarks(title) {
    let index = user.bookmarks.indexOf(title);
    axios
      .post(`${path}/deletebookmark`, {
        user_id: user.id,
        index: index,
      })
      .then((res) => {
        console.log(res.data);
        user.bookmarks.splice(index, 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function AddBookmarks(title) {
    axios
      .post(`${path}/addbookmark`, {
        user_id: user.id,
        bookmarks: title,
      })
      .then((res) => {
        console.log(res.data);
        user.bookmarks.push(title);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function RenderModal() {
    const [like, setLike] = useState(modalContent.like);
    const [bookmark, setBookmark] = useState(modalContent.bookmark);
    return (
      <div
        id="modal"
        className="bg-[#F7F6F1] w-[60%] z-50 rounded-xl py-12 px-12 flex justify-center flex-col relative"
      >
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
          <Link
            to={modalContent.url.replaceAll(" ", "%20")}
            className=" cursor-pointer"
          >
            <PDFViewer
              height={400}
              fileUrl={modalContent.url.replaceAll(" ", "%20")}
            />
          </Link>
          <div className="ml-8 w-2/4">
            <div>
              <h1 className="text-4xl">Description</h1>
              <hr className="mt-4 border-0 bg-[#406C64] h-px w-44" />
            </div>
            <p className="mt-4 text-xl break-words">
              {modalContent.description}
            </p>
            <div className="flex mt-4 items-center">
              {like ? (
                <img
                  src={Heart}
                  alt=""
                  onClick={() => {
                    DeleteLike(modalContent.title, modalContent.index);
                    setLike(false);
                  }}
                  className=""
                  style={{ height: "34px" }}
                />
              ) : (
                <img
                  src={Notlike}
                  alt=""
                  onClick={() => {
                    AddLike(modalContent.title, modalContent.index);
                    setLike(true);
                  }}
                  className=""
                  style={{ height: "34px" }}
                />
              )}
              {bookmark ? (
                <img
                  src={Bookmark}
                  alt=""
                  onClick={() => {
                    DeleteBookmarks(modalContent.title, modalContent.index);
                    setBookmark(false);
                  }}
                  className=" ml-2"
                  style={{ height: "28px" }}
                />
              ) : (
                <img
                  src={NotBookmark}
                  alt=""
                  onClick={() => {
                    AddBookmarks(modalContent.title, modalContent.index);
                    setBookmark(true);
                  }}
                  className=" ml-2"
                  style={{ height: "28px" }}
                />
              )}
            </div>
            <Link
              to={modalContent.url.replaceAll(" ", "%20")}
              className=" cursor-pointer"
            >
              <button className="bg-[#406C64] px-20 py-1.5 rounded-full text-white cursor-pointer absolute bottom-12 shadow-lg">
                Read
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F6F1]">
      {/* modal add lecture*/}
      {modal && (
        <div className="h-full w-full fixed z-10">
          <div className=" h-full absolute flex justify-center items-center w-full">
            <div className="w-full h-full absolute bg-[#24272C] opacity-50"></div>
            <RenderModal />
          </div>
        </div>
      )}
      <br />
      {/* Navbar */}
      <Navbar />

      <img src={HomeImage1} className="px-44 mt-8" alt="" />
      {/* New Arrival */}
      <div className="px-44  mt-8">
        <h1 className="text-4xl">New Arrival</h1>
        {/* Book Container*/}
        <div className="flex gap-x-9 gap-y-4 mt-10 w-full items-center overflow-y-auto">
          {dataDoc &&
            dataDoc.map((book, index) => {
              return (
                <div
                key={index}
                  className="cursor-pointer mx-auto"
                  id="book"
                  onClick={() => {
                    openModal(
                      book.file.url,
                      book.doc.title,
                      book.doc.firstname + " " + book.doc.lastname,
                      book.doc.description,
                      user.favorites.indexOf(book.doc.title) != -1
                        ? true
                        : false,
                      user.bookmarks.indexOf(book.doc.title) != -1
                        ? true
                        : false,
                      index
                    );
                  }}
                >
                  <div className="mx-auto h-[250px] overflow-hidden">
                    <PDFViewer
                      width={200}
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
          <div>
            <img
              src={NextIcon}
              alt=""
              className="cursor-pointer"
              onClick={() => {
                router("/showmore", { state: { title: "New Arrival" } });
              }}
            />
          </div>
        </div>
      </div>
      <img
        src={HomeImage2}
        className="px-44 mt-8 w-full cursor-pointer"
        alt=""
        onClick={() => {
          router("/question");
        }}
      />
      {/* Category */}
      <div className="px-44 mt-8">
        <h1 className="text-4xl">Category</h1>
        {/* Category Container */}
        <div className="flex mt-10 gap-x-11 gap-y-6 items-center w-full">
          {/* Category */}
          {categories.map((category, index) => {
            if (index < 4)
              return (
                <div key={index} className="bg-[#D9D9D9] rounded-2xl px-16 py-4 h-full">
                  <h2 className="text-center text-xl font-semibold">
                    {category.name}
                  </h2>
                  <img src={Book1} alt="" className="" />
                </div>
              );
          })}
          <div>
            <img
              src={NextIcon}
              alt=""
              className="cursor-pointer shrink-0"
              onClick={() => {
                router("/category");
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
