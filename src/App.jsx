import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Reviews from "./Components/Reviews";
import Slider from "./Components/Slider";
import PropTypes from "prop-types";

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired, // 'children' türü doğrulandı
};

function SectionWrapper({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Bileşen sadece bir kez animasyon uygular
    threshold: 0.2, // Bileşenin %20'si görünür olduğunda tetikler
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Animasyon öncesi durumu
      animate={inView ? { opacity: 1, y: 0 } : {}} // Görünümdeyken animasyon
      transition={{ duration: 0.5 }} // Animasyon süresi
    >
      {children}
    </motion.div>
  );
}

function App() {
  const placeId = "ChIJpdjt4l5FyxQRr4TW6AOC3RU";
  return (
    <>
      <Navbar />
      <Slider />
      <SectionWrapper>
        <Products />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
      <SectionWrapper>
        <Reviews placeId={placeId} />
      </SectionWrapper>
      <Footer />
    </>
  );
}

export default App;
