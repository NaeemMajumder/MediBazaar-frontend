import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#164193] text-white py-10">
      <div className="max-w-[1350px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Medi<span className="text-[#1ca288]">Bazaar</span></h2>
          <p className="text-sm leading-relaxed">
            Your one-stop solution for all your medical needs. Trusted by thousands of customers across the country.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#1ca288] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#1ca288] transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#1ca288] transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-[#1ca288] transition">FAQs</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:text-[#1ca288] transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-[#1ca288] transition">Privacy Policy</a></li>
            <li><a href="/shipping" className="hover:text-[#1ca288] transition">Shipping & Returns</a></li>
            <li><a href="/support" className="hover:text-[#1ca288] transition">Customer Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-sm mb-4">
            Get the latest updates and offers directly in your inbox.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1ca288]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#1ca288] text-white rounded hover:bg-[#38A7D6] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MediBazaar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
