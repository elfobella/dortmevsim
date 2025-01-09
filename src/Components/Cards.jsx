import { motion } from "framer-motion";
import { HandCoins, ShieldCheck, Truck } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Card = ({ icon, title, desc }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col justify-between items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
    >
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h2 className="mb-4 font-bold text-2xl text-center text-gray-800 group-hover:text-[#be6c30] transition-colors">
        {title}
      </h2>
      <p className="text-center text-gray-600 group-hover:text-gray-800 transition-colors">
        {desc}
      </p>
    </motion.div>
  );
};

const CardsList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardsData = [
    {
      icon: <ShieldCheck className="text-[#be6c30] w-20 h-20" />,
      title: "Güvenilir Kalite",
      desc: "Yalnızca uzun ömürlü, güvenilir markaların akülerini sunuyoruz.",
    },
    {
      icon: <HandCoins className="text-[#be6c30] w-20 h-20" />,
      title: "Her İhtiyaca Uygun",
      desc: "Binek, ticari araç veya motosiklet fark etmez; geniş ürün yelpazesiyle yanınızdayız.",
    },
    {
      icon: <Truck className="text-[#be6c30] w-20 h-20" />,
      title: "Hızlı Teslimat",
      desc: "Stok garantisiyle ihtiyacınız olan aküyü hemen temin edin.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mt-12"
    >
      {cardsData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          desc={card.desc}
        />
      ))}
    </motion.div>
  );
};

export default CardsList;
