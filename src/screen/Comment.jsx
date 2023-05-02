import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import path from "../../path";
function Comment() {
  const [thread, setThread] = useState();
  const [comment, setComment] = useState();
  const [textComment, setTextComment] = useState("");
  useEffect(() => {
    axios
      .post(`${path}/getthreadid`, {
        t_id: "44863703-8459-a2f4-f953-f6fa9a7cd9e9",
      })
      .then((res) => {
        setThread(res.data[0]);
        setComment(res.data[0].comment);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function AddComment() {
    axios
      .post(`${path}/addcomment`, {
        thread_id: thread.t_id,
        comment: {
          id: "1",
          firstname: "jean",
          lastname: "tiwat",
          comment: textComment,
          user_id : localStorage.getItem('userid')
        },
      })
      .then((res) => {
        console.log(res.data);
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
            <button className="px-4 py-1 rounded-2xl border border-[#24272C] mt-3 cursor-default">
              ทั่วไป
            </button>
          </div>
          <hr className="my-12 border-0 bg-black h-px" />
          {/* User Comment */}
          <div className="border border-[#366159] rounded-2xl p-4 mx-12 mb-6">
            <div className="flex items-center">
              <div className="bg-white w-10 h-10 rounded-full"></div>
              <h1 className="ml-4 text-xl">Wannasa Chonchoochart</h1>
            </div>
            <p className="ml-14 mt-3">ลองไปศึกษาพวกคณิตศาสตร์เพิ่มเติมนะ</p>
          </div>

          {/* Comment here */}
          <div className="mx-12 mt-12">
            <h1 className="text-lg">Comment</h1>
            <div className="flex">
              <input
                type="text"
                className="border border-[#366159] bg-transparent rounded-2xl w-3/4 py-1 px-4"
                onChange={(e) => {
                  setTextComment(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  AddComment();
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
