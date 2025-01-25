import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseCart from "../../../customHooks/UseCart";
import { TiDeleteOutline } from "react-icons/ti";
import UseAxiosSecure from "../../../customHooks/UseAxiosSecure";

const CartPage = () => {
  const navigate = useNavigate();
  let [refetch, cartData] = UseCart();
  let axiosSecure = UseAxiosSecure();

  // State for confirmation popup
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Calculate total items and total price
  const totalPrice = cartData?.reduce(
    (total, item) => total + parseInt(item.productPrice),
    0
  );

  // Show confirmation popup before deleting item
  const confirmDelete = (id) => {
    setSelectedItemId(id);
    setShowPopup(true);
  };

  const handleItemDelete = () => {
    axiosSecure.delete(`/cartDetails/${selectedItemId}`).then((res) => {
      if (res.data.deletedCount) {
        alert("Item deleted successfully!");
        refetch();
      }
      setShowPopup(false);
    });
  };

  const allItemDelete = ()=>{
    axiosSecure.delete(`/cartDetails`)
    .then(res=>{
      alert("all item deleted");
      refetch();
    })
  }

  return (
    <>
      <section className="py-10">
        <div className="container m-auto p-4 lg:max-w-[1000px] md:max-w-[800px]">
          <h2 className="text-3xl font-bold text-[#164193] mb-4 heading">
            Shopping Cart
          </h2>
          {cartData?.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-[#AAF0F0] text-[#164193]">
                    <th className="p-2 border">Image</th>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Company</th>
                    <th className="p-2 border">Price</th>
                    <th className="p-2 border">Quantity</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData?.map((item) => (
                    <tr key={item._id} className="text-center">
                      <td className="p-2 border">
                        <img
                          src={item.productImg}
                          alt={item.productName}
                          className="w-12 h-12 object-cover mx-auto"
                        />
                      </td>
                      <td className="p-2 border">{item.productName}</td>
                      <td className="p-2 border">{item.productCategory}</td>
                      <td className="p-2 border">${item.productPrice}</td>
                      <td className="p-2 border flex justify-center items-center">
                        {item.quantity}
                      </td>
                      <td className="p-2 border">
                        <button
                          onClick={() => confirmDelete(item._id)}
                          className="bg-red-500 text-white rounded-full"
                        >
                          <TiDeleteOutline size={25} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total Items and Total Price Section */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t pt-4">
                <p className="text-xl font-semibold text-[#164193]">
                  Total Items:{" "}
                  <span className="text-[#1ca288]">{cartData?.length}</span>
                </p>
                <p className="text-xl font-semibold text-[#164193]">
                  Total Price:{" "}
                  <span className="text-[#1ca288]">${totalPrice}</span>
                </p>
              </div>

              <div className="flex justify-between mt-4">
                <button onClick={allItemDelete} className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Clear Cart
                </button>
                <button className="bg-[#00B092] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition duration-300">
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <p className="text-lg text-[#164193] font-semibold">
              Your cart is empty.
            </p>
          )}
        </div>
      </section>

      {/* Delete Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Are you sure you want to remove this item?
            </h2>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={handleItemDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Remove
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
