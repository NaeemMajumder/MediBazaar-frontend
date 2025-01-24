import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import AuthProviderHook from "./AuthProviderHook";


const UseCart = () => {
    // ten stack query

    const axiosSecure = UseAxiosSecure();

    const {user} = AuthProviderHook();

    const {refetch,data} = useQuery({
        queryKey: ["cartData", user?.email],
        queryFn: async()=>{
            let res = await axiosSecure.get(`/cartDetails?email=${user.email}`)
            return res.data;
        }
    })
    return [refetch,data];
};

export default UseCart;