import Logo from "../assets/dortmevsimaku-logo.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-1 md:py-2"
          : "bg-black/30 backdrop-blur-sm py-2 md:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" onClick={handleNavigation} className="flex-shrink-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={Logo}
              alt="Dört Mevsim Akü Market"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {routers.map((route) => (
              <NavLink
                key={route.href}
                to={`/${route.href}`}
                onClick={handleNavigation}
                className={({ isActive }) =>
                  `relative group px-3 py-2 text-sm font-medium transition-colors ${
                    isScrolled
                      ? isActive
                        ? "text-[#be6c30]"
                        : "text-gray-800 hover:text-[#be6c30]"
                      : isActive
                      ? "text-[#be6c30]"
                      : "text-white hover:text-[#be6c30]"
                  }`
                }
              >
                {route.link}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#be6c30] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </NavLink>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0552 008 31 37"
              className="flex items-center space-x-2 bg-[#be6c30] text-white px-4 py-2 rounded-full hover:bg-[#a55b28] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0552 008 31 37</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              } hover:text-[#be6c30]`}
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-current top-3 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {routers.map((route) => (
                <NavLink
                  key={route.href}
                  to={`/${route.href}`}
                  onClick={handleNavigation}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#be6c30]/10 text-[#be6c30]"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#be6c30]"
                    }`
                  }
                >
                  {route.link}
                </NavLink>
              ))}
              <a
                href="tel:0552 008 31 37"
                className="flex items-center space-x-2 px-3 py-2 text-[#be6c30] hover:bg-[#be6c30]/10 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">0552 008 31 37</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
