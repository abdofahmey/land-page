import { useState } from "react";
const links = [
  { name: "Home", href: "#home" },
  { name: "AI Types", href: "#types" },
  { name: "Benefits", href: "#benefits" },
  { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [mobilMinue, setMobilMinue] = useState(false);
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-xl z-50 ">
      <div className="app-container flex justify-between items-center h-16 relative">
        <div className="gradient-text font-bold text-2xl">AI Revolution</div>
        <div className=" hidden md:flex items-center space-x-5">
          {links.map((link) => {
            return (
              <a key={link.name} className="nav-item" href={link.href}>
                {link.name}
              </a>
            );
          })}
        </div>
        <button
          onClick={() => {
            setMobilMinue(!mobilMinue);
          }}
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 foucs:outline-none "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {mobilMinue && (
          <div className="flex flex-col  absolute w-full top-16 left-0 p-2 md:hidden bg-white shadow-lg rounded-b-lg px-2 pt-2 pb-3 space-y-1 ">
            {" "}
            {links.map((link) => {
              return (
                <a key={link.name} className="mobil-nav-item" href={link.href}>
                  {link.name}
                </a>
              );
            })}
           
            <a href="#" className="mobile-nav-btn">
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
