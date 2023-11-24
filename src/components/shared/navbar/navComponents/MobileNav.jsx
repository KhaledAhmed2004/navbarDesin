import { FiSun } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { useState } from "react";
import NavLinks from "./NavLinks";
import useMode from "./useMode";
const MobileNav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { changeMode, modeIcon } = useMode();

  return (
    <>
      {/* left side */}
      <div
        onClick={() => setMenuIcon(!menuIcon)}
        className="flex-1 sm:hidden text-2xl"
      >
        {menuIcon ? <AiOutlineClose /> : <RiMenu2Fill />}
      </div>
      <div
        style={{
          boxShadow: "-5px -5px 9px #ffffff73,5px 5px 7px #5e687949",
        }}
        className={
          menuIcon
            ? "md:hidden absolute top-[4.8rem] right-0 bottom-0 left-0 flex justify-center h-[80vh] bg-[#FFFFFF1A] dark:bg-[#dddddd] text-white ease-in duration-300 text-center items-center rounded-tl-[50px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[50px] border-2 shadow-2xl backdrop-blur-3xl w-[95%] mx-auto"
            : "md:hidden absolute top-[4.3rem] right-0 left-[-105%] flex text-center justify-center w-full h-[80vh] dark:bg-[#f2a64d] text-white ease-in duration-300 items-center rounded-tl-[50px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[50px]"
        }
      >
        <ul className="flex flex-col gap-3 mt-2 font-semibold text-2xl text-black">
          <NavLinks />
        </ul>
      </div>
      {/* middle Part */}
      <div className="flex-1 sm:hidden flex justify-center mr-6">logo</div>
      {/* Right part */}
      <div className="flex-1 sm:hidden flex justify-end items-center text-lg gap-4">
        <button
          onClick={changeMode}
          className="cursor-pointer text-xl dark:text-white"
        >
          {modeIcon}
        </button>
        <FaRegUser />
        <div className="flex justify-center items-center gap-1 bg-gray-100 p-1 rounded-xl h-7">
          <IoCartOutline className="text-xl" />
          <div className="text-base">+0</div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
