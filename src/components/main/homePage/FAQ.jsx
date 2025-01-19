import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the active FAQ if clicked again
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="px-4">
      <h1 className="text-center text-3xl lg:text-4xl text-[#164193] font-semibold mb-12 heading">
        Frequently Asked Questions
      </h1>

      <div className="max-w-2xl mx-auto">
        {/* FAQ Item 1 */}
        <div
          className="bg-white rounded-lg shadow-lg mb-4"
          onClick={() => toggleFAQ(1)}
        >
          <div className="flex justify-between items-center p-6 cursor-pointer">
            <h2 className="text-xl font-semibold text-[#164193]">
              What is MediBazaar?
            </h2>
            <span
              className={`${
                activeIndex === 1 ? "transform rotate-180" : ""
              } transition-transform duration-300`}
            >
              ▼
            </span>
          </div>
          {activeIndex === 1 && (
            <div className="p-6 bg-[#f9f9f9] text-[#164193] text-sm">
              MediBazaar is an online marketplace where you can buy medicines,
              wellness products, and other healthcare-related items from trusted
              vendors.
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div
          className="bg-white rounded-lg shadow-lg mb-4"
          onClick={() => toggleFAQ(2)}
        >
          <div className="flex justify-between items-center p-6 cursor-pointer">
            <h2 className="text-xl font-semibold text-[#164193]">
              How do I place an order?
            </h2>
            <span
              className={`${
                activeIndex === 2 ? "transform rotate-180" : ""
              } transition-transform duration-300`}
            >
              ▼
            </span>
          </div>
          {activeIndex === 2 && (
            <div className="p-6 bg-[#f9f9f9] text-[#164193] text-sm">
              Simply browse through the categories, select the products you
              need, and add them to your cart. Once you're done, proceed to
              checkout and fill in your delivery details.
            </div>
          )}
        </div>

        {/* FAQ Item 3 */}
        <div
          className="bg-white rounded-lg shadow-lg mb-4"
          onClick={() => toggleFAQ(3)}
        >
          <div className="flex justify-between items-center p-6 cursor-pointer">
            <h2 className="text-xl font-semibold text-[#164193]">
              Do you offer free shipping?
            </h2>
            <span
              className={`${
                activeIndex === 3 ? "transform rotate-180" : ""
              } transition-transform duration-300`}
            >
              ▼
            </span>
          </div>
          {activeIndex === 3 && (
            <div className="p-6 bg-[#f9f9f9] text-[#164193] text-sm">
              Yes, we offer free shipping on orders over ₹500. For orders below
              that, a small shipping fee may apply.
            </div>
          )}
        </div>

        {/* FAQ Item 4 */}
        <div
          className="bg-white rounded-lg shadow-lg mb-4"
          onClick={() => toggleFAQ(4)}
        >
          <div className="flex justify-between items-center p-6 cursor-pointer">
            <h2 className="text-xl font-semibold text-[#164193]">
              Can I cancel my order?
            </h2>
            <span
              className={`${
                activeIndex === 4 ? "transform rotate-180" : ""
              } transition-transform duration-300`}
            >
              ▼
            </span>
          </div>
          {activeIndex === 4 && (
            <div className="p-6 bg-[#f9f9f9] text-[#164193] text-sm">
              Yes, you can cancel your order within 24 hours of placing it. If
              your order has already been shipped, cancellation will not be
              possible.
            </div>
          )}
        </div>

        {/* FAQ Item 5 */}
        <div
          className="bg-white rounded-lg shadow-lg mb-4"
          onClick={() => toggleFAQ(5)}
        >
          <div className="flex justify-between items-center p-6 cursor-pointer">
            <h2 className="text-xl font-semibold text-[#164193]">
              Do you offer refunds?
            </h2>
            <span
              className={`${
                activeIndex === 5 ? "transform rotate-180" : ""
              } transition-transform duration-300`}
            >
              ▼
            </span>
          </div>
          {activeIndex === 5 && (
            <div className="p-6 bg-[#f9f9f9] text-[#164193] text-sm">
              Yes, we offer a 7-day refund policy for items that are damaged or
              incorrect. Please contact our support team for assistance.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
