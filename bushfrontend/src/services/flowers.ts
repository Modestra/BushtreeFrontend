import { HTTP } from "../http.ts";
import { Flower } from "../entities/flower.ts";

//Отправить данные цветника пользователя
export function postGarden(data: Flower) {
  return HTTP.post("/flower/create_garden/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
