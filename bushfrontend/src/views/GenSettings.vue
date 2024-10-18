<template>
  <div class="py-5" id="generationPage_top"></div>

  <div class="glowBehindBlock-1" v-show="!generationDone">
    <div class="container-custom1920 px-4 py-5">
      <h1 class="pb-4 mb-5 mr-auto text-center text-uppercase">
        Настройте параметры вашего будущего цветника
      </h1>
      <div>
        <form
          @submit.prevent="gardenSubmit"
          class="gensettings p-5 g-4 rounded border-bshtr-green1"
        >
          <div id="gen_gensettings_fields" style="max-width: 1000px">
            <div>
              <div class="options-group-1">
                <h4 class="text-start">Период цветения</h4>
                <VueSlider
                  ref="slider"
                  v-model="sliderValue"
                  :marks="sliderMarks"
                  :min="5"
                  :max="9"
                  class="m-5 mt-3 mx-0"
                >
                </VueSlider>
              </div>
            </div>
            <div class="row">
              <div class="options-group-2 col py-4">
                <h4 class="text-start text-truncate">Освещённость</h4>
                <div
                  class="text-start whiteBlock text-black p-3 rounded border-bshtr-contrastgreen h-100"
                >
                  <div
                    class="form-check d-flex justify-content-start align-items-center mb-2"
                  >
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="lightnessradio"
                        id="lightnessradio1"
                        v-model="formData.light"
                        value="солнце"
                      />
                    </div>

                    <label
                      class="form-check-label h5 fw-normal m-0 px-1"
                      for="lightnessradio1"
                      style="min-width: 100px"
                    >
                      Солнце
                    </label>
                    <img
                      class="px-1"
                      src="@assets/img/icon_lightIcon_1_sun.svg"
                      alt="icon_lightIcon_1_sun"
                    />
                  </div>
                  <div
                    class="form-check d-flex justify-content-start align-items-center mb-2"
                  >
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="lightnessradio"
                        id="lightnessradio2"
                        v-model="formData.light"
                        value="полутень"
                      />
                    </div>

                    <label
                      class="form-check-label h5 fw-normal m-0 px-1"
                      for="lightnessradio2"
                      style="min-width: 100px"
                    >
                      Полутень
                    </label>
                    <img
                      class="px-1"
                      src="@assets/img/icon_lightIcon_2_halfsun.svg"
                      alt="icon_lightIcon_2_halfsun"
                    />
                  </div>
                  <div
                    class="form-check d-flex justify-content-start align-items-center mb-2"
                  >
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="lightnessradio"
                        id="lightnessradio3"
                        v-model="formData.light"
                        value="тень"
                      />
                    </div>

                    <label
                      class="form-check-label h5 fw-normal m-0 px-1"
                      for="lightnessradio3"
                      style="min-width: 100px"
                    >
                      Тень
                    </label>
                    <img
                      class="px-1"
                      src="@assets/img/icon_lightIcon_3_cloudyDay.svg"
                      alt="icon_lightIcon_3_cloudyDay"
                    />
                  </div>
                </div>
              </div>
              <div class="options-group-3 col py-4">
                <h4 class="text-start text-truncate">Режим полива</h4>
                <div
                  class="text-start whiteBlock text-black p-3 rounded border-bshtr-contrastgreen h-100"
                >
                  <div
                    class="form-check d-flex justify-content-start align-items-center mb-2"
                    style="max-width: 280px"
                    v-tooltip.top="{
                      value: 'ежедневно',
                      pt: {
                        text: 'bg-white text-black',
                      },
                    }"
                    type="text"
                    placeholder="Top"
                  >
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="wateringMode"
                        id="wateringMode1"
                        v-model="formData.watering"
                        value="частый"
                      />
                    </div>
                    <label
                      class="form-check-label h5 fw-normal m-0 px-1"
                      for="wateringMode1"
                    >
                      частый
                    </label>
                    <img
                      class="px-1"
                      src="@assets/img/icon_note_circle.svg"
                      alt="icon_note_circle"
                    />
                  </div>

                  <div
                    class="form-check d-flex justify-content-start align-items-center mb-2"
                    style="max-width: 280px"
                    v-tooltip.top="{
                      value: 'через 2-3 дня',
                      pt: {
                        text: 'bg-white text-black',
                      },
                    }"
                    type="text"
                    placeholder="Top"
                  >
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="wateringMode"
                        id="wateringMode2"
                        v-model="formData.watering"
                        value="умеренный"
                      />
                    </div>
                    <label
                      class="form-check-label h5 fw-normal m-0 px-1"
                      for="wateringMode2"
                    >
                      умеренный
                    </label>
                    <img
                      class="px-1"
                      src="@assets/img/icon_note_circle.svg"
                      alt="icon_note_circle"
                    />
                  </div>
                  <div
                    class="form-check d-flex justify-content-start align-items-center mb-2"
                    style="max-width: 280px"
                    v-tooltip.top="{
                      value: 'раз в неделю',
                      pt: {
                        text: 'bg-white text-black',
                      },
                    }"
                    type="text"
                    placeholder="Top"
                  >
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="wateringMode"
                        id="wateringMode3"
                        v-model="formData.watering"
                        value="редкий"
                      />
                    </div>
                    <label
                      class="form-check-label h5 fw-normal m-0 px-1"
                      for="wateringMode3"
                    >
                      редкий
                    </label>
                    <img
                      class="px-1"
                      src="@assets/img/icon_note_circle.svg"
                      alt="icon_note_circle"
                    />
                  </div>
                  <div
                    class="form-check d-flex justify-content-start align-items-center mb-2"
                    style="max-width: 280px"
                    v-tooltip.top="{
                      value: 'опрыскивание',
                      pt: {
                        text: 'bg-white text-black',
                      },
                    }"
                    type="text"
                    placeholder="Top"
                  >
                    <div>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="wateringMode"
                        id="wateringMode4"
                        v-model="formData.watering"
                        value="сухой"
                      />
                    </div>
                    <label
                      class="form-check-label h5 fw-normal m-0 px-1"
                      for="wateringMode4"
                    >
                      сухой
                    </label>
                    <img
                      class="px-1"
                      src="@assets/img/icon_note_circle.svg"
                      alt="icon_note_circle"
                    />
                  </div>
                </div>
              </div>
              <div
                class="options-group-4 col py-4 pb-0 d-flex flex-column justify-content-between"
              >
                <div id="formColors1" class="align-self-start w-100">
                  <h4 class="text-start text-truncate">Основной цвет</h4>
                  <div
                    class="whiteBlock p-2 rounded border-bshtr-contrastgreen d-flex flex-wrap justify-content-around"
                  >
                    <div>
                      <input
                        v-for="garden in garden_colors"
                        :key="garden"
                        class="form-check-input form-check-input-black p-3 m-1 rounded"
                        :class="{
                          colorPicker_white: garden === 'белый',
                          colorPicker_red: garden === 'красный',
                          colorPicker_yellow: garden === 'желтый',
                          colorPicker_green: garden === 'зеленый',
                          colorPicker_blue: garden === 'синий',
                          colorPicker_purple: garden === 'фиолетовый',
                          colorPicker_pink: garden === 'розовый',
                        }"
                        v-tooltip.top="{
                          value: garden,
                          pt: {
                            text: 'bg-white text-black',
                          },
                        }"
                        type="radio"
                        name="maincolorradio"
                        v-model="formData.color_main"
                        :value="garden"
                      />
                    </div>
                  </div>
                </div>
                <div id="formColors2" class="align-self-end mt-auto w-100">
                  <h4 class="text-start text-truncate">Дополнительный цвет</h4>
                  <div
                    class="whiteBlock p-2 rounded border-bshtr-contrastgreen d-flex flex-wrap justify-content-around"
                  >
                    <div>
                      <input
                        v-for="garden1 in garden_colors"
                        :key="garden1"
                        class="form-check-input form-check-input-black p-3 m-1 rounded"
                        :class="{
                          colorPicker_white: garden1 === 'белый',
                          colorPicker_red: garden1 === 'красный',
                          colorPicker_yellow: garden1 === 'желтый',
                          colorPicker_green: garden1 === 'зеленый',
                          colorPicker_blue: garden1 === 'синий',
                          colorPicker_purple: garden1 === 'фиолетовый',
                          colorPicker_pink: garden1 === 'розовый',
                        }"
                        v-tooltip.top="{
                          value: garden1,
                          pt: {
                            text: 'bg-white text-black',
                          },
                        }"
                        type="radio"
                        name="othercolorradio"
                        aria-label="..."
                        v-model="formData.color_other"
                        :value="garden1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <!-- <button
                class="btn btn-outline-success text-black bg-white px-4 py-2"
                type="submit"
              >
                Сгенерировать
              </button> -->
              <Button
                class="px-4 py-2"
                type="submit"
                label="Сгенерировать"
                severity="secondary"
                :loading="loading"
                @click="gardenSubmit"
              ></Button>
            </div>
          </div>
          <div>
            <img src="" style="width: 500px" />
          </div>
        </form>
      </div>
    </div>
  </div>

  <div
    class="glowBehindBlock-1"
    v-show="generationDone"
    id="generationBlock_whenDone"
  >
    <div class="container-custom1920 px-4 py-5">
      <h1 class="pb-4 mr-auto text-center text-uppercase">Результат</h1>
      <div class="row">
        <div
          class="col gradient-block-1 p-5 rounded border-bshtr-green1 mt-4"
          id="result_text"
        >
          <div id="results_1" class="pb-4">
            <div class="h3 fw-normal pb-3 text-truncate">Период цветения</div>
            <div class="row">
              <div class="col">
                <div class="h4 fw-normal">Начало:</div>
                <div class="h5 fw-normal">
                  {{ sliderMarks[formData.period_bloosom_start].label }}
                </div>
              </div>
              <div class="col">
                <div class="h4 fw-normal">Конец:</div>
                <div class="h5 fw-normal">
                  {{ sliderMarks[formData.period_bloosom_end].label }}
                </div>
              </div>
            </div>
          </div>
          <div id="results_2" class="row pb-4">
            <div id="results_2-1" class="col mb-2">
              <div class="h3 fw-normal pb-2">Освещённость</div>

              <div class="d-flex justify-content-start align-items-center mb-2">
                <label
                  class="form-check-label h4 fw-normal m-0 px-1 align-text-top"
                  for="lightnessradio1"
                  style="min-width: 100px"
                >
                  {{ formData.light }}
                </label>
                <div style="height: 100%">
                  <img
                    class="px-1 svgIcon_whiteFill"
                    :src="
                      generationResults_shadow?.[formData.light].icon ||
                      img_icon_shadow_sun
                    "
                    alt="icon_lightIcon_1_sun"
                  />
                </div>
              </div>
            </div>
            <div id="results_2-2" class="col">
              <div class="h3 fw-normal pb-2 text-truncate">Режим полива</div>
              <div
                class="d-flex justify-content-start align-items-center mb-2"
                style="max-width: 224px"
                v-tooltip.top="{
                  value:
                    generationResults_watering?.[formData.watering].tooltip,
                  pt: {
                    text: 'bg-white text-black',
                  },
                }"
              >
                <label
                  class="form-check-label h4 fw-normal m-0 px-1"
                  for="lightnessradio1"
                  style="min-width: 100px"
                >
                  {{ formData.watering }}
                </label>
                <img
                  class="px-1 svgIcon_whiteFill"
                  src="@assets/img/icon_note_circle.svg"
                  alt="icon_lightIcon_1_sun"
                />
              </div>
            </div>
          </div>
          <div id="results_3" class="pb-4">
            <div class="h3 fw-normal pb-2">Цветовая гамма</div>
            <div
              class="d-flex align-items-center justify-content-start p-3 py-2 whiteBlock rounded border-bshtr-contrastgreen"
              style="max-width: 154px"
            >
              <div class="" v-if="formData.color_main != null">
                <div
                  class="border-dark p-4 m-1 rounded border-bshtr-green1"
                  :class="{
                    colorPicker_white: formData.color_main === 'белый',
                    colorPicker_red: formData.color_main === 'красный',
                    colorPicker_yellow: formData.color_main === 'желтый',
                    colorPicker_green: formData.color_main === 'зеленый',
                    colorPicker_blue: formData.color_main === 'синий',
                    colorPicker_purple: formData.color_main === 'фиолетовый',
                    colorPicker_pink: formData.color_main === 'розовый',
                  }"
                  v-tooltip.top="{
                    value: formData.color_main,
                    pt: {
                      text: 'bg-white text-black',
                    },
                  }"
                ></div>
              </div>
              <div class="" v-if="formData.color_other != null">
                <div
                  class="border-dark p-4 m-1 rounded border-bshtr-green1"
                  :class="{
                    colorPicker_white: formData.color_other === 'белый',
                    colorPicker_red: formData.color_other === 'красный',
                    colorPicker_yellow: formData.color_other === 'желтый',
                    colorPicker_green: formData.color_other === 'зеленый',
                    colorPicker_blue: formData.color_other === 'синий',
                    colorPicker_purple: formData.color_other === 'фиолетовый',
                    colorPicker_pink: formData.color_other === 'розовый',
                  }"
                  v-tooltip.top="{
                    value: formData.color_other,
                    pt: {
                      text: 'bg-white text-black',
                    },
                  }"
                ></div>
              </div>
            </div>
          </div>
          <div id="results_4_buttons" class="py-4">
            <button
              class="btn btn btn-outline-success text-white px-5 py-2 me-3 mb-2"
              @click="switchToGeneration"
            >
              Редактировать
            </button>
            <button
              class="btn btn btn-outline-success text-white px-5 py-2 me-3 mb-2"
            >
              Скачать материалы
            </button>
          </div>
          <div id="results_5_generate">
            <!-- <button
              class="btn btn-outline-success text-black bg-white px-4 py-2"
            >
              Сгенерировать
            </button> -->
            <Button
              class="px-4 py-2"
              type="submit"
              label="Сгенерировать"
              severity="secondary"
              :loading="loading"
              @click="gardenSubmit"
            ></Button>
          </div>
        </div>
        <div class="col mt-4" id="pic_garden" style="min-width: 50%">
          <img
            :src="pic_garden"
            :alt="pic_garden"
            style="max-height: 100%; width: 100%"
            class="rounded"
          />
        </div>
      </div>
    </div>
    <div class="container-custom1920 px-4 py-5 glowBehindBlock-1">
      <h1 class="pb-4 mb-5 mr-auto text-center text-uppercase">
        Карта рассадки
      </h1>
      <div
        class="gradient-block-1 rounded p-4 d-flex align-items-center justify-content-center"
        style="min-height: 300px; max-height: 500px"
      >
        <div id="pic_gardenMap" style="height: 80%" class="py-4">
          <img
            style="height: 300px; width: 100%"
            :src="pic_gardenMap"
            :alt="pic_gardenMap"
            class="rounded"
          />
        </div>
      </div>
    </div>
    <div class="container-custom1920 px-0 py-5 mb-5 glowBehindBlock-1">
      <h1 class="pb-4 mr-auto text-center text-uppercase">Цветы</h1>
      <div
        class="d-flex flex-wrap justify-content-center"
        v-if="flowersGeneratedList.length > 2"
      >
        <div
          class="flower-item py-4 px-4"
          v-for="(flower, index) in flowersGeneratedList"
          :key="flower"
          style="max-width: 700px"
        >
          <div class="h4 fw-normal px-0">
            {{ index + 1 + ". " }}{{ flower.name }}
          </div>
          <div class="row g-0">
            <div class="col-8 border-top-dotted-4f4f4f py-4">
              {{
                flower.description.split("\.", 4).slice(0, 4).join(". ") + "."
              }}
            </div>
            <div class="col ps-4" style="max-width: 300px">
              <img
                :src="flower.storageUrl || img_placeholder"
                :alt="flower.id"
                style="width: 100%"
                class="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="anchorButton_toTop">
      <Button
        raised
        class="px-3 py-2 floatingButtonAnchor_1 gradient-block-1 border-bshtr-green1"
        type="submit"
        label="Наверх"
      >
        <RouterLink
          class="nav-link active"
          aria-current="page"
          :to="{ name: 'gensettings', hash: '#generationPage_top' }"
          active-class="active"
        >
          <img
            class="px-1"
            src="@assets/img/icon_arrow-up-Bold.svg"
            alt="icon_arrow-up-Bold" /></RouterLink
      ></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { postGarden } from "../services/flowers";
