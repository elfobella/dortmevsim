import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Footer() {
  const footerLinks = {
    "Aküm Gelsin": [
      "Yerinde Montaj",
      "7/24 Hizmet",
      "Hızlı Teslimat",
      "Profesyonel Ekip",
    ],
    "Binek Araç Aküleri": [
      "President DC 72Ah",
      "İnci Akü FORMUL A 60Ah",
      "Varta Blue Dynamic 74Ah",
      "Yiğit Akü Silverline 60Ah",
      "Gentry 75Ah",
      "Turkuaz Power 60Ah",
      "Probat 75Ah",
      "Bosch S4 032 74Ah",
      "Platin Premium smf 60Ah",
    ],
    "Start-Stop Aküleri": [
      "Yiğit Akü AGM W3-C2-V2-M1",
      "Yiğit Akü EFB W3-C2-V2-M1",
    ],
  };

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/dortmevsimakumarket/",
      label: "Instagram",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=61563525358166",
      label: "Facebook",
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Zabıtan, istanbul karayolu cad, E5 ÜSTÜ No92/2.b, 41100 İzmit/Kocaeli",
      href: "https://www.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14cb455ee2edd8a5:0x15dd8203e8d684af",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "0552 008 31 37",
      href: "tel:0552 008 31 37",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "dortmevsimakumarket@gmail.com",
      href: "mailto:dortmevsimakumarket@gmail.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Dört Mevsim Akü Market
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kaliteli ve güvenilir akü çözümleri için doğru adres. Her mevsim yanınızdayız!
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-[#be6c30] transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to="/"
                      className="text-sm text-gray-400 hover:text-[#be6c30] transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-start space-x-3 text-gray-400 hover:text-[#be6c30] transition-colors duration-200"
                  >
                    <span className="mt-1 text-[#be6c30]">{info.icon}</span>
                    <span className="text-sm">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Dört Mevsim Akü Market. Tüm hakları saklıdır.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0552 008 31 37"
              className="flex items-center space-x-2 bg-[#be6c30] text-white px-4 py-2 rounded-full hover:bg-[#a55b28] transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Hemen Ara</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
