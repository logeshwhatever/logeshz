import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="m-auto pt-10 pb-10">
        <nav className="flex justify-center space-x-0">
          <ul className="flex space-x-10 md:space-x-20">
            <button className="text-white uppercase italic font-bold text-xs opacity-70">
              <CustomLink to="/Work">Work</CustomLink>
            </button>
            <button className="text-white uppercase italic font-bold text-xs opacity-70">
              <CustomLink to="/Writings">Writings</CustomLink>
            </button>
            <button className="text-white uppercase italic font-bold text-xs opacity-70">
              <CustomLink to="/About">About</CustomLink>
            </button>
          </ul>
        </nav>
      </div>
      {/* <div className="grid justify-items-center">
        <img src="ZNMD.png" alt="" className="w-2/3 mt-16 h-auto " />
      </div> */}
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "text-yellow-300 opacity-100" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
