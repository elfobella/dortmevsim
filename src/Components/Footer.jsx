import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <section id="footer" className="bg-black">
      <div className="max-w-7xl mx-auto pt-24">
        <div className="flex flex-col items-center md:flex-row gap-10 pb-14">
          <div className="md:w-1/3">
            <div>
              <h1 className="text-3xl pb-1 border-b border-white font-medium text-white">
                Dört mevsim akü market
              </h1>
            </div>
            <div className="pt-2">
              <div className="flex gap-2 items-center">
                <a
                  className="hover:bg-white rounded-lg p-1 transition-all group"
                  href="https://www.instagram.com/dortmevsimakumarket/"
                  target="_blank"
                >
                  <Instagram className="group-hover:text-black text-white w-5 h-5" />
                </a>
                <a
                  className="hover:bg-white rounded-lg p-1 transition-all group"
                  href="https://www.facebook.com/profile.php?id=61563525358166"
                  target="_blank"
                >
                  <Facebook className="group-hover:text-black text-white w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-gray-300 md:w-1/2 p-4">
            <h3 className="text-2xl font-bold text-center">Hakkımızda</h3>
            <p className="text-sm">
              Dört Mevsim Akü, araçlarınız ve ekipmanlarınız için güvenilir,
              uzun ömürlü ve yüksek performanslı akü çözümleri sunan bir
              markadır. Her türlü hava koşulunda maksimum verimlilik sağlayan
              akülerimiz, geniş ürün yelpazesiyle her ihtiyaca hitap eder.
              Kaliteyi ve müşteri memnuniyetini ön planda tutarak, çevre dostu
              üretim süreçleriyle yüksek standartlarda hizmet veriyoruz. Dört
              Mevsim Akü, güçlü ve güvenilir enerji çözümleriyle her mevsim
              yanınızda!
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-2">
          <span className="text-gray-300 text-xs">
            Copyright Reserved ©2024 - Dört Mevsim Akü Market
          </span>
        </div>
      </div>
    </section>
  );
}
