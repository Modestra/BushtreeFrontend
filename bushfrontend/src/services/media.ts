import { MediaType } from "../entities/gensettings.interface";
import img_placeholder from "@assets/img/placeholder_noimage.png";
import { HTTP } from "../http";

export function getMediaImage(basedir: string, url: string){
    return HTTP.get(`/media/${basedir}/${url}`, {
        headers:{
            "Content-Type": "image/png"
        }
    })
}

export function getMediaPipe(type: MediaType, id: string){
    switch(type){
        case "images":
            return `https://backend.bushtree.ru/api/media/images/${id}.png`
        case "flowerbands":
            return `https://backend.bushtree.ru/api/media/flowerbands/${id}.png`
        case "gardens":
            return `https://backend.bushtree.ru/api/media/gardens/${id}.png`
        default:
            return img_placeholder
    }
}