import { Garden } from "../entities/garden";
import { postGetFlowersByGarden } from "../services/gardens";
import { Flower } from "../entities/flower";
import VueSlider from "vue-slider-component";
import Button from "primevue/button";
import img_placeholder from "@assets/img/placeholder_noimage.png";
import img_icon_shadow_sun from "@assets/img/icon_lightIcon_1_sun.svg";
import img_icon_shadow_halfsun from "@assets/img/icon_lightIcon_2_halfsun.svg";
import img_icon_shadow_cloudyDay from "@assets/img/icon_lightIcon_3_cloudyDay.svg";
import img_flowerBedPlaceholder from "@assets/img/flowerbedGen_default.png";

const generationDone = ref(false); // для скрытия окна с формой и показа результатов генерации
const switchToGeneration = async () => {
  generationDone.value = !generationDone.value;
};

const sliderValue = ref([6, 8]);
defineExpose({ sliderValue });
const sliderMarks = ref({
  5: {
    label: "май",
  },
  6: {
    label: "июнь",
  },
  7: {
    label: "июль",
  },
  8: {
    label: "август",
  },
  9: {
    label: "сентябрь",
  },
});

const garden_colors = [
  "белый",
  "красный",
  "желтый",
  "зеленый",
  "синий",
  "фиолетовый",
  "розовый",
];

