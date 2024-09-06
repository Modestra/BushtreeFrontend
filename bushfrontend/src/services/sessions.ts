import { HTTP } from "../http.ts";

//Получить данные по всем мероприятиям
export function CreateSession(data) {
  return HTTP.post("/createseccion/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function GetSession() {
  return HTTP.get("/seccions/list/", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
