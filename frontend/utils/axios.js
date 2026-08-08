import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

if (!serverUrl) {
  throw new Error("VITE_SERVER_URL is not defined");
}

const api = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});

export default api;
