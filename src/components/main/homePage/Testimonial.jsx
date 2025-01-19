import React from "react";

const Testimonial = () => {
  return (
    <div className="py-16 px-4">
      <h1 className="text-center text-3xl lg:text-4xl text-[#164193] font-semibold mb-12 heading">
        What Our Customers Are Saying
      </h1>

      {/* Testimonial Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Testimonial 1 */}
        <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
          <div className="flex items-center mb-6">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Customer"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-[#164193]">Sarah Lee</h3>
              <p className="text-sm text-[#1ca288]">Customer</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg mb-4">
            "The service was excellent and the products are of top quality. I
            found exactly what I was looking for, and it was delivered quickly.
            Highly recommend!"
          </p>
          <div className="flex justify-between items-center">
            <span className="text-[#00a9ff] text-xl">⭐⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
          <div className="flex items-center mb-6">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Customer"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-[#164193]">John Smith</h3>
              <p className="text-sm text-[#1ca288]">Customer</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg mb-4">
            "A wonderful shopping experience. Everything was seamless, from
            browsing to checkout. Will definitely be back for more!"
          </p>
          <div className="flex justify-between items-center">
            <span className="text-[#00a9ff] text-xl">⭐⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
          <div className="flex items-center mb-6">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="Customer"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-[#164193]">Michael Brown</h3>
              <p className="text-sm text-[#1ca288]">Customer</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg mb-4">
            "I had a great experience with MediBazaar. The customer support was
            helpful, and I received my order quickly. Totally satisfied!"
          </p>
          <div className="flex justify-between items-center">
            <span className="text-[#00a9ff] text-xl">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-[#164193] mb-4">
          Ready to Experience the Best?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join the thousands of happy customers today!
        </p>
        <button className="bg-[#00b092] text-white py-2 px-6 rounded-full hover:bg-[#1ca288] transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
