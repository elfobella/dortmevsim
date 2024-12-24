import Cards from "./Cards";
export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto ">
        <h3 className="text-black itali text-center text-4xl px-4 md:text-6xl font-bold">
          <span className="text-[#be6c30]">Neden</span> Dört Mevsim Akü Market?
        </h3>
        <div>
          <Cards />
        </div>
      </div>
    </section>
  );
}
