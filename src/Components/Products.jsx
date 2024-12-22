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
export default function Products() {
  return (
    <section id="products">
      <div className="max-w-4xl py-12 mx-auto px-4">
        {/* Başlık */}
        <h3 className="text-[#be6c30] text-center text-4xl md:text-6xl font-bold mb-6">
          Ürünlerimiz
        </h3>

        {/* Resimlerin yerleşimi için Grid */}
        <div>
          <div className="grid mt-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
            <img src={Img5} alt="" />
            <img src={Img6} alt="" />
            <img src={Img7} alt="" />
            <img src={Img8} alt="" />
            <img src={Img9} alt="" />
            <img src={Img10} alt="" />
            <img src={Img11} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
