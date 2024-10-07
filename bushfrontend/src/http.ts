import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://45.12.74.181:8000/",
});
