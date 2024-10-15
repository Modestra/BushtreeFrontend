import { HTTP } from "../http.ts";
import { Flower } from "../entities/flower.ts";

//Отправить данные цветника пользователя
export function postGarden(data: Flower) {
  return HTTP.post("/gardens/create", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
// //Отправить данные цветника пользователя
// export function postGarden(data: Garden) {
//   return new Promise((resolve, reject) => {
//     const result = HTTP.post("/gardens/create", data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((resp) => {
//         resolve(resp);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