const formData: Ref<Flower> = ref({
  name: "",
  description: "",
  frost_resistance_zone: 1,
  light: "солнце",
  watering: "частый",
  color_main: "белый",
  color_other: "белый",
  period_bloosom_start: sliderValue.value[0],
  period_bloosom_end: sliderValue.value[1],
});

const generationResults_shadow = ref({
  солнце: {
    label: "Cолнце",
    icon: img_icon_shadow_sun,
  },
  полутень: {
    label: "Полутень",
    icon: img_icon_shadow_halfsun,
  },
  тень: {
    label: "Тень",
    icon: img_icon_shadow_cloudyDay,
  },
});
const generationResults_watering = ref({
  частый: {
    label: "частый",
    tooltip: "ежедневно",
  },
  умеренный: {
    label: "умеренный",
    tooltip: "через 2-3 дня",
  },
  редкий: {
    label: "редкий",
    tooltip: "раз в неделю",
  },
  сухой: {
    label: "сухой",
    tooltip: "опрыскивание",
  },
});

const gardenArrayToSend: Ref<Garden> = ref({
  gardens: "3", // дефолтный цветник если ничо не работает
});
let flowersGeneratedList: Ref<any[]> = ref([]);

const loading = ref(false);
const pic_garden = ref(img_flowerBedPlaceholder);
const pic_gardenMap = ref(img_placeholder);

