import Lottie from "lottie-react";
import React from "react";
import loginAnimation from "../../../../public/json/login.json";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#164193] to-[#00a9ff] md:px-4">
      <div className="flex flex-col md:flex-row bg-[#AAF0F0] rounded-lg shadow-lg max-w-4xl">
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-[#164193] mb-6">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block mb-2 text-[#1ca288] font-bold"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                className="w-full px-4 py-2 border-2 border-[#3AB092] rounded-lg focus:outline-none focus:border-[#164193]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-[#1ca288] font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border-2 border-[#3AB092] rounded-lg focus:outline-none focus:border-[#164193]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-[#1ca288] font-bold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border-2 border-[#3AB092] rounded-lg focus:outline-none focus:border-[#164193]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white font-bold bg-[#00B092] rounded-lg hover:bg-[#1ca288] transition duration-300 mb-4"
            >
              Login
            </button>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="w-12 h-12 text-2xl border border-blue-500 text-blue-500 bg-white rounded-full flex items-center justify-center  transition duration-300 hover:bg-blue-100"
              >
                <SiFacebook />
              </button>
              <button
                type="button"
                className="w-12 h-12 text-2xl border border-red-500 bg-white rounded-full flex items-center justify-center  transition duration-300 hover:bg-red-100"
              >
                <FcGoogle />
              </button>
              <button
                type="button"
                className="w-12 h-12 text-2xl border border-black bg-white rounded-full flex items-center justify-center  transition duration-300 hover:bg-gray-100"
              >
                <FaGithub />
              </button>
            </div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="hidden items-center md:block w-1/2">
          <Lottie className="w-full mt-12" animationData={loginAnimation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
