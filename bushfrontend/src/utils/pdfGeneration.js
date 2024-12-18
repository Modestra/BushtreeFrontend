import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import {
  GetStoragePic,
  GetStoragePicGardenBed,
  GetStoragePicGardensMap,
} from "../firebase/getPicsFromFirebase";
import { ref } from "vue";
import img_placeholder from "@assets/img/placeholder_noimage.png";
import { formatDescription } from "@utils/textRelated";

import img_flowerBedPlaceholder from "@assets/img/flowerbedGen_default.png";
const pic_garden = ref(img_flowerBedPlaceholder);
const pic_gardenMap = ref(img_placeholder);

// Constants
const FONT_SIZE = 14;
const FONT_SIZE_FLOWERNAME = 18;
const FONT_SIZE_H1 = 28;
const TEXT_COLOR = rgb(0, 0, 0);
const FILE_NAME = "bushtree-материалы-генерации.pdf";

const pdfTextToCenter = [
  "Результат",
  "Карта рассадки",
  "Цветы",
  "Здесь вы можете посмотреть список цветов и растений,",
  "которые мы собрали специально для вас.",
];

// Function to create and download a PDF
export const createAndDownloadPdf = async (
  gardenArrayToSend1,
  flowersGeneratedList1
) => {
  try {
    // Загружаем шрифт с поддержкой русского языка, в данном случае это Microsoft Sans Serif
    const url2 =
      "https://db.onlinewebfonts.com/t/643e59524d730ce6c6f2384eebf945f8.ttf";
    const fontBytes = await fetch(url2).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.create();
    let fontCustom;
    if (fontBytes) {
      pdfDoc.registerFontkit(fontkit);
      await pdfDoc.embedFont(fontBytes);
      fontCustom = await pdfDoc.embedFont(fontBytes);
    }
    const width_text1_pdfTextToCenter =
      pdfTextToCenter[0].length * (FONT_SIZE_H1 / 2);
    const width_text2_pdfTextToCenter =
      pdfTextToCenter[1].length * (FONT_SIZE_H1 / 2);
    const width_text3_pdfTextToCenter =
      pdfTextToCenter[2].length * (FONT_SIZE_H1 / 2);
    const width_text4_pdfTextToCenter =
      pdfTextToCenter[3].length * (FONT_SIZE / 2);
    const width_text5_pdfTextToCenter =
      pdfTextToCenter[4].length * (FONT_SIZE / 2);
    // const fontCustom = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    page.drawText(pdfTextToCenter[0], {
      x: (page.getWidth() - width_text1_pdfTextToCenter) / 2,
      y: height - 4 * FONT_SIZE_H1 + 60,
      size: FONT_SIZE_H1,
      font: fontCustom,
      color: TEXT_COLOR,
    });
    page.drawText(pdfTextToCenter[1], {
      x: (page.getWidth() - width_text2_pdfTextToCenter) / 2,
      y: height - 4 * FONT_SIZE_H1 - 350,
      size: FONT_SIZE_H1,
      font: fontCustom,
      color: TEXT_COLOR,
    });

    // Получение изображения цветника
    const url_pic_garden = await GetStoragePicGardenBed(gardenArrayToSend1);
    const arrayBuffer_pic_garden = await fetch(url_pic_garden).then((res) =>
      res.arrayBuffer()
    );
    const jpgImage_pic_garden = await pdfDoc.embedPng(arrayBuffer_pic_garden);
    const imageDims = jpgImage_pic_garden.scale(0.4);
    page.drawImage(jpgImage_pic_garden, {
      x: page.getWidth() / 2 - imageDims.width / 2,
      y: page.getHeight() / 2 - imageDims.height / 2 + 200,
      width: imageDims.width,
      height: imageDims.height,
    });

    // Получение карты цветника
    const url_pic_gardenMap = await GetStoragePicGardensMap(gardenArrayToSend1);
    const arrayBuffer_pic_gardenMap = await fetch(url_pic_gardenMap).then(
      (res) => res.arrayBuffer()
    );
    const jpgImage_pic_gardenMap = await pdfDoc.embedPng(
      arrayBuffer_pic_gardenMap
    );

    page.drawImage(jpgImage_pic_gardenMap, {
      x: page.getWidth() / 2 - 250,
      y: page.getHeight() / 2 - 320,
      width: 500,
      height: 220,
    });

    // Функция для парного массива
    function pairArray(a) {
      var temp = a.slice();
      let index = 1;
      temp.map(function (ele) {
        ele.FlowerCurrentIndex = index++;
        return;
      });
      var arr = [];
      while (temp.length) {
        arr.push(temp.splice(0, 2));
      }
      return arr;
    }

    var newArr = pairArray(flowersGeneratedList1);

    // Генерация страниц для каждого цветка
    for (let i = 0; i < newArr.length; i++) {
      const page3 = pdfDoc.addPage();
      page3.drawText(pdfTextToCenter[2], {
        x: (page.getWidth() - width_text3_pdfTextToCenter) / 2,
        y: height - 4 * FONT_SIZE_H1 + 60,
        size: FONT_SIZE_H1,
        font: fontCustom,
        color: TEXT_COLOR,
      });
      page3.drawText(pdfTextToCenter[3], {
        x: (page.getWidth() - width_text4_pdfTextToCenter) / 2,
        y: height - 4 * FONT_SIZE - 40,
        size: FONT_SIZE,
        font: fontCustom,
        color: TEXT_COLOR,
      });
      page3.drawText(pdfTextToCenter[4], {
        x: (page.getWidth() - width_text5_pdfTextToCenter) / 2,
        y: height - 4 * FONT_SIZE - 40 - FONT_SIZE,
        size: FONT_SIZE,
        font: fontCustom,
        color: TEXT_COLOR,
      });
      // Проверка наличия первого цветка
      if (newArr[i]?.[0]) {
        const flowerData1 = newArr[i][0];

        page3.drawText(
          flowerData1.FlowerCurrentIndex + ". " + flowerData1.name,
          {
            x: 50,
            y: height - 4 * FONT_SIZE_FLOWERNAME - 100,
            size: FONT_SIZE_FLOWERNAME,
            font: fontCustom,
            color: TEXT_COLOR,
            maxWidth: 228,
            wordBreaks: [" "],
          }
        );

        page3.drawText(
          formatDescription(flowerData1.description)
            .split(".", 4)
            .slice(0, 4)
            .join(". "),
          {
            x: 50,
            y: height - 4 * FONT_SIZE - 180 - 200,
            size: FONT_SIZE,
            font: fontCustom,
            color: TEXT_COLOR,
            maxWidth: 228,
            wordBreaks: [" "],
          }
        );

        const url_pic_flower_1 = flowerData1.storageUrl || img_placeholder;
        const arrayBuffer_pic_flower_1 = await fetch(url_pic_flower_1).then(
          (res) => res.arrayBuffer()
        );
        const jpgImage_pic_flower_1 = await pdfDoc.embedPng(
          arrayBuffer_pic_flower_1
        );

        const jpgDims_pic_flower_1 = 200;
        // Выравнивание изображения первого цветка по центру
        page3.drawImage(jpgImage_pic_flower_1, {
          x: (page.getWidth() - jpgDims_pic_flower_1) / 2 - 150, // Центрируем изображение
          y: page.getHeight() / 2 - jpgDims_pic_flower_1 / 2 + 110,
          width: jpgDims_pic_flower_1,
          height: jpgDims_pic_flower_1,
        });
      }

      // Проверка наличия второго цветка
      if (newArr[i]?.[1]) {
        const flowerData2 = newArr[i][1];

        page3.drawText(
          flowerData2.FlowerCurrentIndex + ". " + flowerData2.name,
          {
            x: 350 - 20,
            y: height - 4 * FONT_SIZE_FLOWERNAME - 100,
            size: FONT_SIZE_FLOWERNAME,
            font: fontCustom,
            color: TEXT_COLOR,
            maxWidth: 228,
            wordBreaks: [" "],
          }
        );

        page3.drawText(
          formatDescription(flowerData2.description)
            .split(".", 4)
            .slice(0, 4)
            .join(". "),
          {
            x: 350 - 20,
            y: height - 4 * FONT_SIZE - 180 - 200,
            size: FONT_SIZE,
            font: fontCustom,
            color: TEXT_COLOR,
            maxWidth: 228,
            wordBreaks: [" "],
          }
        );

        const url_pic_flower_2 = flowerData2.storageUrl || img_placeholder;
        const arrayBuffer_pic_flower_2 = await fetch(url_pic_flower_2).then(
          (res) => res.arrayBuffer()
        );
        const jpgImage_pic_flower_2 = await pdfDoc.embedPng(
          arrayBuffer_pic_flower_2
        );

        const jpgDims_pic_flower_2 = 200;
        // Выравнивание изображения второго цветка по центру
        page3.drawImage(jpgImage_pic_flower_2, {
          x: (page.getWidth() - jpgDims_pic_flower_2) / 2 + 130, // Центрируем изображение
          y: page.getHeight() / 2 - jpgDims_pic_flower_2 / 2 + 110,
          width: jpgDims_pic_flower_2,
          height: jpgDims_pic_flower_2,
        });
      }
    }

    const pdfBytes = await pdfDoc.save();
    downloadPdf(pdfBytes, FILE_NAME);
  } catch (error) {
    console.error("Error creating PDF:", error);
  }
  // loading.value = false;
  // dialogVisibleGen.value = false;
};

// Function to trigger the download of the PDF
const downloadPdf = (pdfBytes, fileName) => {
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
