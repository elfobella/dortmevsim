import { motion } from "framer-motion";
import Bosch from "../assets/Bosch_logo.png";
import Gentry from "../assets/gentry-logo.png";
import inciAku from "../assets/incilogo-dosya.png";
import Platin from "../assets/platin-logo.png";
import Prs from "../assets/prs-logo.png.webp";
import Turkuaz from "../assets/turkuaz-logo.png";
import Varta from "../assets/Varta-Logo.png";
import Yigit from "../assets/yigitaku.png";

export default function Brands() {
  const brands = [Bosch, Yigit, Varta, Gentry, Platin, inciAku, Prs, Turkuaz];

  return (
    <section className="relative py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8"
      >
        Markalarımız
      </motion.h2>

      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white via-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white via-white to-transparent z-10" />

        {/* Brands Container */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* İlk set markalar */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[180px] md:w-[240px] mx-6 md:mx-10 py-4 flex items-center justify-center"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="max-h-16 md:max-h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* İkinci set markalar (sonsuz döngü için) */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-[180px] md:w-[240px] mx-6 md:mx-10 py-4 flex items-center justify-center"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="max-h-16 md:max-h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
