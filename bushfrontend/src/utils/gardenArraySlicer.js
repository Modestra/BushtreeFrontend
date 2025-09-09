export const getFlowerSliceCountFromGardenID = (gardenID) => {
  // сейф-функция для кол-ва цветов в соответствии с картой цветника
  const sliceCounts = {
    sliceTo3: [4, 29, 32, 44],
    sliceTo4: [3, 31, 43, 45, 46, 47],
    sliceTo5: [5, 11, 18, 22, 24, 38, 41, 42],
    sliceTo6: [1, 6, 10, 19, 23, 28, 30, 36, 37, 40],
    sliceTo7: [2, 8, 14, 20, 21, 27, 33, 39],
    sliceTo8: [7, 49, 51],
    sliceTo9: [35],
    sliceTo10: [9, 12, 16, 34],
    sliceTo13: [17],
  };

  if (sliceCounts.sliceTo3.includes(gardenID)) {
    return 3;
  } else if (sliceCounts.sliceTo4.includes(gardenID)) {
    return 4;
  } else if (sliceCounts.sliceTo5.includes(gardenID)) {
    return 5;
  } else if (sliceCounts.sliceTo6.includes(gardenID)) {
    return 6;
  } else if (sliceCounts.sliceTo7.includes(gardenID)) {
    return 7;
  } else if (sliceCounts.sliceTo8.includes(gardenID)) {
    return 8;
  } else if (sliceCounts.sliceTo9.includes(gardenID)) {
    return 9;
  } else if (sliceCounts.sliceTo10.includes(gardenID)) {
    return 10;
  } else if (sliceCounts.sliceTo13.includes(gardenID)) {
    return 13;
  }
  return flowersGeneratedList.value.length; // Вернуть целиком если нету обрезки подходящего кол-ва
};
