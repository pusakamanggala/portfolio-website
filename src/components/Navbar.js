import { useState } from "react";
import LightModeIcon from "../icons/lightMode.png";
import { Link } from "react-scroll";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import DarkModeIcon from "../icons/darkMode.png";
import Resume from "../resume/Resume.pdf";
import { motion } from "framer-motion";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { dark, ThemeToggle } = useContext(ThemeContext);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${
        navbar ? "h-dvh md:h-auto" : ""
      }  backdrop-blur-sm bg-teal/5 fixed z-10 ${dark && "dark"}`}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-10xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h1 className="text-3xl text-slate-900  dark:text-teal-300">
              Pusaka.
            </h1>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <Link
                  activeClass="text-black dark:text-teal-300"
                  smooth={true}
                  spy={true}
                  to="HeroSection"
                  className="text-2xl  text-white cursor-pointer hover:text-3xl "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-black dark:text-teal-300"
                  smooth={true}
                  spy={true}
                  to="Project"
                  className="text-2xl  text-white cursor-pointer hover:text-3xl"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="text-black dark:text-teal-300"
                  smooth={true}
                  spy={true}
                  to="Skills"
                  className="text-2xl  text-white cursor-pointer hover:text-3xl"
                >
                  Skills
                </Link>
              </li>
              <li className=" cursor-pointer ">
                <a
                  href={Resume}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl  text-white hover:text-3xl"
                >
                  Resume
                </a>
              </li>
              <li className="md:static absolute right-5 bottom-5">
                <img
                  className="h-9 cursor-pointer animate-bounce"
                  src={dark ? LightModeIcon : DarkModeIcon}
                  alt=""
                  onClick={() => ThemeToggle()}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
