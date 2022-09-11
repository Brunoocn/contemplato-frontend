import axios from "axios";

export const apiGithub = axios.create({
  baseURL: process.env.REACT_APP_API_GITHUB_KEY,
});
