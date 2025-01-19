import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="text-center">
        {/* Replace with your 404 image */}
        <img
          src="/images/error.jpg"
          alt="404 Not Found"
          className="w-1/2 mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-[#164193] mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-[#1ca288] mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => window.location.href = "/"}
          className="px-6 py-3 text-white font-medium bg-gradient-to-r from-[#164193] to-[#00a9ff] rounded-full hover:opacity-90 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
