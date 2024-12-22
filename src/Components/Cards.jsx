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
      className="bg-white border-2 flex flex-col items-center text-center border-[#be6c30] p-6 rounded"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
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
      icon: <ShieldCheck className="text-[#be6c30] w-16 h-16" />,
      title: "Güvenilir Kalite",
      desc: "Yalnızca uzun ömürlü, güvenilir markaların akülerini sunuyoruz.",
    },
    {
      icon: <HandCoins className="text-[#be6c30] w-16 h-16" />,
      title: "Her İhtiyaca Uygun",
      desc: "Binek, ticari araç veya motosiklet fark etmez; geniş ürün yelpazesiyle yanınızdayız.",
    },
    {
      icon: <Truck className="text-[#be6c30] w-16 h-16" />,
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
