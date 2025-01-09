import { motion } from "framer-motion";
import MainImage from "../assets/car-battery.jpg";
import { MapPin, Phone } from "lucide-react";

export default function Slider() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={MainImage}
          alt="Car Battery"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              Aküde Kalite ve{" "}
              <span className="text-yellow-400 inline-block">Güç</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Yolculuklarınız için güvenilir güç ve dayanıklı akü çözümleri burada
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:0552 008 31 37"
                className="flex items-center justify-center gap-2 bg-[#be6c30] text-white px-8 py-4 rounded-full hover:bg-[#a55b28] transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Hemen Ara</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cb455ee2edd8a5:0x15dd8203e8d684af"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30 text-lg font-medium group"
              >
                <MapPin className="w-5 h-5 group-hover:bounce transition-transform" />
                <span>Konumu Gör</span>
              </motion.a>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                "7/24 Hizmet",
                "Yerinde Montaj",
                "Garantili Ürünler",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
