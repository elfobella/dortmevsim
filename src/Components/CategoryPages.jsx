// Categories.js
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import StartStop from "../assets/start-stop.jpg";
import NormalCar from "../assets/normal-car.jpg";
import HemenTeslim from "../assets/hemen-teslim.jpg";

import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";
import Img5 from "../assets/5.jpg";
import Img6 from "../assets/6.jpg";
import Img7 from "../assets/7.jpg";
import Img8 from "../assets/8.jpg";
import Img9 from "../assets/9.jpg";
import Img10 from "../assets/10.jpg";
import Img11 from "../assets/11.jpg";

import arama from "../assets/arama.jpg";
import gps from "../assets/gps.jpg";
import teknisyen from "../assets/teknisyen.jpg";

const categoriesContent = {
  "/binek": {
    info: "Akülerimiz",
    title: "Binek Araçlar",
    description: "Binek araç kategorisi, konforlu ve hızlı araçlar içerir.",
    image: NormalCar,
    productImages: [
      {
        name: "Platin Premium smf 60Ah",
        description:
          "Modern araçlar için tasarlanmış, yüksek performans ve dayanıklılık sunar.",
        image: Img3,
      },
      {
        name: "President DC 72Ah",
        description:
          "Uzun ömürlü performansı ve yüksek marş gücüyle her koşulda güvenilir bir seçenek.",
        image: Img4,
      },
      {
        name: "İnci Akü FORMUL A 60Ah",
        description:
          "Ekonomik ve dayanıklı bir çözüm sunan, modern araçlar için ideal akü.",
        image: Img5,
      },
      {
        name: "Varta Blue Dynamic 74Ah",
        description:
          "Yüksek kaliteli üretim ve üstün enerji kapasitesiyle maksimum performans.",
        image: Img6,
      },
      {
        name: "Yiğit Akü Silverline 60Ah",
        description:
          "Yenilikçi teknolojisiyle uzun ömürlü ve çevre dostu enerji kaynağı.",
        image: Img7,
      },
      {
        name: "Gentry 75Ah",
        description:
          "Güçlü marş gücü ve dayanıklılığıyla ticari araçlar için mükemmel tercih.",
        image: Img8,
      },
      {
        name: "Turkuaz Power 60Ah",
        description:
          "Yüksek güvenilirlik ve uygun fiyat avantajını bir arada sunar.",
        image: Img9,
      },
      {
        name: "Probat 75Ah",
        description:
          "Yoğun kullanım için geliştirilmiş, güçlü ve dayanıklı akü.",
        image: Img10,
      },
      {
        name: "Bosch S4 032 74Ah",
        description:
          "Üstün Alman mühendisliğiyle üretilmiş, uzun ömürlü bir akü çözümü.",
        image: Img11,
      },
      // Diğer ürünler
    ],
  },
  "/start-stop": {
    info: "Akülerimiz",
    title: "Start-Stop Araçlar",
    description: "Verimli sürüş için en son Start-Stop sistemleri.",
    image: StartStop,
    productImages: [
      {
        name: "Yiğit Akü AGM W3-C2-V2-M1",
        description:
          "Gelişmiş AGM teknolojisiyle yüksek enerji ihtiyacını karşılayan, bakım gerektirmeyen üstün performans.",
        image: Img1,
      },
      {
        name: "Yiğit Akü EFB W3-C2-V2-M1",
        description:
          "Start-Stop özellikli araçlar için özel olarak tasarlanmış, uzun ömürlü ve güvenilir enerji kaynağı.",
        image: Img2,
      },
    ],
  },
  "/akum-gelsin": {
    info: "Konumunuza Gelelim",
    title: "Aküm Gelsin,Yerinde Montaj",
    description: "Araç bataryalarınızı en iyi seçeneklerle şarj edin.",
    image: HemenTeslim,
    productImages: [
      {
        name: "Bizi Arayın",
        description:
          "7/24 hizmet veren ekibimizle iletişime geçin. Size en hızlı şekilde yardımcı olalım!",
        image: arama,
      },
      {
        name: "Konumunuzu Söyleyin",
        description:
          "Bize bulunduğunuz yeri bildirin. Ekibimiz en kısa sürede adresinize gelsin.",
        image: gps,
      },
      {
        name: "Gelip Akünüzü Takalım!",
        description:
          "Uzman ekiplerimiz adresinize gelerek, aracınızın aküsünü hızlı ve güvenilir bir şekilde değiştirir.",
        image: teknisyen,
      },

      // Diğer ürünler
    ],
  },
};

const Layout = ({ title, description, image, info, productImages }) => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Image with Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#be6c30] text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-[#a55b28] transition-colors duration-300"
            >
              <span>Detaylı Bilgi</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Products Section - Yeniden tasarlandı */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {info}
            </h2>
            <div className="flex justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg text-gray-600">
              En kaliteli ürünleri en uygun fiyatlarla sunuyoruz
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productImages.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#be6c30] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#be6c30]/20 transition-colors duration-300" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#be6c30] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#be6c30] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#be6c30] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#be6c30] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const CategoryPages = () => {
  const location = useLocation();
  const categoryData = categoriesContent[location.pathname];

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Kategori bulunamadı</div>
      </div>
    );
  }

  return <Layout {...categoryData} />;
};

export default CategoryPages;
