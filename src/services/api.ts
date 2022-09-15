import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});

api.interceptors.request.use((config) => {
  const jwtToken = sessionStorage.getItem("user-params");
  if (!jwtToken) {
    return config;
  } else {
    config.headers = {
      Authorization: `Bearer ${jwtToken}`,
      ContentType: "application/json",
    };
    return config;
  }
});
