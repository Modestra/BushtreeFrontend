// src/utils/utils.d.ts

declare module "@utils/scrollToFunctions" {
  const value: any;
  export const scrollToTopSmoothly: typeof value;
}

declare module "@utils/gardenArraySlicer" {
  const value: any;
  export const getFlowerSliceCountFromGardenID: typeof value;
}

declare module "@utils/pdfGeneration" {
  const value: any;
  export const createAndDownloadPdf: typeof value;
}

declare module "@utils/textRelated" {
  const value: any;
  export const formatDescription: typeof value;
}

declare module "@utils/randomGen" {
  const value: any;
  export const getRandomInt: typeof value;
}