const gardenSubmit = async () => {
  // при нажатии кнопки генерации
  loading.value = true;
  postGarden(formData.value).then((resp) => {
    loading.value = false;
    generationDone.value = true;
    gardenArrayToSend.value.gardens = resp.data.gardens[0].toString(); // беру себе первый гарден
    console.log(gardenArrayToSend.value);
    postGetFlowersByGarden(gardenArrayToSend.value).then((resp) => {
      flowersGeneratedList.value = resp.data.flowers;
      console.log(
        flowersGeneratedList.value.map((value) => {
          GetStoragePic(value.id)
            .then((resp) => {
              value["storageUrl"] = resp;
            })
            .catch((error: any) => {
              console.error(error);
            });
          return value;
        })
      );
      setTimeout(() => {
        // Code to execute after 2 seconds
        console.log(
          GetStoragePicGardensMap(gardenArrayToSend.value.gardens).then(
            (resp) => {
              pic_gardenMap.value = resp;
              // тут потом будет другая функция, чтобы получить карту цветника
            }
          )
        );
      }, 2000);
      // console.log(
      //   GetStoragePic(gardenArrayToSend.value.gardens).then((resp) => {
      //     pic_garden.value = resp;
      //     // работает корректно, проверено
      //   })
      // );
      // console.log(gardenArrayToSend.value.gardens);

      // console.log(
      //   GetStoragePicGardensMap(gardenArrayToSend.value.gardens).then(
      //     (resp) => {
      //       pic_gardenMap.value = resp;
      //       // тут потом будет другая функция, чтобы получить карту цветника
      //     }
      //   )
      // );
    });
  });
};

