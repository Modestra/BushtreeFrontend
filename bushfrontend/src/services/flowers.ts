import { HTTP } from "../http.ts";
import { Flower } from "../entities/flower.ts";

//Отправить данные цветника пользователя
export function postGetFlowersByGarden(data: Flower) {
  return HTTP.post("/flowers/list", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// //Получить данные цветов цветника пользователя
// export function getFlowersByGarden(data: Flower) {
//   return HTTP.get("/flowers/list", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// //Отправить данные цветника пользователя
// export function postFlowerComp(data: Flower) {
//   return HTTP.post("/flowers/list", data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }
