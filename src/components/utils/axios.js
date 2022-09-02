import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mini-video-website-react-redux.herokuapp.com/",
});

export default axiosInstance;
