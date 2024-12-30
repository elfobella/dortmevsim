import Navbar from "./Navbar";

const Layout = ({ title, description, image, productImages, info }) => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Kategori Başlık ve Açıklama */}
        <div className="relative w-full h-[60vh]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6">
            <h1 className="text-5xl text-yellow-400 md:text-6xl font-bold">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mt-4 font-light">{description}</p>
          </div>
        </div>

        {/* Ürünler ve Fotoğraflar */}
        <div className="p-6 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            {info}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {productImages.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
