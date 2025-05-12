import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api/protected",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
