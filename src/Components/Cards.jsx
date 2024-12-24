import { motion } from "framer-motion";
import { HandCoins, ShieldCheck, Truck } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Cards = ({ icon, title, desc }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-between items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {icon}
        </h5>
      </a>
      <h2 className="mb-3 font-semibold text-2xl text-center text-gray-700 dark:text-gray-400">
        {title}
      </h2>
      <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black">
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

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // Çocukların sıralı gelmesi için gecikme
      },
    },
  };

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
      variants={parentVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 mt-12"
    >
      {cardsData.map((card, index) => (
        <Cards
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
