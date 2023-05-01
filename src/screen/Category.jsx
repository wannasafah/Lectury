import Logo from '../assets/image/logo-lightgreen.svg'
import Book1 from "../assets/image/Book1.svg";
import { useState } from 'react';

function Showmore (){
    const [category, setCategory] = useState([
        {
            id : 0,
            category : "Math"
        },
        {
            id : 1,
            category : "Science"
        },
        {
            id : 2,
            category : "English"
        },
        {
            id : 3,
            category : "Health"
        },
        {
            id : 4,
            category : "Social"
        },
        {
            id : 5,
            category : "History"
        },
        {
            id : 6,
            category : "Physics"
        },
        {
            id : 7,
            category : "Chemical"
        },
    ])
    return (
        <div className="min-h-screen bg-[#F7F6F1] py-10">
            <div className="bg-[#24272C] mx-14 rounded-full px-16 py-3 cursor-pointer"
          onClick={() => {
            router("/home");
          }}>
            <img src={Logo} alt="" />
          </div>
          {/* Content */}
          <div className='my-20 mx-72'>
            <h1 className='text-6xl text-center'>New Arrival</h1>
            {/* Category */}
            <div className='flex mt-20 flex-wrap gap-x-14 gap-y-20'>
                {category.map ((item) => (
                    <div className='bg-[#D9D9D9] w-72 py-6 text-center rounded-2xl mx-auto'>
                    <h2 className='text-3xl'>{item.category}</h2>
                    <img src={Book1} alt="" className='mx-auto mt-2'/>
                </div>
                ))}
            </div>
          </div>
        </div>
    );
}
export default Showmore;
