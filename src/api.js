import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerce-backend-fqqg.onrender.com",
  withCredentials: true
});

api.interceptors.request.use(req => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default api;
