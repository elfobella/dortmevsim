import MainImage from "../assets/varta.jpg";

export default function VartaSponsor() {
  return (
    <section className="py-32  mt-12">
      <div className="max-w-7xl mx-auto gap-10 justify-between px-6 flex flex-col md:flex-row-reverse items-center md:space-x-8 space-y-6 md:space-y-0">
        {/* Sağda Yazı Alanı */}
        <div className="flex-1 md:w-1/2 text-center md:text-left">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-wide">
            Dört Mevsim Akü Market, <strong>Varta</strong> Kocaeli Yetkili
            Servisi
          </h2>
          <p className="text-gray-700 mb-4 text-md md:text-xl font-medium leading-relaxed opacity-80">
            Varta, güvenilirliği ve uzun ömrü ile tanınan bir markadır. Dört
            Mevsim Akü Market olarak, Kocaelideki yetkili servis hizmetimizle,
            kaliteli ve dayanıklı akü çözümleri sunuyoruz.
            <span className="block mt-2 text-base text-gray-500">
              Yolculuklarınızda güvenliğiniz bizim için önemli. Varta aküleriyle
              her zaman yol alabilirsiniz.
            </span>
          </p>
        </div>

        {/* Solda Resim Alanı */}
        <div className="flex-1 w-full">
          <img
            src={MainImage}
            className="rounded-lg shadow-2xl transform transition-transform hover:scale-105 duration-500"
            alt="Varta Akü"
          />
        </div>
      </div>
    </section>
  );
}
