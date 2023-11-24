import NavBtn from "./navComponents/NavBtn";
import NavLinks from "./navComponents/NavLinks";
import MobileNav from "./navComponents/MobileNav";
import useMode from "./navComponents/useMode";
import logo from "../../../assets/logo/al-malaki.png";

const Navbar = () => {
  const { changeMode, modeIcon } = useMode();

  return (
    <nav className="sticky dark:bg-[#1f2a3d] dark:text-white top-5 my-5 flex justify-between items-center backdrop-blur-sm z-20 shadow-lg py-3 px-3">
      {/* Logo */}
      <div className="hidden sm:flex lg:flex-1">
        {/* <img src={logoy} alt="" /> */}
        logo name
      </div>

      {/* Navigation Links */}
      <ul className="hidden sm:flex sm:gap-5 lg:gap-8 lg:flex-1 xl:justify-center sm:text-base lg:text-lg font-medium">
        <NavLinks></NavLinks>
      </ul>

      {/* Mod Icon and Navigation Button */}
      <div className="hidden sm:flex justify-end items-center sm:gap-5 lg:gap-8 lg:flex-1 sm:text-base lg:text-lg font-medium">
        <button
          className="cursor-pointer text-xl dark:text-white"
          onClick={changeMode}
        >
          {modeIcon}
        </button>
        <NavBtn />
      </div>
      {/* Mobile screen navbar */}
      <MobileNav />
    </nav>
  );
};

export default Navbar;
