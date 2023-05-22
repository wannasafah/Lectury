import Logo from "../assets/image/logo-lightgreen.svg";
import { useState, useEffect } from "react";
import Book1 from "../assets/image/Book1.svg";
import Smallheart from "../assets/image/logoHeart.svg";
import Smallbookmark from "../assets/image/logoBookMark.svg";
import X from "../assets/image/x.png";
import Navbar from "../components/Navbar";
import axios from "axios";
import path from "../../path";
import PDFViewer from "../components/PDFViewer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Notlike from "../assets/image/notlike.svg";
import NotBookmark from "../assets/image/notbookmark.svg";
import Heart from "../assets/image/logoHeart.svg";
import Bookmark from "../assets/image/logoBookMark.svg";

function Showmore(props) {
  const router = useNavigate();
  const location = useLocation();
  const [condition, setCondition] = useState(true);
  const [heading, setHeading] = useState("New Arrival");
  const [user, setUser] = useState();
  function Getuser() {
    axios
      .post(`${path}/getuser`, {
        id: localStorage.getItem("userid"),
      })
      .then((res) => {
        setUser(res.data);
        GetMyDocument(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
  const [modal, setModal] = useState(false);
  const [dataDoc, setDataDoc] = useState();
  const [modalContent, setModalContent] = useState({
    bookimg: "",
    title: "dqwd",
    author: "qwdqd",
    pdfUrl: "",
  });
  function GetMyDocument(users) {
    axios
      .get(`${path}/getdocuments`)
      .then((res) => {
        if (location.state.title == "favorite") {
          setDataDoc(
            res.data.filter((e) => users.favorites.indexOf(e.doc.title) != -1)
          );
        } else if (location.state.title == "bookmark") {
          setDataDoc(
            res.data.filter((e) => users.bookmarks.indexOf(e.doc.title) != -1)
          );
        } else {
          setDataDoc(res.data);
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    Getuser();
  }, []);

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
      <Navbar />
      {/* Content */}
      <div className="mt-16">
        {/* All Books */}
        <div className="mt-8  max-w-6xl  mx-auto">
          <h1 className="text-6xl mb-1 mb-12">New Arrival</h1>
          {/* book */}
          <div className="grid grid-cols-5 gap-12">
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
      </div>
    </div>
  );
}
export default Showmore;
