import { useState } from "react";
import {AiOutlineMenu,AiFillCloseCircle} from "react-icons/ai";
const Header = () => {
    const [toggle,setToggel] = useState(false);

  return (
    <div className="bg-indigo-600 p-4">
        <div className="flex justify-between items-center max-w-[1240px] mx-auto">
            <div className="text-3xl font-bold text-blue-100">   
                Vidya Tech
            </div>
            {toggle ? <AiFillCloseCircle className="text-white text-xl" onClick={() => setToggel(!toggle)}/> : <AiOutlineMenu className="text-white text-xl md:hidden" onClick={() => setToggel(!toggle)}/>}


            <ul className="md:flex gap-5 text-yellow-50 hidden cursor-pointer"> 
                <li>Home</li>
                <li>Company</li>
                <li>Resource</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* Responsive Menu */}
            <ul className={`cursor-pointer h-full duration-300 md:hidden fixed bg-black text-white top-[68px] left-[-100%] w-full ${toggle ? `left-[0]` : `left:[-100%]`} `}>
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resource</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header