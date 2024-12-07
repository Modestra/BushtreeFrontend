import { HTTP } from "../http.ts";
import { Garden } from "../entities/garden.ts";

//Отправить данные цветника пользователя
export function postGetFlowersByGarden(data: Garden) {
  return HTTP.post("/flower/near_flowers/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
