import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import Brands from "./Components/Brands";
import Categories from "./Components/Categories";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import About from "./Components/About";
import Contact from "./Components/Contact";
import VartaSponsor from "./Components/vartaSponsor";

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

function SectionWrapper({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-50 to-white">
      {/* Fixed Background Pattern */}
      <div className="fixed inset-0 opacity-50 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <SectionWrapper>
          <Slider />
        </SectionWrapper>
        <SectionWrapper>
          <Categories />
        </SectionWrapper>
        <SectionWrapper>
          <VartaSponsor />
        </SectionWrapper>
        <SectionWrapper>
          <Brands />
        </SectionWrapper>
        <SectionWrapper>
          <About />
        </SectionWrapper>
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
        <Footer />
      </div>
    </div>
  );
}

export default App;
