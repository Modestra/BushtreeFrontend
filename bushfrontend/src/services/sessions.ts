import { Session } from "../entities/session.ts";
import { HTTP } from "../http.ts";

//Получить данные по всем мероприятиям
export function CreateSession(data: Session) {
  return HTTP.post("/createseccion/", data, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}