import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Paracetamol",
      company: "ABC Pharma",
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: "Amoxicillin",
      company: "XYZ Pharma",
      price: 15,
      quantity: 2,
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-[#164193] mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#AAF0F0] text-[#164193]">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Company</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.company}</td>
                  <td className="p-2 border">${item.price}</td>
                  <td className="p-2 border flex justify-center items-center">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-[#164193] text-white px-2 rounded-md mx-1"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-[#164193] text-white px-2 rounded-md mx-1"
                    >
                      +
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="bg-[#00B092] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition duration-300"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-lg text-[#164193] font-semibold">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
