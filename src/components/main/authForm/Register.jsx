import React, { useState } from "react";
import registerAnimation from "../../../../public/json/register.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import AuthProviderHook from "../../../customHooks/AuthProviderHook";
import UseAxiosPublic from "../../../customHooks/UseAxiosPublic";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Register = ({ handleSubmitRegister }) => {
  console.log(import.meta.env.VITE_IMAGE_HOSTING_KEY);

  const image_bb_url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMAGE_HOSTING_KEY
  }`;
  console.log(image_bb_url);

  // using custom hook..........
  let { setUser, registerWithEmail, updateUserProfile, handleError } =
    AuthProviderHook();
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photoUrl: null,
  });

  const [passwordValid, setPasswordValid] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photoUrl") {
      setFormData({ ...formData, photoUrl: files[0] }); // For image upload
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === "password") {
      validatePassword(value);
    }

    if (name === "confirmPassword") {
      setConfirmPasswordValid(value === formData.password);
    }
  };

  const validatePassword = (password) => {
    setPasswordValid({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword } = formData;
    return (
      name &&
      email &&
      passwordValid.length &&
      passwordValid.uppercase &&
      passwordValid.lowercase &&
      passwordValid.number &&
      passwordValid.specialChar &&
      confirmPasswordValid
    );
  };

  
  // confirm registration
  const handleRegistrationForm = async (event) => {
    event.preventDefault();

    // form data collect
    let form = event.target;
    let name = form.name.value;
    let email = form.email.value;
    let photoUrl = formData.photoUrl;
    let password = form.password.value;
    console.log(photoUrl);

    if (photoUrl) {
      // Create a FormData object
      const formData = new FormData();
      formData.append("image", photoUrl);
      console.log(formData);

      try {
        // Send the image to the server
        let res = await axiosPublic.post(image_bb_url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(res.data); // Log the response data (the uploaded image URL or status)

        // After successful image upload, you can proceed with the user registration
        const uploadedImageUrl = res.data.data.display_url;
        registerWithEmail(email, password)
          .then((result) => {
            setUser(result.user);
            updateUserProfile({ displayName: name, photoURL: uploadedImageUrl })
              .then(() => {
                let userInfo = {
                  name,
                  email,
                  uploadedImageUrl,
                };

                axiosPublic.post("/user", userInfo).then((res) => {
                  if (res.data.insertedId) {
                    navigate("/");
                    toast.success("register successful");
                  }
                });
              })
              .catch(handleError);
          })
          .catch(handleError);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    // console.log(name, email, photoUrl, password);
  };

  return (
    <>
      <Helmet>
        <title>Register | MediBazaar</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#164193] to-[#00a9ff] md:px-4 py-10">
        <div className="flex flex-col md:flex-row bg-[#AAF0F0] rounded-lg shadow-lg max-w-5xl">
          {/* Left: Image Section */}
          <div className="flex justify-center items-center">
            <Lottie
              className="w-full"
              animationData={registerAnimation}
            ></Lottie>
          </div>

          {/* Right: Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-center text-[#164193] mb-6">
              Sign Up
            </h2>
            <form onSubmit={handleRegistrationForm}>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#1ca288]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border-2 border-[#3AB092] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164193] sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>

              {/* Photo URL Field */}
              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-[#1ca288]"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  name="photoUrl"
                  type="file"
                  accept="image/*" // Accept only image files
                  onChange={handleChange} // Handle file selection
                  className="mt-1 block w-full px-4 py-2 border-2 border-[#3AB092] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164193] sm:text-sm"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1ca288]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border-2 border-[#3AB092] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164193] sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#1ca288]"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border-2 border-[#3AB092] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164193] sm:text-sm"
                  placeholder="Enter your password"
                />

                {/* Password Requirements */}
                <div className="mt-2 text-xs text-gray-600 heading">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <span
                        className={`${
                          passwordValid.length
                            ? "text-blue-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordValid.length ? "✔" : "✘"} At least 8 characters
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`${
                          passwordValid.uppercase
                            ? "text-blue-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordValid.uppercase ? "✔" : "✘"} At least one
                        uppercase letter
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center">
                      <span
                        className={`${
                          passwordValid.lowercase
                            ? "text-blue-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordValid.lowercase ? "✔" : "✘"} At least one
                        lowercase letter
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`${
                          passwordValid.number
                            ? "text-blue-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordValid.number ? "✔" : "✘"} At least one number
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center">
                      <span
                        className={`${
                          passwordValid.specialChar
                            ? "text-blue-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordValid.specialChar ? "✔" : "✘"} At least one
                        special character
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-[#1ca288]"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border-2 border-[#3AB092] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164193] sm:text-sm"
                  placeholder="Confirm your password"
                />
                <div className="mt-2 text-sm text-gray-600 heading">
                  <span
                    className={`${
                      confirmPasswordValid ? "text-blue-500" : "text-red-500"
                    }`}
                  >
                    {confirmPasswordValid ? "✔" : "✘"} Passwords match
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={!validateForm()}
                  onClick={handleSubmitRegister}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${
                    !validateForm()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#1C5F64] hover:bg-[#0D4549]"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C5F64]`}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-sm mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
