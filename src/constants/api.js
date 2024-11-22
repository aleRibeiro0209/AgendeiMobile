import axios from "axios";

const api = axios.create({
  baseURL: "https://agendeiapi.onrender.com",
});

export default api;