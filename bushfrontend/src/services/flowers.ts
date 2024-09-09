import { HTTP } from "../http.ts";
import { FlowerComp } from "../entities/flowercomp.ts";

//Отправить данные цветника пользователя
export function postFlowerComp(data: FlowerComp) {
  return HTTP.post("/createflowers", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
