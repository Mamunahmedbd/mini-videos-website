import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mamun-json-server.herokuapp.com/",
});

export default axiosInstance;
