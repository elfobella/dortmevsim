import { HandCoins, ShieldCheck, Truck } from "lucide-react";
import Cards from "./Cards";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="bg-black py-36">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-white italic text-center text-6xl font-bold">
          <strong className="text-[#be6c30]">Neden</strong> Dört Mevsim Akü
          Market?
        </h3>
        <div>
          <Cards />
        </div>
      </div>
    </section>
  );
}
