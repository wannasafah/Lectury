import React, { useEffect } from "react";
import Logo from "../assets/image/logo-lightgreen.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Book1 from "../assets/image/Book1.svg";
import NextIcon from "../assets/image/next-circle-icon.svg";
import HomeImage1 from "../assets/image/HomeImage1.svg";
import HomeImage2 from "../assets/image/HomeImage2.svg";
import English from "../assets/image/english.png";
import Chinese from "../assets/image/chinese.png";
import Japanese from "../assets/image/japanese.png";
import Korean from "../assets/image/korean.png";
import Thai from "../assets/image/thai.png";
import Algebra from "../assets/image/algebra.png";
import Calculus from "../assets/image/calculus.png";
import Physics from "../assets/image/physics.png";
import Chemistry from "../assets/image/chemistry.png";
import Astronomy from "../assets/image/astronomy.png";
import Computer from "../assets/image/computer.png";
import Law from "../assets/image/law.png";
import Religion from "../assets/image/religion.png";
import Marketing from "../assets/image/marketing.png";
import Other from "../assets/image/other.png";
import History from "../assets/image/history.png";
import Sociology from "../assets/image/sociology.png";
import Health from "../assets/image/health.png";
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
  const [category, setCategory] = useState([
    // Language
    { value: "English", label: "English", img: English },
    { value: "Chinese", label: "Chinese", img: Chinese },
    { value: "Japanese", label: "Japanese", img: Japanese },
    { value: "Korean", label: "Korean", img: Korean },
    { value: "Thai", label: "Thai", img: Thai },
    // Math
    { value: "Algebra", label: "Algebra", img: Algebra },
    { value: "Calculus", label: "Calculus", img: Calculus },
    // Science
    { value: "Physics", label: "Physics", img: Physics },
    { value: "Chemistry", label: "Chemistry", img: Chemistry },
    { value: "Astronomy", label: "Astronomy", img: Astronomy },
    { value: "Computer", label: "Computer", img: Computer },
    { value: "Law", label: "Law", img: Law },
    { value: "Religion", label: "Religion", img: Religion },
    { value: "Marketing", label: "Marketing", img: Marketing },
    { value: "Other", label: "Other", img: Other },
    // Social Studies
    { value: "History", label: "History", img: History },
    { value: "Sociology", label: "Sociology", img: Sociology },
    // Health
    { value: "Health", label: "Health", img: Health },
  ]);
  function GetDocument() {
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
    GetDocument();
    GetUser();
  }, []);
  function FilterComponent(name) {
    const filter = dataDoc.filter(
      (value) => value.doc.category.indexOf(name) != -1
    );
    router("/Filterbook", { state: filter });
  }
  function RenderCard({ item, index }) {
    return (
      <div
        onClick={() => {
          FilterComponent(item.label);
        }}
        className="bg-[#D9D9D9] text-center rounded-2xl col-span-1 p-10 cursor-pointer"
      >
        <h2 className="text-3xl">{item.label}</h2>
        <img src={item.img} alt="" className="mx-auto mt-2 w-full mt-4" />
      </div>
    );
  }
  function DeleteLike(title) {
    let index = user.favorites.indexOf(title);
    axios
      .post(`${path}/deletelike`, {
        user_id: user.id,
        index: index,
        favorites: title,
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

      <img src={HomeImage1} className="px-44 mt-8 w-full" alt="" />
      {/* New Arrival */}
      <div className="px-44  mt-8">
        <div className="flex items-center justify-between cursor-pointer">
          <h1 className="text-4xl">New Arrival</h1>
          <h1
            className="text-xl "
            onClick={() => {
              router("/showmore", { state: { title: "New Arrival" } });
            }}
          >
            show more
          </h1>
        </div>

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
        <div className="flex items-center justify-between w-full">
          <h1 className="text-4xl">Category</h1>
          <h1
            onClick={() => {
              router("/category");
            }}
            className="text-xl cursor-pointer"
          >
            Show More
          </h1>
        </div>

        {/* Category Container */}
        <div className="grid grid-cols-5 mt-10 gap-4 items-center w-full mx-auto">
          {/* Category */}
          {category.map((category, index) => {
            if (index < 5)
              return <RenderCard key={index} item={category} index={index} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
