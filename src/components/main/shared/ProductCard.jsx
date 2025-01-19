

const ProductCard = ({ image_url }) => {
  return (
    <>
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform">
        {/* Product Image */}
        <div className="relative h-[300px]">
          <img
            src={
              "https://www.mobiledokan.com/media/apple-iphone-15-pink-official-image_1.webp"
            }
            alt="Product Image"
            className="w-full h-full object-cover  hover:scale-105 duration-300"
          />
          <span className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 text-xs font-semibold rounded-bl-lg">
            20% OFF
          </span>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h5 className="text-xl font-bold text-[#164193] mb-2">
            Product Name
          </h5>
          <p className="text-sm text-[#1ca288] mb-4">Category: Medicine</p>

          <div className="flex items-center mb-4">
            <span className="text-lg text-gray-500 line-through mr-2">
              ₹999
            </span>
            <span className="text-2xl font-semibold text-[#00a9ff]">₹799</span>
          </div>

          <button className="bg-[#00b092] text-white py-2 px-4 rounded-full w-full hover:bg-[#1ca288] transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
