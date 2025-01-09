import { motion } from "framer-motion";
import Cards from "./Cards";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#be6c30]"
            >
              Neden
            </motion.span>{" "}
            Dört Mevsim Akü Market?
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            Kaliteli hizmet, güvenilir ürünler ve profesyonel ekibimizle her zaman yanınızdayız.
          </motion.p>
        </motion.div>

        <Cards />
      </div>
    </section>
  );
}
