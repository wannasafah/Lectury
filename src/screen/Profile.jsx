import React, { useState, useEffect } from "react";
import Logo from "../assets/image/logo-lightgreen.svg";
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
import PDFViewer from "../components/PDFViewer";
import X from "../assets/image/x.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import path from "../../path";
import Select from "react-select";
import { Buffer } from "buffer";

function Profile() {
  const router = useNavigate();
  const [user, setUser] = useState();
  const [modal, setModal] = useState(false);
  const [modallogout, setModallogout] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(false);
  const [select, setSelect] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [dataDoc, setDataDoc] = useState();
  const [editFirstname, setEditFirstname] = useState("");
  const [editLastname, setEditLastname] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const style = {
    control: (base) => ({
      ...base,
      // This line disable the blue border
      boxShadow: "none",
      background: "transparent",
      borderColor: "#406C64",
    }),
  };
  function Preview_Img(img) {
    if (img.length < 1) return;
    const newImageUrls = [];
    img.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }
  function onImageChange(e) {
    setImages([...e.target.files]);
    Preview_Img([...e.target.files]);
  }
  const options = [
    // Language
    { value: "English", label: "English" },
    { value: "Chinese", label: "Chinese" },
    { value: "Japanese", label: "Japanese" },
    { value: "Korean", label: "Korean" },
    { value: "Thai", label: "Thai" },
    // Math
    { value: "Algebra", label: "Algebra" },
    { value: "Calculus", label: "Calculus" },
    // Science
    { value: "Physics", label: "Physics" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Astronomy", label: "Astronomy" },
    { value: "Computer", label: "Computer" },
    { value: "Law", label: "Law" },
    { value: "Religion", label: "Religion" },
    { value: "Marketing", label: "Marketing" },
    { value: "Other", label: "Other" },
    // Social Studies
    { value: "History", label: "History" },
    { value: "Sociology", label: "Sociology" },
    // Health
    { value: "Health", label: "Health" },
  ];

  function UpdateUser() {
    console.log(1);

    if (images.length != 0) {
      const file = images[0]; // the file object of the image
      const reader = new FileReader();
      let name = images[0].name;
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Img = reader.result.split(",")[1];
        axios
          .post(`${path}/upload-img`, {
            id: localStorage.getItem("userid"),
            profile: base64Img,
            profileName: name,
          })
          .then((res) => {
            console.log(res.data);
            GetUser();
          })
          .catch((err) => console.log(err));
      };
      axios.post(`${path}/updateuser`, {
        id: localStorage.getItem("userid"),
        firstname: editFirstname,
        lastname: editLastname,
        password: editPassword,
      }).then((res) =>{
        GetUser();
      });
    } else {
      axios.post(`${path}/updateuser`, {
        id: localStorage.getItem("userid"),
        firstname: editFirstname,
        lastname: editLastname,
        password: editPassword,
      }).then((res) =>{
        GetUser();
      });
    }
  }
  function openModalEditProfile() {
    setEditFirstname(user.firstname);
    setEditLastname(user.lastname);
    setEditPassword(user.password);
    setConfirmPassword(user.password);
    setModalEditProfile(true);
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
  function GetMyDocument() {
    axios
      .post(`${path}/getmydocuments`, {
        userid: parseInt(localStorage.getItem("userid")),
      })
      .then((res) => {
        setDataDoc(res.data);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    GetUser();
    GetMyDocument();
  }, []);
  const uploadlecture = () => {
    const filedecode = file; // the file object of the image
    const reader = new FileReader();
    reader.readAsDataURL(filedecode);
    reader.onload = () => {
      const base64File = reader.result.split(",")[1];
      axios
        .post(`${path}/adddocument`, {
          document: base64File,
          fileName: filedecode.name,
          doc: {
            id: localStorage.getItem("userid"),
            firstname: user.firstname,
            lastname: user.lastname,
            category: select,
            dateAdd: new Date(),
            fileName: filedecode.name,
            title: title,
            description: description,
          },
        })
        .then((res) => {
          console.log(res.data);
          GetMyDocument();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  return (
    <div className="bg-[#F7F6F1] min-h-screen pb-12">
      {/* modal Edit Profile */}
      {modalEditProfile && (
        <div className=" fixed h-full w-full z-50">
          <div className=" h-full absolute flex justify-center items-center w-full">
            <div className="w-full h-full absolute bg-[#24272C]  opacity-50"></div>
            <div className="bg-[#F7F6F1] w-[40%] z-50 rounded-xl p-28 flex justify-center flex-col relative">
              <img
                src={X}
                className=" w-7 absolute right-5 top-5 cursor-pointer"
                alt=""
                onClick={() => {
                  setModalEditProfile(false);
                }}
              />
              <h1 className="text-4xl mb-4">Edit Profile</h1>
              {/* FIrstname */}
              <p className="mb-1">Firstname</p>
              <input
                type="text"
                className="w-full border border-[#406C64] rounded-lg bg-transparent mb-4 px-4 py-1.5"
                value={editFirstname}
                onChange={(e) => {
                  setEditFirstname(e.target.value);
                }}
              />
              {/* Lastname */}
              <p className="mb-1">Lastname</p>
              <input
                type="text"
                className="w-full border border-[#406C64] rounded-lg bg-transparent mb-4 px-4 py-1.5"
                value={editLastname}
                onChange={(e) => {
                  setEditLastname(e.target.value);
                }}
              />
              {/* Tel */}
              <p className="mb-1">Password</p>
              <input
                type="password"
                className="w-full border border-[#406C64] rounded-lg bg-transparent mb-4 px-4 py-1.5"
                value={editPassword}
                onChange={(e) => {
                  setEditPassword(e.target.value);
                }}
              />
              <p className="mb-1">Confirm Password</p>
              <input
                type="password"
                className="w-full border border-[#406C64] rounded-lg bg-transparent mb-4 px-4 py-1.5"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              {/* upload file */}
              <p className="mb-1">Upload Profile Image</p>
              <div className="mx-auto rounded-full cursor-pointer">
                <div>
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    id="file-img"
                    onChange={onImageChange}
                  />
                  <label htmlFor="file-img">
                    {imageURLs.length ? (
                      imageURLs.map((imageSrc, idx) => {
                        return (
                          <img
                            className="rounded-full h-[150px] w-[150px] object-cover"
                            key={idx}
                            src={imageSrc}
                          />
                        );
                      })
                    ) : (
                      <img
                        className="rounded-full"
                        src={NoProfile}
                        width={150}
                        alt=""
                      />
                    )}
                  </label>
                </div>
              </div>

              <button
                className=" bg-[#406C64] rounded-2xl text-[#ffff] mt-8 py-1.5 w-full"
                onClick={() => {
                  // uploadlecture();
                  UpdateUser();
                  setModalEditProfile(false);
                  setImageURLs([]);
                  setImages([]);
                }}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      )}
      {/* modal add lecture*/}
      {modal && (
        <div className=" fixed h-full w-full z-50">
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
              {/* title */}
              <p className="mb-1">Title</p>
              <input
                type="text"
                className="w-full border border-[#406C64] rounded-lg bg-transparent mb-4 px-4 py-1.5"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              {/* description */}
              <p className="mb-1">Description</p>
              <textarea
                type="text"
                rows={3}
                className="w-full border border-[#406C64] rounded-lg bg-transparent mb-4 px-4 py-1.5"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              {/* category */}
              <p className="mb-1">Category</p>
              {/* select category */}
              <Select
                defaultValue={select}
                isMulti
                styles={style}
                name="category"
                onChange={(e) => {
                  setSelect(Array.isArray(e) ? e.map((x) => x.value) : []);
                }}
                options={options}
                className="basic-multi-select focus:outline-none border-1 mb-4 "
                classNamePrefix="select"
              />
              {/* upload file */}
              <p className="mb-1">Upload File</p>
              <input
                className=""
                id="upfile"
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />

              <button
                className=" bg-[#406C64] rounded-2xl text-[#ffff] mt-8 py-1.5 w-full"
                onClick={() => {
                  uploadlecture();
                  setModal(false);
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
        <div className=" fixed h-full w-full z-50">
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
        <img
          src={Logo}
          alt=""
          className="cursor-pointer"
          onClick={() => {
            router("/");
          }}
        />
        {/* Profile container*/}
        <div className="flex items-center justify-between px-8 ">
          {user &&
            (user.image != "" ? (
              <div className="w-52 h-52 rounded-full relative">
                <img
                  className="rounded-full w-52 h-52 object-cover"
                  src={user.image}
                />
                <img
                  src={Edit}
                  alt=""
                  className="cursor-pointer absolute top-0 right-0"
                  onClick={openModalEditProfile}
                />
              </div>
            ) : (
              <div
                className="w-52 h-52 rounded-full bg-cover "
                style={{ backgroundImage: `url(${NoProfile})` }}
              >
                <img
                  src={Edit}
                  alt=""
                  className=" float-right cursor-pointer"
                  onClick={openModalEditProfile}
                />
              </div>
            ))}
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
          {/* you favorite */}
          <div className="flex items-center cursor-pointer ml-12">
            <img src={LogoHeart} alt="" />
            <p
              onClick={() => {
                router("/showmore", { state: { title: "favorite" } });
              }}
              className="text-3xl ml-2"
            >
              Your favorite
            </p>
          </div>
          {/* line */}
          <hr className="h-px border-0 bg-gray-700 mb-1 mt-4" />
          {/* your bookmark */}
          <div className="flex items-center mt-4 cursor-pointer ml-12">
            <img src={LogoBookMark} alt="" />
            <p
              onClick={() => {
                router("/showmore", { state: { title: "bookmark" } });
              }}
              className="text-3xl ml-2"
            >
              Your Bookmark
            </p>
          </div>
          <hr className="h-px border-0 bg-gray-700 mb-1 mt-4" />
          <div
            className="flex items-center mt-4 cursor-pointer ml-12"
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
          <div className="grid grid-cols-5 gap-4">
            {/* <img src={PrevItems} alt="" className="mr-12" /> */}
            {dataDoc &&
              dataDoc.file.map((file, index) => {
                if (index < 5)
                  return (
                    <Link
                      to={file.url.replaceAll(" ", "%20")}
                      className="Book mr-12 cursor-pointer"
                      key={index}
                    >
                      <PDFViewer
                        height={200}
                        fileUrl={file.url.replaceAll(" ", "%20")}
                      />
                      <p className="font-black">{dataDoc.doc[index].title}</p>
                      <p className="truncate">
                        {dataDoc.doc[index].firstname +
                          " " +
                          dataDoc.doc[index].lastname}
                      </p>
                      <div className="flex">
                        {/* <img src={SmallHeart} alt="" />
                                <img src={SmallBookMarked} alt="" /> */}
                      </div>
                    </Link>
                  );
              })}
            {/* <img src={NextItems} alt="" className="next" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
