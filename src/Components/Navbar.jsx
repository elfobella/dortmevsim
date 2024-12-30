import Logo from "../assets/dortmevsimaku-logo.jpg";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Phone } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const routers = [
    { link: "Aküm Gelsin Yerinde Montaj", href: "akum-gelsin" },
    { link: "Binek Araç Aküleri", href: "binek" },
    { link: "Start-Stop Aküleri", href: "start-stop" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl p-2 ${
        isScrolled ? "bg-white shadow-md" : "bg-white backdrop-blur"
      } rounded-xl transition-all duration-300 z-50`}
    >
      {/* Navbar container */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link className="relative w-1/2 md:w-1/3" to="/">
          <img className="md:w-1/2" src={Logo} alt="Dört Mevsim Akü Market" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-2 items-center">
          <ul className="flex space-x-4 pr-2">
            {routers.map((route) => (
              <NavLink
                to={`/${route.href}`}
                className={({ isActive }) =>
                  `relative group font-medium ${
                    isActive ? "text-yellow-500" : ""
                  }`
                }
                key={route.link}
              >
                <li>{route.link}</li>
                <span className="w-0 group-hover:w-full transition-all duration-300 ease-in-out h-0.5 bg-black absolute"></span>
              </NavLink>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="tel:0552 008 31 37"
              className="flex items-center md:text-sm hover:bg-white hover:text-black border-black border transition-all text-xs gap-1 bg-black rounded-lg py-1 px-2 text-white"
            >
              <Phone className="w-4 h-4" />
              <span className="md:font-bold">0552 008 31 37</span>
            </a>
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <motion.div whileTap={{ rotate: 90 }}>
              <FaTimes size={24} />
            </motion.div>
          ) : (
            <motion.div whileTap={{ rotate: 90 }}>
              <FaBars size={24} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white py-4 px-6 rounded-xl shadow-lg"
        >
          <ul className="text-xl font-semibold">
            {routers.map((route) => (
              <NavLink
                onClick={() => setIsOpen((o) => !o)}
                to={`/${route.href}`}
                className={({ isActive }) =>
                  `relative group font-medium ${
                    isActive ? "text-yellow-500" : ""
                  }`
                }
                key={route.link}
              >
                <li className="py-2 border-b">{route.link}</li>
              </NavLink>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
