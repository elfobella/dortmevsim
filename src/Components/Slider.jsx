import MaingImage from "../assets/yadmam.jpg";

export default function ProductSection() {
  return (
    <section className="py-32 bg-gray-50 mt-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
        {/* Solda Yazı Alanı */}
        <div className="flex-1 w-full text-center md:text-left">
          <h2 className="text-black drop-shadow-lg text-6xl md:text-7xl font-semibold mb-4">
            Aküde Kalite ve <span>Güç</span>
          </h2>
          <p className="text-gray-700 mb-4 text-lg md:text-xl font-medium leading-relaxed">
            Yolculuklarınız için güvenilir güç ve dayanıklı akü çözümleri burada
          </p>
          <a
            href="https://www.google.com/maps/place/D%C3%B6rt+mevsim+ak%C3%BC+market+hamza+alada%C4%9F/@40.7667869,29.9057532,17z/data=!3m1!4b1!4m6!3m5!1s0x14cb455ee2edd8a5:0x15dd8203e8d684af!8m2!3d40.7667869!4d29.9057532!16s%2Fg%2F11y6dvxx0s?hl=tr&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="bg-black font-bold text-white text-xl px-8 py-2 rounded hover:bg-[#555] transition-all duration-300"
          >
            Konumu Gör
          </a>
        </div>

        {/* Sağda Resim Alanı */}
        <div className="flex-1 md:w-1/2 w-full">
          <img
            src={MaingImage}
            className="rounded-lg shadow-2xl transform transition-transform hover:scale-105 duration-500"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
