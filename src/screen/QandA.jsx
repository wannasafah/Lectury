import Logo from "../assets/image/logo-lightgreen.svg";
import Logodark from "../assets/image/logo-darkgreen.png";
import Readtogether from "../assets/image/readtogether.svg";
import SearchLogo from "../assets/image/search-icon.svg";
import { useEffect, useState } from "react";
import NoProfile from "../assets/image/no-profile.jpg";
import X from "../assets/image/x.png";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import path from "../../path";
import uuid from "react-uuid";
import Navbar from "../components/Navbar";

function QandA() {
  const router = useNavigate();
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [select, setSelect] = useState([]);
  const [description, setDescription] = useState("");
  const [user, setUser] = useState();
  const [question, setQuestion] = useState();
  const [filter, setFilter] = useState("");
  const [backup, setBackup] = useState();
  const style = {
    control: (base) => ({
      ...base,
      // This line disable the blue border
      boxShadow: "none",
      background: "transparent",
      borderColor: "#406C64",
    }),
  };
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
  function Getuser() {
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
  }
  function GetThreads() {
    axios
      .get(`${path}/mythread`)
      .then((res) => {
        console.log(res.data);
        setBackup(res.data);
        console.log(filter);
        if (filter != "") {
          const filtertopic = res.data.filter(
            (q) => q.userid == localStorage.getItem("userid")
          );
          setQuestion(filtertopic);
        } else {
          setQuestion(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    Getuser();
    GetThreads();
  }, []);
  function openModal() {
    setModal(true);
    // document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  }
  function closeModal() {
    setModal(false);
    document.body.style.position = "";
    document.body.style.top = "";
  }
  function DeleteThread(id) {
    axios
      .post(`${path}/deletethread`, {
        thread_id: id,
      })
      .then((res) => {
        console.log(res.data);
        GetThreads();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function Addquestion() {
    axios
      .put(`${path}/mythread`, {
        thread: {
          userid: localStorage.getItem("userid"),
          t_id: uuid(),
          comments: [],
          category: select,
          firstname: user.firstname,
          lastname: user.lastname,
          thread: {
            topic: title,
            description: description,
          },
        },
      })
      .then((res) => {
        console.log(res.data);
        GetThreads();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="min-h-screen bg-[#F7F6F1]">
      {/* modal add lecture*/}
      {modal && (
        <div className="h-full w-full fixed z-10">
          <div className=" h-full absolute flex justify-center items-center w-full">
            <div className="w-full h-full absolute bg-[#24272C]  opacity-50"></div>
            <div className="bg-[#F7F6F1] w-[40%] z-50 rounded-xl p-24 flex justify-center flex-col relative">
              <img
                src={X}
                className=" w-7 absolute right-5 top-5 cursor-pointer"
                alt=""
                onClick={() => {
                  closeModal();
                  setSelect([]);
                }}
              />
              <img src={Logodark} className="w-[50%] mb-6" alt="" />
              {/* title */}
              <p className="mb-1">Title</p>
              <input
                type="text"
                className="w-full border border-[#406C64] rounded-2xl bg-transparent mb-4 px-4 py-1.5"
                onChange={(res) => {
                  setTitle(res.target.value);
                }}
              />
              {/* queation */}
              <p className="mb-1">Question</p>
              <textarea
                type="text"
                rows={4}
                className="w-full border border-[#406C64] rounded-2xl bg-transparent mb-4 px-4 py-1.5"
                onChange={(res) => {
                  setDescription(res.target.value);
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

              <button
                className=" bg-[#406C64] rounded-2xl text-[#ffff] mt-8 py-1.5 w-full shadow-lg"
                onClick={() => {
                  Addquestion();
                  setModal(false);
                  setSelect([]);
                }}
              >
                Add Question
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Top Part */}
      <div className="bg-[#406C64] py-10">
        {/* Top Searchbar */}
        <Navbar />
        {/* Content Part */}
        <div className="flex px-32 mt-12 justify-between items-center">
          <div>
            <p className="text-white text-3xl">Hi, Fah Fiily.</p>
            <p className="text-white text-4xl max-w-3xl mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
            <button
              className="bg-[#D2F268] px-6 py-1.5 rounded-full shadow-xl text-lg font-semibold mt-10"
              onClick={() => {
                openModal();
              }}
            >
              Add Question
            </button>
          </div>
          <div>
            <img src={Readtogether} alt="" className="relative bottom-5" />
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div>
        <h1 className="px-32 py-8 text-4xl">Q&A Board</h1>
        {/* Search Wrapper */}
        <div className="flex px-32">
          {/* search bar */}
          <div className="relative border w-1/3 searchbar border-[#406C64]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" className="p-2 ">
                <img src={SearchLogo} alt="" className="w-5" />
              </button>
            </span>
            <input
              type="search"
              name="q"
              onChange={(e) => {
                if (e.target.value != "") {
                  const filtertopic = backup.filter(
                    (q) => q.thread.topic.indexOf(e.target.value) != -1
                  );

                  setQuestion(filtertopic);
                } else {
                  setQuestion(backup);
                }
              }}
              className="py-2 text-sm bg-transparent rounded-md pl-10 focus:outline-none w-full px-2"
              placeholder=""
              autoComplete="off"
            />
          </div>
          {/* Drop-down list */}
          <select
            name=""
            id=""
            defaultValue={"all"}
            className="focus:outline-none border border-[#406C64] bg-transparent w-56 ml-6 px-3"
            onChange={(e) => {
              setFilter(e.target.value);
              if (e.target.value == "mytopic") {
                const filtertopic = question.filter(
                  (q) => q.userid == localStorage.getItem("userid")
                );
                setQuestion(filtertopic);
              } else {
                setQuestion(backup);
              }
            }}
          >
            <option value="all">All</option>
            <option value="mytopic">My Topic</option>
          </select>
        </div>
        <h2 className="text-xl px-32 mt-12">
          We've Found{" "}
          {question && (
            <span className="text-[#406C64]">{question.length}</span>
          )}{" "}
          Question!
        </h2>
        <div className="mt-8 space-y-4">
          {question &&
            user &&
            question.map((question, index) => (
              <div
                key={index}
                className="mx-32 border border-[#406C64] rounded-2xl overflow-hidden relative"
              >
                {question.userid == user.id ? (
                  <img
                    className="absolute top-4 right-4 cursor-pointer"
                    src={X}
                    alt=""
                    onClick={() => {
                      if (confirm("Are you sore delete thread")) {
                        DeleteThread(question.t_id);
                      }
                    }}
                  />
                ) : null}
                <div className="flex items-center px-12 py-6">
                  <div
                    className="w-12 h-12 bg-white rounded-full bg-cover"
                    style={{ backgroundImage: `url(${NoProfile})` }}
                  ></div>
                  <p className="ml-4 text-xl">
                    {question.firstname + " " + question.lastname}
                  </p>
                </div>
                <h3 className="mx-16 text-xl font-bold">
                  {question.thread.topic}
                </h3>
                <p className="mx-16 mt-2 mb-6">{question.thread.description}</p>
                <button
                  className="w-full bg-[#406C64] h-10 text-lg text-white"
                  onClick={() => {
                    router("/comment", {
                      state: {
                        question: question,
                        index: index,
                      },
                    });
                  }}
                >
                  Comment
                </button>
              </div>
            ))}
          <br />
        </div>
      </div>
    </div>
  );
}
export default QandA;
