// Categories.js
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import StartStop from "../assets/start-stop.jpg";
import NormalCar from "../assets/normal-car.jpg";
import HemenTeslim from "../assets/hemen-teslim.jpg";

import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";
import Img5 from "../assets/5.jpg";
import Img6 from "../assets/6.jpg";
import Img7 from "../assets/7.jpg";
import Img8 from "../assets/8.jpg";
import Img9 from "../assets/9.jpg";
import Img10 from "../assets/10.jpg";
import Img11 from "../assets/11.jpg";

import arama from "../assets/arama.jpg";
import gps from "../assets/gps.jpg";
import teknisyen from "../assets/teknisyen.jpg";

const categoriesContent = {
  "/binek": {
    info: "Akülerimiz",
    title: "Binek Araçlar",
    description: "Binek araç kategorisi, konforlu ve hızlı araçlar içerir.",
    image: NormalCar, // Kategori ana görseli
    productImages: [
      {
        name: "Platin Premium smf 60Ah",
        description:
          "Modern araçlar için tasarlanmış, yüksek performans ve dayanıklılık sunar.",
        image: Img3,
      },
      {
        name: "President DC 72Ah",
        description:
          "Uzun ömürlü performansı ve yüksek marş gücüyle her koşulda güvenilir bir seçenek.",
        image: Img4,
      },
      {
        name: "İnci Akü FORMUL A 60Ah",
        description:
          "Ekonomik ve dayanıklı bir çözüm sunan, modern araçlar için ideal akü.",
        image: Img5,
      },
      {
        name: "Varta Blue Dynamic 74Ah",
        description:
          "Yüksek kaliteli üretim ve üstün enerji kapasitesiyle maksimum performans.",
        image: Img6,
      },
      {
        name: "Yiğit Akü Silverline 60Ah",
        description:
          "Yenilikçi teknolojisiyle uzun ömürlü ve çevre dostu enerji kaynağı.",
        image: Img7,
      },
      {
        name: "Gentry 75Ah",
        description:
          "Güçlü marş gücü ve dayanıklılığıyla ticari araçlar için mükemmel tercih.",
        image: Img8,
      },
      {
        name: "Turkuaz Power 60Ah",
        description:
          "Yüksek güvenilirlik ve uygun fiyat avantajını bir arada sunar.",
        image: Img9,
      },
      {
        name: "Probat 75Ah",
        description:
          "Yoğun kullanım için geliştirilmiş, güçlü ve dayanıklı akü.",
        image: Img10,
      },
      {
        name: "Bosch S4 032 74Ah",
        description:
          "Üstün Alman mühendisliğiyle üretilmiş, uzun ömürlü bir akü çözümü.",
        image: Img11,
      },
      // Diğer ürünler
    ],
  },
  "/start-stop": {
    info: "Akülerimiz",
    title: "Start-Stop Araçlar",
    description: "Verimli sürüş için en son Start-Stop sistemleri.",
    image: StartStop, // Kategori ana görseli
    productImages: [
      {
        name: "Yiğit Akü AGM W3-C2-V2-M1",
        description:
          "Gelişmiş AGM teknolojisiyle yüksek enerji ihtiyacını karşılayan, bakım gerektirmeyen üstün performans.",
        image: Img1,
      },
      {
        name: "Yiğit Akü EFB W3-C2-V2-M1",
        description:
          "Start-Stop özellikli araçlar için özel olarak tasarlanmış, uzun ömürlü ve güvenilir enerji kaynağı.",
        image: Img2,
      },
    ],
  },
  "/akum-gelsin": {
    info: "Konumunuza Gelelim",
    title: "Aküm Gelsin,Yerinde Montaj",
    description: "Araç bataryalarınızı en iyi seçeneklerle şarj edin.",
    image: HemenTeslim, // Kategori ana görseli
    productImages: [
      {
        name: "Bizi Arayın",
        description:
          "7/24 hizmet veren ekibimizle iletişime geçin. Size en hızlı şekilde yardımcı olalım!",
        image: arama,
      },
      {
        name: "Konumunuzu Söyleyin",
        description:
          "Bize bulunduğunuz yeri bildirin. Ekibimiz en kısa sürede adresinize gelsin.",
        image: gps,
      },
      {
        name: "Gelip Akünüzü Takalım!",
        description:
          "Uzman ekiplerimiz adresinize gelerek, aracınızın aküsünü hızlı ve güvenilir bir şekilde değiştirir.",
        image: teknisyen,
      },

      // Diğer ürünler
    ],
  },
};

const CategoryPages = () => {
  const location = useLocation();
  const categoryData = categoriesContent[location.pathname];

  if (!categoryData) {
    return <div>Kategori bulunamadı</div>;
  }

  return (
    <Layout
      info={categoryData.info}
      title={categoryData.title}
      description={categoryData.description}
      image={categoryData.image}
      productImages={categoryData.productImages}
    />
  );
};

export default CategoryPages;
