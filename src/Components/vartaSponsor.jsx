import MainImage from "../assets/varta.jpg";

export default function VartaSponsor() {
  return (
    <section className="relative w-full p-6 py-20 md:p-32 overflow-hidden">
      {/* Arka Plan Resmi */}
      <div className="absolute inset-0">
        <img
          src={MainImage}
          className="w-full h-full object-cover"
          alt="Varta Akü"
        />
        <div className="absolute inset-0  bg-black bg-opacity-50"></div>
      </div>

      {/* İçerik Alanı */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center md:px-12">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-wide">
          Dört Mevsim Akü Market, <span className="text-yellow-400">Varta</span>{" "}
          Kocaeli Yetkili Servisi
        </h2>
        <p className="text-gray-200 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl">
          Varta, güvenilirliği ve uzun ömrü ile tanınan bir markadır. Dört
          Mevsim Akü Market olarak, Kocaeli'deki yetkili servis hizmetimizle,
          kaliteli ve dayanıklı akü çözümleri sunuyoruz.
        </p>
      </div>
    </section>
  );
}
