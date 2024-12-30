import { motion } from "framer-motion";
import StartStop from "../assets/start-stop.jpg";
import NormalCar from "../assets/normal-car.jpg";
import HemenTeslim from "../assets/hemen-teslim.jpg";
import { Link } from "react-router";

const Categories = () => {
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

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative hover:ring-4 ring-yellow-400  bg-white group rounded-lg overflow-hidden transition-all duration-300"
            >
              <Link to={`/${category.href}`}>
                {/* Görsel Arka Plan */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full group-hover:scale-110 transition-all h-full object-cover"
                />
                {/* İçerik Bölmesi */}
                <div className="relative z-10 p-8 bg-gradient-to-br from-black to-transparent">
                  {/* Kategori Başlık */}
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">
                    {category.title}
                  </h3>
                  {/* Kategori Açıklama */}
                  <p className="text-white text-sm">{category.description}</p>
                </div>
                {/* Alt Gölge */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-transparent to-transparent shadow-lg"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
