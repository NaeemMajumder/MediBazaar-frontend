import React, { useContext } from "react";
import AuthProviderHook from "../../../customHooks/AuthProviderHook";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyProfile = () => {
  let { user, setUser, updateUserProfile } = AuthProviderHook();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const navigate = useNavigate("/");

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    // Get values from the form
    const formData = new FormData(e.target);
    const updatedName = formData.get("name");
    const updatedPhotoURL = formData.get("photoURL");

    // Call the updateUser function to update user info (you need to define this in AuthProvider)
    updateUserProfile({
      displayName: updatedName,
      photoURL: updatedPhotoURL,
    }).then(() => {
      alert("Profile updated successfully! Your changes have been saved.");
      navigate("/myProfile");
    });

    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Profile | MediBazaar</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-[#F0FAFB] via-[#b6dde2] to-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Profile Card */}
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full text-center">
          <div className="relative mb-6">
            {/* Profile Image */}
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-[#1C5F64] mx-auto"
            />
            <div className="absolute bottom-0 right-0 p-2 bg-[#1C5F64] rounded-full shadow-md">
              <i className="fas fa-camera text-white text-xl"></i>
            </div>
          </div>

          {/* Name */}
          <h2 className="text-3xl font-bold text-[#17202A] mb-2">
            {user?.displayName}
          </h2>

          {/* Email */}
          <p className="text-lg text-gray-600 mb-4">{user?.email}</p>

          {/* Button to Edit Profile */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-2 px-4 bg-[#1C5F64] text-white rounded-lg hover:bg-[#0b3133] transition"
          >
            Edit Profile
          </button>
        </div>

        {/* Modal for Editing Profile */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-sm w-full">
              <h2 className="text-2xl font-bold text-[#17202A] mb-4">
                Edit Profile
              </h2>

              {/* Profile Edit Form */}
              <form onSubmit={handleProfileSubmit}>
                {/* Name Input */}
                <input
                  type="text"
                  name="name"
                  defaultValue={user.displayName}
                  placeholder="Enter your new name"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#1C5F64]"
                />

                {/* Photo URL Input */}
                <input
                  type="text"
                  name="photoURL"
                  defaultValue={user.photoURL}
                  placeholder="Enter your photo URL"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#1C5F64]"
                />

                {/* Buttons */}
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#1C5F64] text-white rounded-lg hover:bg-[#0b3133] transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyProfile;
