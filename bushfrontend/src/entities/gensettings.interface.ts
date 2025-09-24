export interface ColorPicker{
    title: string,
    hexcolor: string
}

export interface BaseGenerated{
    name: string,
    url: string
}

export interface GardensGenerated{
    name: string,
    url: string
}

export interface FlowerGenerated{
    id: string
    name: string,
    description: string,
    url: string
}

export interface ShadowTemp{
    label: string,
    icon: string
}

export interface WateringTemp{
    label: string,
    tooltip: string
}

export interface ShadowResult {
    [key: string]: ShadowTemp
}

export interface WateringResult {
    [key: string]: WateringTemp
}

export type GeneratedType = BaseGenerated | GardensGenerated | FlowerGenerated

export type MediaType = "images" | "gardens" | "flowerbands"
export type WateringType = "often" | "welldone" | "rare" | "dry"
export type ShadowType = "sun" | "halfbody" | "shadow"