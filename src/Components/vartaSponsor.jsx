import { motion } from "framer-motion";
import MainImage from "../assets/varta.jpg";
import VartaLogo from "../assets/Varta-Logo.png";
import { Shield, Award, Clock } from "lucide-react";

export default function VartaSponsor() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Orijinal Ürün",
      description: "100% orijinal Varta ürünleri"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Yetkili Servis",
      description: "Kocaeli bölge yetkili servisi"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7/24 Hizmet",
      description: "Kesintisiz teknik destek"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={MainImage}
          className="w-full h-full object-cover"
          alt="Varta Akü"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Dört Mevsim Akü Market, {" "}
                <span className="text-yellow-400">Varta</span>{" "}
                Kocaeli Yetkili Servisi
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                Varta, güvenilirliği ve uzun ömrü ile tanınan bir markadır. 
                Kocaeli'deki yetkili servis hizmetimizle, kaliteli ve dayanıklı 
                akü çözümleri sunuyoruz.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="text-yellow-400 mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Varta Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4">
                <div className="w-full h-full max-w-sm mx-auto lg:mx-0 bg-gradient-to-r from-yellow-400/30 to-blue-500/30 blur-xl" />
              </div>
              <img
                src={VartaLogo}
                alt="Varta Logo"
                className="relative rounded-xl w-full max-w-sm mx-auto lg:mx-0 bg-white/90 p-8"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
