import MaingImage from "../assets/car-battery.jpg";

export default function ProductSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${MaingImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-6xl md:text-7xl font-semibold mb-4">
          Aküde Kalite ve <span className="text-yellow-400">Güç</span>
        </h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed mb-6">
          Yolculuklarınız için güvenilir güç ve dayanıklı akü çözümleri burada
        </p>
        <a
          href="https://www.google.com/maps/place/D%C3%B6rt+mevsim+ak%C3%BC+market+hamza+alada%C4%9F/@40.7667869,29.9057532,17z/data=!3m1!4b1!4m6!3m5!1s0x14cb455ee2edd8a5:0x15dd8203e8d684af!8m2!3d40.7667869!4d29.9057532!16s%2Fg%2F11y6dvxx0s?hl=tr&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
          className="bg-yellow-400 text-black font-bold text-xl px-8 py-2 rounded hover:bg-yellow-500 transition-all duration-300"
        >
          Konumu Gör
        </a>
      </div>
    </section>
  );
}
