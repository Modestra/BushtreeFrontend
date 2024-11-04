import { db, storage } from "@/firebase"; // на удивление работает? хотя пишет ошибку импорта
import { getDownloadURL, ref as ref1 } from "firebase/storage";

export async function GetStoragePic(storageUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const storageRef = ref1(storage, `images/${storageUrl}.png`.toString());
        getDownloadURL(storageRef)
            .then((url) => {
                resolve(url);
            })
            .catch((error) => {
                switch (error.code) {
                    case "storage/object-not-found":
                        reject("Не удалось найти изображение. Используется заменитель");
                        break;
                    case "storage/unauthorized":
                        reject(
                            "Пользователь не имеет достаточно прав для получения изображения"
                        );
                        break;
                    case "storage/canceled":
                        reject("Служба Firebase отказала в доступе");
                        break;
                    case "storage/unknown":
                        reject("Неизвестный запрос");
                        break;
                }
            });
    });
}