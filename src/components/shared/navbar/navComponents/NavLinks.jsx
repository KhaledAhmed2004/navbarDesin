import { NavLink } from "react-router-dom";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/allFoodItems", label: "All Food Items" },
  { to: "/blog", label: "Blog" },
];

const NavLinks = () => {
  return (
    <>
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? "underline underline-offset-2" : ""
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
