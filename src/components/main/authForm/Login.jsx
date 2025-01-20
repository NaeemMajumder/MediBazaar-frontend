import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import loginAnimation from "../../../../public/json/login.json";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthProviderHook from "../../../customHooks/AuthProviderHook";
import { PiAppWindow } from "react-icons/pi";

const Login = () => {
  // login validate captcha
  let [disable, setDisable] = useState(true);

  let {
    setUser,
    signInUser,
    handleError,
    registerWithGoogle,
    registerWithFacebook,
  } = AuthProviderHook();
  const navigate = useNavigate();

  // useEffect captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  //   handle Captcha Validation
  let handleValidateCaptcha = () => {
    let user_input_captcha = document.getElementById("captcha").value;

    if (validateCaptcha(user_input_captcha) == true) {
      alert("Captcha Matched");
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
      setDisable(true);
    }
  };

  // login form validation
  let handleLoginFrom = (event) => {
    event.preventDefault();

    // form data
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch(handleError);
  };

  // login facebook
  let handleFacebookLogin = () => {
    registerWithFacebook()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch(handleError);
  };

  // login google
  let handleGoogleLogin = () => {
    registerWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch(handleError);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#164193] to-[#00a9ff] md:px-4">
      <div className="flex flex-col md:flex-row bg-[#AAF0F0] rounded-lg shadow-lg max-w-4xl">
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-[#164193] mb-6">
            Login
          </h2>
          <form onSubmit={handleLoginFrom}>
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

            <div className="mb-4">
              <label
                htmlFor="captcha"
                className="block mb-2 text-[#1ca288] font-bold"
              >
                <LoadCanvasTemplate />
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  placeholder="write this here"
                  required
                  className="flex-grow px-4 py-2 border-2 border-[#3AB092] rounded-lg focus:outline-none focus:border-[#164193]"
                />
                <button
                  onClick={handleValidateCaptcha}
                  type="button"
                  className={`px-4 py-2 ${
                    disable ? "bg-red-500" : "bg-[#1ca288] hover:bg-[#0d705f]"
                  } text-white font-medium rounded-lg  transition duration-300`}
                >
                  {disable ? "Validate" : "✔"}
                </button>
              </div>
              <div className="text-sm mt-1">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Register
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-2 text-white font-bold ${
                disable ? "bg-gray-600" : "bg-[#00B092] hover:bg-[#1ca288]"
              } rounded-lg  transition duration-300 mb-4`}
              disabled={disable}
            >
              Login
            </button>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleFacebookLogin}
                type="button"
                className="w-12 h-12 text-2xl border border-blue-500 text-blue-500 bg-white rounded-full flex items-center justify-center  transition duration-300 hover:bg-blue-100"
              >
                <SiFacebook />
              </button>
              <button
                onClick={handleGoogleLogin}
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
          <Lottie
            className="w-full mt-12"
            animationData={loginAnimation}
          ></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
