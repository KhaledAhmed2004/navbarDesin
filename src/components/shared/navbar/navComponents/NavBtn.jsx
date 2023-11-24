import { Link } from "react-router-dom";

const NavBtn = () => {
  return (
    <div className="flex sm:gap-5 lg:gap-8 uppercase">
      <Link
        to={"/login"}
        className="bg-gray-800 text-white hover:scale-105 duration-150 ease-in py-2 px-8 rounded-full flex items-center justify-center"
      >
        Login
      </Link>
      <Link className="btn hover:scale-105 duration-150 ease-in border-2 border-gray-800 py-2 px-8 rounded-full flex items-center justify-center">
        Sign Up
      </Link>
    </div>
  );
};

export default NavBtn;

NavBtn.js;
