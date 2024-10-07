import { HTTP } from "../http.ts";
import { Garden } from "../entities/garden.ts";

//Отправить данные цветника пользователя
export function postGarden(data: Garden) {
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
