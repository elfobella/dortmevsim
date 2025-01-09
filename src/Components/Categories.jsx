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
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-white text-base">
                        {category.description}
                      </p>
                    </div>
                    
                    <div className="overflow-hidden h-8">
                      <span className="inline-flex items-center text-yellow-400 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                        Detayları Gör
                        <svg 
                          className="w-5 h-5 ml-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
