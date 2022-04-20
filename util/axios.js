import axios from "axios";
import { getCookie } from "cookies-next";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

// Set the AUTH token for any request
instance.interceptors.request.use((config) => {
  const token = getCookie("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
