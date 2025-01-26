import React, { useState } from "react";
import UseAxiosSecure from "../../../../../customHooks/UseAxiosSecure";
import UseCart from "../../../../../customHooks/UseCart";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const ManageAds = () => {
  const axiosSecure = UseAxiosSecure();
  const [refetch] = UseCart();
  const queryClient = useQueryClient();

  const { data: banners = [] } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      let res = await axiosSecure("/manageAds");
      console.log(res.data);
      return res.data;
    },
  });

  const [ads, setAds] = useState([
    // Example ads (you can fetch these from a backend)
    { id: 1, imageUrl: "https://via.placeholder.com/150" },
    { id: 2, imageUrl: "https://via.placeholder.com/150" },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newAdUrl, setNewAdUrl] = useState("");

  const handleDelete = (id) => {
    // setAds(ads.filter(ad => ad.id !== id));
    // console.log("deleted");
    axiosSecure.delete(`/manageAds/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        queryClient.invalidateQueries({ queryKey: ["banner"] });
        refetch();
      }
    });
  };

  const handleAddBanner = (event) => {
    event.preventDefault();
    const imageUrl = event.target.imageUrl.value;
    console.log(imageUrl);
    axiosSecure.post("/manageAds", { imageUrl }).then((res) => {
      if (res.data.insertedId) {
        alert("banner added");
        queryClient.invalidateQueries({ queryKey: ["banner"] });
        refetch();
        setShowPopup(false);
      }
    });
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h2 className="text-2xl text-[#164193] font-bold mb-6">Manage Ads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map((ad) => (
          <div
            key={ad._id}
            className="relative border rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={ad.imageUrl}
              alt="Ad"
              className="w-full h-40 object-cover"
            />
            <button
              onClick={() => handleDelete(ad._id)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
            >
              X
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowPopup(true)}
        className="mt-6 bg-[#00b090] text-white py-2 px-4 rounded-lg hover:bg-[#00a276] transition"
      >
        Add Banner
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold text-[#164193] mb-4">
              Add New Banner
            </h3>
            <form onSubmit={handleAddBanner} action="">
              <input
                type="text"
                name="imageUrl"
                placeholder="Enter Image URL"
                className="w-full border p-2 rounded-md mb-4"
              />
              <div className="flex justify-between">
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button className="bg-[#00b090] text-white py-2 px-4 rounded-lg hover:bg-[#00a276] transition">
                  Add Banner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAds;
