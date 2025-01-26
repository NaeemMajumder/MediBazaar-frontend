import { useNavigate } from "react-router-dom";
import AuthProviderHook from "../../../customHooks/AuthProviderHook";
import UseAxiosSecure from "../../../customHooks/UseAxiosSecure";
import UseCart from "../../../customHooks/UseCart";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  let { user } = AuthProviderHook();
  let navigate = useNavigate();
  let axiosSecure = UseAxiosSecure();
  let [refetch] = UseCart();

  const handleAddCart = () => {
    if (user && user?.email) {
      console.log("data added");
      const shoppingCartItems = {
        productId: product._id,
        email: user.email,
        productImg: product.imageUrl,
        productName: product.itemName,
        productCategory: product.category,
        productPrice: product.discount_price,
      };

      axiosSecure.post("/cartDetails", shoppingCartItems).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // refetch will update the cart... like because of this we do not need to use specific state variable to re-render again.
          refetch();
          toast.success("item added to cart")
        }
      });
    } else {
      toast.error("login first");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform">
        {/* Product Image */}
        <div className="relative h-[300px]">
          <img
            src={product?.imageUrl}
            alt="Product Image"
            className="w-full h-full object-cover  hover:scale-105 duration-300"
          />
          {product.discount > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 text-xs font-semibold rounded-bl-lg">
              {product?.discount}% OFF
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h5 className="text-xl font-bold text-[#164193] mb-2">
            {product.itemName}
          </h5>
          <p className="text-sm text-[#1ca288] mb-4">{product.category}</p>

          <div className="flex items-center mb-4">
            {product.discount > 0 && (
              <span className="text-lg text-gray-500 line-through mr-2">
                {product.original_price} $
              </span>
            )}
            <span className="text-2xl font-semibold text-[#00a9ff]">
              {product.discount_price} $
            </span>
          </div>

          <button
            onClick={handleAddCart}
            className="bg-[#00b092] text-white py-2 px-4 rounded-full w-full hover:bg-[#1ca288] transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
