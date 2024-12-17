export interface Flower {
  color_main: string;
  color_other: string;
}

export interface FlowerExcluded {
  frost_resistance_zone: string;
  light: string;
  watering: string;
  period_bloosom_start: string;
  period_bloosom_end: string;
}

export interface FlowerOld {
  name: string;
  description: string;
  frost_resistance_zone: string;
  light: string;
  watering: string;
  color_main: string;
  color_other: string;
  period_bloosom_start: string;
  period_bloosom_end: string;
}

export interface FlowersResponce {}
