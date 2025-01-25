import React from "react";
import UseAxiosSecure from "../../../../customHooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import { Button } from "@/components/ui/button";

const ManageUsers = () => {

    const axiosSecure = UseAxiosSecure();
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            let res = await axiosSecure('/user')
            console.log(res.data)
            return res.data;
        }
    })


  // Sample user data
//   const users = [
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john.doe@example.com",
//       image: "https://via.placeholder.com/50",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       email: "jane.smith@example.com",
//       image: "https://via.placeholder.com/50",
//     },
//   ];

  const updateUserRole = (id, role) => {

    console.log(id, role)
  };

  return (
    <section className="py-10 px-4">
      <div className="container m-auto lg:max-w-[1000px] md:max-w-[800px]">

        <div className="flex justify-between items-center">

        <h2 className="text-3xl font-bold text-[#164193] mb-6 heading">All Users</h2>
        <h2 className="text-xl font-bold text-[#164193] mb-6">Total Users: <span className="text-[#1ca288]">{users.length}</span> </h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-[#AAF0F0] text-[#164193]">
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="p-3 border">
                    <img
                      src={user.photoUrl}
                      alt={user.name}
                      className="w-12 h-12 rounded-full mx-auto"
                    />
                  </td>
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">{user.role}</td>
                  <td className="p-3 border">
                    <select
                      onChange={(e) => updateUserRole(user._id, e.target.value)}
                      value={user.role}
                      className="bg-[#00B092] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#1ca288] transition duration-300"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="seller">Seller</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

  );
};

export default ManageUsers;