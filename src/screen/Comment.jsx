import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import path from "../../path";
import uuid from "react-uuid";
import { useLocation } from "react-router-dom";
import X from "../assets/image/x.png";

function Comment() {
  const [comment, setComment] = useState();
  const [textComment, setTextComment] = useState("");
  const location = useLocation();
  const [user, setUser] = useState();
  const [thread, setThread] = useState(location.state.question);
  const [threadIndex, setThreadIndex] = useState(location.state.index);
  if (location.state == undefined) {
    window.location.replace("/question");
  }
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
  useEffect(() => {
    Getuser();
    GetThread();
  }, []);

  function DeleteComment(index) {
    axios
      .post(`${path}/deletecomment`, {
        thread_index: threadIndex,
        comment_index: index,
      })
      .then((res) => {
        console.log(res.data);
        GetThread();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function GetThread() {
    axios
      .post(`${path}/getthreadid`, {
        t_id: thread.t_id,
      })
      .then((res) => {
        setThread(res.data[0]);
        setComment(res.data[0].comments);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function AddComment() {
    axios
      .post(`${path}/addcomment`, {
        t_id: thread.t_id,
        comment: {
          id: uuid(),
          firstname: user.firstname,
          lastname: user.lastname,
          comment: textComment,
          user_id: localStorage.getItem("userid"),
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data == "successfully") {
          GetThread();
          setTextComment("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="min-h-screen bg-[#366159] pt-10 pb-24">
      <Navbar />
      {/* Content */}
      {thread && (
        <div className="mx-auto px-12 py-8 mt-24 bg-[#F7F6F1] rounded-2xl max-w-4xl flex flex-col">
          <div className="flex items-center">
            <div className="bg-white w-12 h-12 rounded-full"></div>
            <h1 className="ml-4 text-xl">
              {thread.firstname + " " + thread.lastname}
            </h1>
          </div>
          {/* Title adn post */}
          <div className="ml-16">
            <p className="text-lg mt-3">{thread.thread.topic}</p>
            <p className="mt-3">{thread.thread.description}</p>
            <div className="space-x-2">
              {thread.category.map((e, index) => (
                <button
                  key={index}
                  className="px-4 py-1 rounded-2xl border border-[#24272C] mt-3 cursor-default"
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
          <hr className="my-12 border-0 bg-black h-px" />
          {/* User Comment */}
          {comment && thread && user &&
            comment.map((value, index) => (
              <div
                key={index}
                className="border border-[#366159] rounded-2xl p-4 mx-12 mb-6 relative"
              >
                {value.user_id == user.id || thread.userid == user.id ? (
                  <img
                    onClick={() => {
                      if (confirm("Are you sore delete comment")) {
                        DeleteComment(index);
                      }
                    }}
                    className="absolute right-4 top-4 w-5 cursor-pointer"
                    src={X}
                    alt=""
                  />
                ) : null}
                <div className="flex items-center">
                  <div className="bg-white w-10 h-10 rounded-full"></div>
                  <h1 className="ml-4 text-xl">
                    {value.firstname + " " + value.lastname}
                  </h1>
                </div>
                <p className="ml-14 mt-3">{value.comment}</p>
              </div>
            ))}

          {/* Comment here */}
          <div className="mx-12 mt-12">
            <h1 className="text-lg">Comment</h1>
            <div className="flex">
              <input
                type="text"
                value={textComment}
                className="border border-[#366159] bg-transparent rounded-2xl w-3/4 py-1 px-4"
                onChange={(e) => {
                  setTextComment(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  AddComment();
                  setTextComment("");
                }}
                className="bg-[#366159] rounded-2xl px-5 text-white ml-4"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;
