import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <section id="footer" className="bg-black">
      <div className="max-w-7xl mx-auto pt-24">
        <div className="flex flex-col  md:flex-row gap-10 pb-14">
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
                >
                  <Instagram className="group-hover:text-black text-white w-5 h-5" />
                </a>
                <a
                  className="hover:bg-white rounded-lg p-1 transition-all group"
                  href="https://www.facebook.com/profile.php?id=61563525358166"
                >
                  <Facebook className="group-hover:text-black text-white w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-gray-300 md:w-1/2 p-4">
            <div className="flex flex-col md:flex-row gap-2">
              <ul>
                <li className="text-lg font-bold text-yellow-400">
                  Aküm Gelsin Yerinde Montaj
                </li>
                <li>Bizi arayın konumuzu söyleyin akünüzü getirelim!</li>
                <li>0552 008 31 37</li>
              </ul>
              <ul>
                <li className="text-lg font-bold text-yellow-400">
                  Binek Araç Aküleri
                </li>
                <li>President DC 72Ah</li>
                <li>İnci Akü FORMUL A 60Ah</li>
                <li>Varta Blue Dynamic 74Ah</li>
                <li>Yiğit Akü Silverline 60Ah</li>
                <li>Gentry 75Ah</li>
                <li>Turkuaz Power 60Ah</li>
                <li>Probat 75Ah</li>
                <li>Bosch S4 032 74Ah</li>
                <li>Platin Premium smf 60Ah</li>
              </ul>
              <ul>
                <li className="text-lg font-bold text-yellow-400">
                  Start-Stop Aküleri
                </li>
                <li>Yiğit Akü AGM W3-C2-V2-M1</li>
                <li>Yiğit Akü EFB W3-C2-V2-M1</li>
              </ul>
            </div>
            {/* <p className="text-sm">
              Dört Mevsim Akü, araçlarınız ve ekipmanlarınız için güvenilir,
              uzun ömürlü ve yüksek performanslı akü çözümleri sunan bir
              markadır. Her türlü hava koşulunda maksimum verimlilik sağlayan
              akülerimiz, geniş ürün yelpazesiyle her ihtiyaca hitap eder.
              Kaliteyi ve müşteri memnuniyetini ön planda tutarak, çevre dostu
              üretim süreçleriyle yüksek standartlarda hizmet veriyoruz. Dört
              Mevsim Akü, güçlü ve güvenilir enerji çözümleriyle her mevsim
              yanınızda!
            </p> */}
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
