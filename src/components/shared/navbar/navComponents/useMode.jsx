// import { useEffect, useState } from "react";
// import { FiSun } from "react-icons/fi";
// import { BsCloudMoon } from "react-icons/bs";

// const useMode = () => {
//   const [mode, setMode] = useState("light");
//   const [modeIcon, setModeIcon] = useState(false);
//   const changeMode = () => {
//     const html = document.documentElement;
//     if (mode == "light") {
//       html.classList.remove("light");
//       html.classList.add("dark");
//       setMode("dark");
//       setModeIcon(!modeIcon);
//       localStorage.setItem("modeIcon", "darkIcon");
//       localStorage.setItem("mode", "dark");
//     } else {
//       html.classList.remove("dark");
//       html.classList.add("light");
//       setMode("light");
//       setModeIcon(!modeIcon);
//       localStorage.setItem("modeIcon", "lightIcon");
//       localStorage.setItem("mode", "light");
//     }
//   };
//   useEffect(() => {
//     const currentMode = localStorage.getItem("mode") || "light";
//     const currentModeIcon = localStorage.getItem("modeIcon") || "lightIcon";
//     document.documentElement.classList.add(currentMode);
//     setMode(currentMode);
//     setModeIcon(currentModeIcon);
//   }, []);
//   return { changeMode, modeIcon };
// };

// export default useMode;

import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsCloudMoon } from "react-icons/bs";

const useMode = () => {
  const [mode, setMode] = useState("light");
  const [modeIcon, setModeIcon] = useState(<FiSun />);
  const changeMode = () => {
    const html = document.documentElement;
    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      setModeIcon(<BsCloudMoon />);
      localStorage.setItem("modeIcon", "darkIcon");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      setModeIcon(<FiSun />);
      localStorage.setItem("modeIcon", "lightIcon");
      localStorage.setItem("mode", "light");
    }
  };
  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    const currentModeIcon = localStorage.getItem("modeIcon") || "lightIcon";
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
    setModeIcon(currentModeIcon == "lightIcon" ? <FiSun /> : <BsCloudMoon />);
  }, []);
  return { changeMode, modeIcon };
};

export default useMode;
