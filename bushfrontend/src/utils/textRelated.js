// textCleaner.js
export function cleanText(description) {
  return description
    .replace(/^['"`]|['"`]$/g, "") // Удаляем кавычки в начале и конце
    .replace(/\s+/g, " ") // Удаляем лишние пробелы
    .replace(/\s*-\s*/g, " - ") // Пробелы перед и после тире
    .replace(/\s*,/g, ",") // Удаляем пробел перед запятой
    .replace(/,(?!\s)/g, ", ") // Добавляем пробел после запятой, если его нет
    .replace(/\s*\.(?=\S)/g, ".") // Удаляем пробел перед точкой
    .replace(/\.(?!\s)/g, ". "); // Добавляем пробел после точки, если его нет
}
export function cleanTextWithoutDots(description) {
  return description
    .replace(/^['"`]|['"`]$/g, "") // Удаляем кавычки в начале и конце
    .replace(/\s+/g, " ") // Удаляем лишние пробелы
    .replace(/\s*-\s*/g, " - ") // Пробелы перед и после тире
    .replace(/\s*,/g, ",") // Удаляем пробел перед запятой
    .replace(/,(?!\s)/g, ", ") // Добавляем пробел после запятой, если его нет
    .replace(/\s*\.(?=\S)/g, ".") // Удаляем пробел перед точкой
    .replace(/\.$/, ""); // Удаляем точку в конце строки
}

export function formatName(name) {
  const cleanedName = cleanTextWithoutDots(name);

  return cleanedName;
}

export function formatDescription(description) {
  const cleanedDescription = cleanText(description);

  return cleanedDescription.length > 120
    ? cleanedDescription.slice(0, 55) + // 120
        cleanedDescription.slice(55).split(".", 3).slice(0, 3).join(". ") + // 120
        "."
    : cleanedDescription.split(".", 4).slice(0, 4).join(". ") + ".";
}
