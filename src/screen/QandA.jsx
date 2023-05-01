import Logo from "../assets/image/logo-lightgreen.svg";
import Logodark from "../assets/image/logo-darkgreen.png";
import Readtogether from "../assets/image/readtogether.svg";
import SearchLogo from "../assets/image/search-icon.svg";
import { useState } from "react";
import NoProfile from "../assets/image/no-profile.jpg";
import X from "../assets/image/x.png";
import { useNavigate } from "react-router-dom";

function QandA() {
  const router = useNavigate();
  const [modal, setModal] = useState(false);
  const [question, setQuestion] = useState([
    {
      id: 0,
      name: "Wannasa Chonchoochart",
      title: "ทำยังไงค้าา",
      question:
        "ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3 ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ",
    },
    {
      id: 1,
      name: "Wannasa Chonchoochart",
      title: "ทำยังไงค้าา",
      question:
        "ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3 ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ",
    },
    {
      id: 2,
      name: "Wannasa Chonchoochart",
      title: "ทำยังไงค้าา",
      question:
        "ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3 ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ",
    },
    {
      id: 3,
      name: "Wannasa Chonchoochart",
      title: "ทำยังไงค้าา",
      question:
        "ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3 ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ",
    },
  ]);
  function openModal (){
    setModal(true);
    // document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  }
  function closeModal (){
    setModal(false);
    document.body.style.position = '';
    document.body.style.top = '';
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
                }}
              />
              <img src={Logodark} className="w-[50%] mb-6" alt="" />
              <p className="mb-1">Title</p>
              <input
                type="text"
                className="w-full border border-[#406C64] rounded-2xl bg-transparent mb-4 px-4 py-1.5"
              />
              <p className="mb-1">Question</p>
              <textarea
                type="text"
                rows={4}
                className="w-full border border-[#406C64] rounded-2xl bg-transparent mb-4 px-4 py-1.5"
              />

              <button
                className=" bg-[#406C64] rounded-2xl text-[#ffff] mt-8 py-1.5 w-full shadow-lg"
                onClick={() => {}}
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
        <div
          className="bg-[#24272C] mx-14 rounded-full px-16 py-3 cursor-pointer"
          onClick={() => {
            router("/home");
          }}
        >
          <img src={Logo} alt="" />
        </div>
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
          <div class="relative border w-1/3 searchbar border-[#406C64]">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" class="p-2 ">
                <img src={SearchLogo} alt="" className="w-5" />
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 text-sm bg-transparent rounded-md pl-10 focus:outline-none w-full px-2"
              placeholder=""
              autocomplete="off"
            />
          </div>
          {/* Drop-down list */}
          <select
            name=""
            id=""
            className="focus:outline-none border border-[#406C64] bg-transparent w-56 ml-6 px-3"
          >
            <option value=""> </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <h2 className="text-xl px-32 mt-12">
          We've Found <span className="text-[#406C64]">858</span> Question!
        </h2>
        <div className="mt-8">
          {question.map((question) => (
            <div className="mx-32 border border-[#406C64] rounded-2xl overflow-hidden mb-16">
              <div className="flex items-center px-12 py-6">
                <div
                  className="w-12 h-12 bg-white rounded-full bg-cover" style={{ backgroundImage: `url(${NoProfile})` }}></div>
                <p className="ml-4 text-xl">Wannasa Chonchoochart</p>
              </div>
              <h3 className="mx-16 text-lg">Title</h3>
              <p className="mx-16 mt-2 mb-6">
                ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3
                ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ
                หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ
              </p>
              <button className="w-full bg-[#406C64] h-10 text-lg text-white">
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