import { db, storage } from "@/firebase"; // на удивление работает? хотя пишет ошибку импорта
import { getDownloadURL, ref as ref1 } from "firebase/storage";

async function GetStoragePic(storageUrl: string): Promise<string> {
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
async function GetStoragePicGardensMap(storageUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const storageRef = ref1(storage, `gardens/${storageUrl}.png`.toString());
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
</script>

<style lang="scss" scoped>
.gensettings {
  background-image: url("@assets/img/gen-VectorFlowers.png"),
    linear-gradient(to top, $bshtr-grad1-green1, $bshtr-grad1-green2);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
}

.floatingButtonAnchor_1 {
  position: fixed;
  right: 10vw;
  bottom: 10vh;
  color: white;
  aspect-ratio: 1;
  z-index: 1000;
}

.whiteBlock {
  background: #f4f4f4b2;
}

.p-button-label {
  font-weight: normal;
}
.p-button-secondary {
  color: black;
  background: var(--p-button-secondary-background);
  border: 1px solid var(--p-button-secondary-border-color);
}

.form-check-input-black:checked {
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
.colorPicker_white {
  background-color: rgb(253, 253, 253);
}
.colorPicker_red {
  background-color: #ff3030;
}
.colorPicker_yellow {
  background-color: #fff27c;
}
.colorPicker_green {
  background-color: #207b25;
}
.colorPicker_blue {
  background-color: #3239b4;
}
.colorPicker_purple {
  background-color: #da71ff;
}
.colorPicker_pink {
  background-color: #fe8fc7;
}
</style>
