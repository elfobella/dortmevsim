import Logo from "../assets/dortmevsimaku-logo.jpg";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const routers = [
    { link: "Ürünlerimiz", href: "products" },
    { link: "İletişim", href: "contact" },
    { link: "Hakkımızda", href: "about" },
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
        <img
          className="w-1/2 md:w-1/6"
          src={Logo}
          alt="Dört Mevsim Akü Market"
        />

        {/* Desktop menu */}
        <div className="hidden md:flex gap-2 items-center">
          <ul className="flex space-x-6 border-r border-black pr-2">
            {routers.map((route) => (
              <a
                className="relative group font-medium"
                key={route.link}
                href={"#" + route.href}
              >
                <li>{route.link}</li>
                <span className="w-0 group-hover:w-full transition-all duration-300 ease-in-out h-0.5 bg-black absolute"></span>
              </a>
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
              <a
                className="active:text-gray-400"
                key={route.link}
                href={"#" + route.href}
              >
                <li className="py-2 border-b">{route.link}</li>
              </a>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
