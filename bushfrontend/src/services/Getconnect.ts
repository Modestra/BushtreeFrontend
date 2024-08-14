/* eslint-disable @typescript-eslint/no-unused-vars */
import { HTTP } from "../http";

const GetFlowersList = ()=>{
    return HTTP.get("/get", {
        headers:{
            
        }
    });
}