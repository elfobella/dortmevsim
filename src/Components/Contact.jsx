import { Mail, Map, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import GoogleMap from "./GoogleMap";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      content: "0552 008 31 37",
      href: "tel:0552 008 31 37",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      content: "dortmevsimakumarket@gmail.com",
      href: "mailto:dortmevsimakumarket@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adres",
      content: "Zabıtan, istanbul karayolu cad, E5 ÜSTÜ No92/2.b, 41100 İzmit/Kocaeli",
      href: "https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cb455ee2edd8a5:0x15dd8203e8d684af",
    },
  ];

  return (
    <section id="contact" className="relative py-12 md:py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            İletişime Geçin
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Size yardımcı olmak için buradayız
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-2 md:p-3 bg-[#be6c30]/10 text-[#be6c30] rounded-lg group-hover:bg-[#be6c30] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="ml-3 md:ml-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-[#be6c30] transition-colors">
                    {item.content}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
          >
            <GoogleMap
              lat={40.76685930984557}
              lng={29.905802731524748}
              zoom={19}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
