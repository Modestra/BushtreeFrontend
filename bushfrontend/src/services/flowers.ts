import { HTTP } from "../http.ts";

//Получить данные по всем мероприятиям
export function getTestApiResponse() {
  return HTTP.get("/getseccions/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
