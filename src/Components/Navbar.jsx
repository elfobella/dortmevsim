import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { MapPin, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routers = [
    { link: "Ürünlerimiz", href: "products" },
    { link: "İletişim", href: "contact" },
    { link: "Hakkımızda", href: "about" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-2 bg-white border-b border-black shadow-md z-50 transition-all">
      {/* Navbar container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-base md:text-2xl font-bold text-gray-700">
          Dört Mevsim Akü Market
        </div>

        {/* Desktop menu */}
        <div className="flex gap-2 items-center">
          <ul className="hidden md:flex space-x-6 border-r border-black pr-2">
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
          className="md:hidden bg-white py-4 px-6 space-y-4"
        >
          <ul className="space-y-2">
            {routers.map((route) => (
              <a key={route.link} href={"#" + route.href}>
                <li>{route.link}</li>
              </a>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
