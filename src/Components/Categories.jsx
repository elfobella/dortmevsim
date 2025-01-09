import { motion } from "framer-motion";
import StartStop from "../assets/start-stop.jpg";
import NormalCar from "../assets/normal-car.jpg";
import HemenTeslim from "../assets/hemen-teslim.jpg";
import { Link } from "react-router";
import { useState, useEffect } from "react";

const Categories = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const categories = [
    {
      title: "Binek Araç Aküleri",
      description: "Binek araçlar için kaliteli aküler.",
      image: NormalCar,
      href: "binek",
    },
    {
      title: "Start-Stop Aküleri",
      description: "Start-stop sistemli araçlar için özel aküler.",
      image: StartStop,
      href: "start-stop",
    },
    {
      title: "Aküm Gelsin Yerinde Montaj",
      description: "Akünüzü yerinde hızlı ve kolayca değiştirin.",
      image: HemenTeslim,
      href: "akum-gelsin",
    },
  ];

  // Mobil tasarım komponenti
  const MobileCard = ({ category, index }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative overflow-hidden rounded-xl shadow-lg"
    >
      <Link to={`/${category.href}`}>
        <div className="relative h-48">
          <img
            src={category.image}
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-200">
                {category.description}
              </p>
              <div className="mt-3 inline-flex items-center text-yellow-400 text-sm">
                <span>Detaylar için dokun</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  // Desktop tasarım komponenti
  const DesktopCard = ({ category, index }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <Link to={`/${category.href}`}>
        <div className="relative h-[400px]">
          <img
            src={category.image}
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <h3 className="text-2xl font-bold mb-3 text-yellow-400 group-hover:text-yellow-300">
              {category.title}
            </h3>
            <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {category.description}
            </p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center text-yellow-400 group-hover:text-yellow-300">
                Detayları Gör
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category, index) => (
            isTouchDevice ? (
              <MobileCard key={index} category={category} index={index} />
            ) : (
              <DesktopCard key={index} category={category} index={index} />
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
