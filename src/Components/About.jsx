import { motion } from "framer-motion";
import { Shield, Clock, Wrench, Trophy } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Güvenilir Hizmet",
      description: "10 yılı aşkın tecrübemizle sektörde güvenilir hizmet sunuyoruz.",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "7/24 Hizmet",
      description: "Acil durumlarınızda 7/24 yanınızdayız.",
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Profesyonel Ekip",
      description: "Uzman ekibimizle kaliteli ve hızlı çözümler sunuyoruz.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Kaliteli Ürünler",
      description: "Orijinal ve garantili ürünlerle hizmet veriyoruz.",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-[#be6c30]">Neden</span>{" "}
            Dört Mevsim Akü Market?
          </h2>
          <p className="text-lg text-gray-600">
            Kaliteli hizmet, güvenilir ürünler ve profesyonel ekibimizle her zaman yanınızdayız.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative z-10 h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Icon Container */}
                <div className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center text-[#be6c30] bg-gradient-to-br ${feature.color}`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#be6c30]/0 to-[#be6c30]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Background Gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#be6c30] to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
