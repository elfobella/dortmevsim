import Bosch from "../assets/Bosch_logo.png";
import Gentry from "../assets/gentry-logo.png";
import inciAku from "../assets/incilogo-dosya.png";
import Platin from "../assets/platin-logo.png";
import Prs from "../assets/prs-logo.png.webp";
import Turkuaz from "../assets/turkuaz-logo.png";
import Varta from "../assets/Varta-Logo.png";

export default function Brands() {
  const brands = [Bosch, Varta, Gentry, Platin, inciAku, Prs, Turkuaz];

  return (
    <div className="bg-gray-100 py-6">
      <h2 className="text-center drop-shadow-md text-3xl md:text-5xl font-semibold text-stone-700 pb-4">
        Markalarımız
      </h2>
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 md:w-44 mx-4 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
