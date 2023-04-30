import Logo from '../assets/image/logo-lightgreen.svg'
import Readtogether from '../assets/image/readtogether.svg'
import SearchLogo from '../assets/image/search-icon.svg'
import { useState } from 'react'
import NoProfile from '../assets/image/no-profile.jpg'
function QandA(){
    const [question, setQuestion] = useState([
        {
        id: 0,
        name: "Wannasa Chonchoochart",
        title: "ทำยังไงค้าา",
        question: "ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3 ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ"
    },
    {
        id: 1,
        name: "Wannasa Chonchoochart",
        title: "ทำยังไงค้าา",
        question: "ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3 ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ"
    },
    {
        id: 2,
        name: "Wannasa Chonchoochart",
        title: "ทำยังไงค้าา",
        question: "ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3 ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ"
    },
    {
        id: 3,
        name: "Wannasa Chonchoochart",
        title: "ทำยังไงค้าา",
        question: "ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3 ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ"
    },
])
    return (
        <div className="min-h-screen bg-[#F7F6F1]">
            {/* Top Part */}
            <div className='bg-[#406C64] py-10'>
                {/* Top Searchbar */}
            <div className="bg-[#24272C] mx-14 rounded-full px-16 py-3">
                <img src={Logo} alt="" />
            </div>
            {/* Content Part */}
            <div className='flex px-32 mt-12 justify-between items-center'>
                <div>
                    <p className='text-white text-3xl'>Hi, Fah Fiily.</p>
                    <p className='text-white text-4xl max-w-3xl mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    <button className='bg-[#D2F268] px-6 py-1.5 rounded-full shadow-xl text-lg font-semibold mt-10'>Add Question</button>
                </div>
                <div>
                    <img src={Readtogether} alt="" className='relative bottom-5'/>
                </div>
            </div>
            </div>
            {/* Bottom Part */}
            <div>
                <h1 className='px-32 py-8 text-4xl'>Q&A Board</h1>
                {/* Search Wrapper */}
                <div className='flex px-32'>
                    {/* search bar */}
                <div class="relative border w-1/3 searchbar border-[#406C64]">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-2 ">
          <img src={SearchLogo} alt="" className='w-5'/>
        </button>
      </span>
      <input type="search" name="q" class="py-2 text-sm bg-transparent rounded-md pl-10 focus:outline-none w-full px-2" placeholder="" autocomplete="off"/>
    </div>
                    {/* Drop-down list */}
                        <select name="" id="" className='focus:outline-none border border-[#406C64] bg-transparent w-56 ml-6 px-3'>
                        <option value=""> </option>
                        <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
                        </select>
                </div>
                <h2 className='text-xl px-32 mt-12'>We've Found <span className='text-[#406C64]'>858</span> Question!</h2>
                <div className='mt-8'>
                    {question.map ((question) => (
                        <div className='mx-32 border border-[#406C64] rounded-2xl overflow-hidden mb-16'>
                        <div className="flex items-center px-12 py-6">
                        <div className='w-12 h-12 bg-white rounded-full bg-cover' style={{backgroundImage : `url(${NoProfile})`}}></div>
                        <p className='ml-4 text-xl'>Wannasa Chonchoochart</p>
                        </div>
                        <h3 className='mx-16 text-lg'>Title</h3>
                        <p className='mx-16 mt-2 mb-6'>ถึงรุ่นพี่ที่จบ ม.3 นะคะ คือหนูอยากทราบว่า เนื้อหา ม.3 ที่เอาเป็นแบบคร่าวๆก็ได้ค่ะ มีเนื้อหาอะไรบ้างคะ หนูอยากศึกษาไว้ล่วงหน้าก่อนขึ้นม.3 ค่ะ ขอบคุณพี่ๆที่ตอบนะคะ</p>
                        <button className='w-full bg-[#406C64] h-10 text-lg text-white'>Comment</button>
                    </div>
                    ))}
                    <br />
                </div>
            </div>
        </div>
    );
}
export default QandA;
