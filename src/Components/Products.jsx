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
      <div className="max-w-4xl py-24 mx-auto px-4">
        {/* Başlık */}
        <h3 className="text-black text-center text-5xl drop-shadow-lg bg-red-500 md:text-6xl font-bold mb-6">
          Ürünlerimiz
        </h3>

        {/* Resimlerin yerleşimi için Grid */}
        <div>
          <div className="grid mt-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <img className="rounded-lg shadow-lg" src={Img1} alt="" />
            <img className="rounded-lg shadow-lg" src={Img2} alt="" />
            <img className="rounded-lg shadow-lg" src={Img3} alt="" />
            <img className="rounded-lg shadow-lg" src={Img4} alt="" />
            <img className="rounded-lg shadow-lg" src={Img5} alt="" />
            <img className="rounded-lg shadow-lg" src={Img6} alt="" />
            <img className="rounded-lg shadow-lg" src={Img7} alt="" />
            <img className="rounded-lg shadow-lg" src={Img8} alt="" />
            <img className="rounded-lg shadow-lg" src={Img9} alt="" />
            <img className="rounded-lg shadow-lg" src={Img10} alt="" />
            <img className="rounded-lg shadow-lg" src={Img11} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
