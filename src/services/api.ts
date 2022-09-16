import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});

api.interceptors.request.use((req) => {
  const userParams = localStorage.getItem("user-params");
  console.log(userParams);
  if (!userParams) {
    return req;
  } else {
    const userParamsObj = JSON.parse(userParams);
    console.log(userParamsObj);
    req.headers = {
      Authorization: `Bearer ${userParamsObj.jwtToken}`,
      ContentType: "application/json",
    };

    return req;
  }
});
