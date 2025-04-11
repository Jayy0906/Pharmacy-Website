import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import MailPopup from "../MailPopup";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mailOpen, setMailOpen] = useState(false); // NEW

  useEffect(() => {
    const storedPref = localStorage.getItem("theme") === "dark";
    setDarkMode(storedPref);
    document.documentElement.classList.toggle("dark", storedPref);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <>
      <Motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="flex justify-between items-center px-6 md:px-10 py-4 shadow-md bg-white dark:bg-[#1f2f1f] relative z-10"
      >
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              className="h-10 cursor-pointer"
              src="/img/Logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 items-center text-lg font-medium text-[#304d30] dark:text-gray-100">
            <li>
              <a
                href="/"
                className="hover:text-lime-600 dark:hover:text-lime-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-lime-600 dark:hover:text-lime-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/service"
                className="hover:text-lime-600 dark:hover:text-lime-400 transition"
              >
                Service
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="flex items-center gap-1 hover:text-lime-600 dark:hover:text-lime-400 transition"
              >
                Product <ChevronDown size={16} />
              </a>
              <ul className="absolute top-full left-0 mt-1 bg-white dark:bg-[#2c3e2c] rounded-md shadow-lg p-2 w-40 hidden group-hover:block z-50">
                <li>
                  <a
                    href="/product/add"
                    className="block px-4 py-2 hover:bg-lime-100 dark:hover:bg-[#3d5540] rounded"
                  >
                    Add
                  </a>
                </li>
                <li>
                  <a
                    href="/product/sub"
                    className="block px-4 py-2 hover:bg-lime-100 dark:hover:bg-[#3d5540] rounded"
                  >
                    Sub
                  </a>
                </li>
                <li>
                  <a
                    href="/product/mul"
                    className="block px-4 py-2 hover:bg-lime-100 dark:hover:bg-[#3d5540] rounded"
                  >
                    Mul
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-lime-600 dark:hover:text-lime-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200 hover:text-lime-500 dark:hover:text-lime-400 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mail Button */}
          <button
            onClick={() => setMailOpen(true)}
            className="bg-lime-700 text-white px-7 py-2 rounded-lg font-semibold hover:bg-lime-800 transition shadow-md"
          >
            Mail
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex gap-4 items-center">
          <button onClick={toggleDarkMode} title="Toggle Dark Mode">
            {darkMode ? (
              <Sun size={20} className="text-yellow-300" />
            ) : (
              <Moon size={20} />
            )}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Motion.div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <Motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="lg:hidden bg-white dark:bg-[#1f2f1f] w-full shadow-md absolute top-16 left-0 z-0"
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-[#304d30] dark:text-gray-100 font-medium text-lg">
            <li>
              <a href="/" className="hover:text-lime-700">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-lime-700">
                About
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-lime-700">
                Service
              </a>
            </li>
            <li>
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="w-full flex justify-center items-center gap-1 hover:text-lime-700"
              >
                Product <ChevronDown size={16} />
              </button>
              {productOpen && (
                <ul className="mt-2 p-2 w-full max-w-xs mx-auto">
                  <li>
                    <a
                      href="/product/add"
                      className="block px-4 py-2 hover:bg-lime-100 dark:hover:bg-[#3d5540] rounded"
                    >
                      Add
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product/sub"
                      className="block px-4 py-2 hover:bg-lime-100 dark:hover:bg-[#3d5540] rounded"
                    >
                      Sub
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product/mul"
                      className="block px-4 py-2 hover:bg-lime-100 dark:hover:bg-[#3d5540] rounded"
                    >
                      Mul
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/contact" className="hover:text-lime-700">
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setMailOpen(true);
                  setMenuOpen(false);
                }}
                className="bg-[#304d30] dark:bg-lime-600 text-white px-4 py-2 rounded shadow"
              >
                Mail
              </button>
            </li>
          </ul>
        </Motion.div>
      )}

      {/* Mail Popup Component */}
      <MailPopup isOpen={mailOpen} onClose={() => setMailOpen(false)} />
    </>
  );
};

export default Navbar;
