import { HTTP } from "../http";

export function getMediaImage(basedir: string, url: string){
    return HTTP.get(`/media/${basedir}/${url}`, {
        headers:{
            "Content-Type": "image/png"
        }
    })
}