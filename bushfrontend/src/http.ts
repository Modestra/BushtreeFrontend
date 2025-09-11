import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://backend.bushtree.ru/",
});
