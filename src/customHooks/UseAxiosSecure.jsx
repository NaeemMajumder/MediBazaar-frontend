import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthProviderHook from "./AuthProviderHook";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  // withCredentials:true
});

const UseAxiosSecure = () => {
  let { signOutUser } = AuthProviderHook();
  let navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      // console.log("this is the token", token);
      config.headers.authorization = token;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
        // console.log(response)
      return response;
    },
    (error) => {
        // console.log(error);
      if (error.status) {

        signOutUser().then(() => {
          navigate("/login");
        });
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default UseAxiosSecure;
