import Logo from "../assets/image/logo-lightgreen.svg";
import Book1 from "../assets/image/Book1.svg";
import { useState } from "react";
import Navbar from "../components/Navbar";
import English from "../assets/image/english.png"
import Chinese from "../assets/image/chinese.png"
import Japanese from "../assets/image/japanese.png"
import Korean from "../assets/image/korean.png"
import Thai from "../assets/image/thai.png"
import Algebra from "../assets/image/algebra.png"
import Calculus from "../assets/image/calculus.png"
import Physics from "../assets/image/physics.png"
import Chemistry from "../assets/image/chemistry.png"
import Astronomy from "../assets/image/astronomy.png"
import Computer from "../assets/image/computer.png"
import Law from "../assets/image/law.png"
import Religion from "../assets/image/religion.png"
import Marketing from "../assets/image/marketing.png"
import Other from "../assets/image/other.png"
import History from "../assets/image/history.png"
import Sociology from "../assets/image/sociology.png"
import Health from "../assets/image/health.png"

function Category() {
  const [category, setCategory] = useState([
    // Language
    { value: "English", label: "English", img: English },
    { value: "Chinese", label: "Chinese", img: Chinese },
    { value: "Japanese", label: "Japanese", img: Japanese},
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
    { value: "Health", label: "Health", img: Health }
]);
  const options = [
    // Language
    { value: "English", label: "English", img: English },
    { value: "Chinese", label: "Chinese", img: "../assets/image/chinese.png" },
    { value: "Japanese", label: "Japanese", img: "../assets/image/japanese.png"},
    { value: "Korean", label: "Korean", img: "../assets/image/korean.png" },
    { value: "Thai", label: "Thai", img: "../assets/image/thai.png" },
    // Math
    { value: "Algebra", label: "Algebra", img: "../assets/image/algebra.png" },
    { value: "Calculus", label: "Calculus", img: "../assets/image/calculus.png" },
    // Science
    { value: "Physics", label: "Physics", img: "../assets/image/physics.png" },
    { value: "Chemistry", label: "Chemistry", img: "../assets/image/chemistry.png" },
    { value: "Astronomy", label: "Astronomy", img: "../assets/image/astronomy.png" },
    { value: "Computer", label: "Computer", img: "../assets/image/computer.png" },
    { value: "Law", label: "Law", img: "../assets/image/law.png" },
    { value: "Religion", label: "Religion", img: "../assets/image/religion.png" },
    { value: "Marketing", label: "Marketing", img: "../assets/image/marketing.png" },
    { value: "Other", label: "Other", img: "../assets/image/other.png" },
    // Social Studies
    { value: "History", label: "History", img: "../assets/image/history.png" },
    { value: "Sociology", label: "Sociology", img: "../assets/image/sociology.png" },
    // Health
    { value: "Health", label: "Health", img: "../assets/image/health.png" }
];
  return (
    <div className="min-h-screen bg-[#F7F6F1] py-10">
      <Navbar/>
      {/* Content */}
      <div className="my-20 max-w-5xl mx-auto">
        <h1 className="text-6xl text-center">All Category</h1>
        {/* Category */}
        <div className="grid grid-cols-4 gap-4 my-20">
          {category.map((item) => (
            <div className="bg-[#D9D9D9] text-center rounded-2xl col-span-1 p-10">
              <h2 className="text-3xl">{item.label}</h2>
              <img src={item.img} alt="" className="mx-auto mt-2 w-full mt-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Category;
