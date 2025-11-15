import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// ✅ Automatically attach token to every request
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

axiosInstance.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  if (user) {
    const token = JSON.parse(user).token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Register
export const registerUser = async (name, email, password) => {
  const { data } = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
  });
  return data;
};

// ✅ Login
export const loginUser = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return data;
};

// ✅ Get courses (protected route example)
export const getCourses = async () => {
  const { data } = await axiosInstance.get("/courses");
  return data;
};
