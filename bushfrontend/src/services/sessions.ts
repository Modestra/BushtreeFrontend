import { HTTP } from "../http.ts";

//Получить данные по всем мероприятиям
export function CreateSession(data) {
  return HTTP.post("/createseccion/", data, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

export function GetSession() {
  return HTTP.get("/seccions/list/", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

// export function GetSession(): Promise<any> {
//   const headers = {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "*",
//     "Access-Control-Allow-Headers": "*",
//   };

//   return HTTP.get("/seccions/list/", { headers });
// }

// export function GetSession() {
//   return HTTP.get("/seccions/list/", {
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//       "Access-Control-Allow-Headers":
//         "Origin, X-Requested-With, Content-Type, Accept",
//     },
//   });
// }
