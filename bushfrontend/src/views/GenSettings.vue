<template>
  <div class="py-5"></div>

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
                    <div
                      class=""
                      v-for="garden1 in garden_colors"
                      :key="garden1"
                    >
                      <input
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

  <div class="glowBehindBlock-1" v-show="generationDone">
    <div class="container-custom1920 px-4 py-5">
      <h1 class="pb-4 mb-5 mr-auto text-center text-uppercase">Результат</h1>
      <div class="row">
        <div
          class="col gradient-block-1 p-5 rounded border-bshtr-green1"
          id="result_text"
        >
          <div id="results_1" class="pb-4">
            <div class="h4 fw-normal pb-2">Период цветения</div>
            <div class="row">
              <div class="col">
                <div class="h5 fw-normal">Начало:</div>
                <div>{{ formData.period_bloosom_start }}</div>
              </div>
              <div class="col">
                <div class="h5 fw-normal">Конец:</div>
                <div>{{ formData.period_bloosom_end }}</div>
              </div>
            </div>
          </div>
          <div id="results_2" class="row pb-4">
            <div id="results_2-1" class="col">
              <div class="h4 fw-normal pb-2">Освещённость</div>

              <div class="d-flex justify-content-start align-items-center mb-2">
                <label
                  class="form-check-label h5 fw-normal m-0 px-1"
                  for="lightnessradio1"
                  style="min-width: 100px"
                >
                  {{ formData.light }}
                </label>
                <img
                  class="px-1"
                  src="@assets/img/icon_lightIcon_1_sun.svg"
                  alt="icon_lightIcon_1_sun"
                />
              </div>
            </div>
            <div id="results_2-2" class="col">
              <div class="h4 fw-normal pb-2">Режим полива</div>
              <div class="d-flex justify-content-start align-items-center mb-2">
                <label
                  class="form-check-label h5 fw-normal m-0 px-1"
                  for="lightnessradio1"
                  style="min-width: 100px"
                >
                  {{ formData.watering }}
                </label>
                <img
                  class="px-1"
                  src="@assets/img/icon_lightIcon_1_sun.svg"
                  alt="icon_lightIcon_1_sun"
                />
              </div>
            </div>
          </div>
          <div id="results_3" class="pb-4">
            <div class="h4 fw-normal pb-2">Цветовая гамма</div>
            <div
              class="d-flex align-items-center justify-content-start p-2 whiteBlock rounded border-bshtr-contrastgreen"
            >
              <div class="" v-if="formData.color_main != null">
                <div
                  class="border-dark p-3 m-1 rounded"
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
                  class="border-dark p-3 m-1 rounded"
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
          <div id="results_4_buttons" class="pb-4">
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
        <div class="col" id="result_pic">
          <img
            :src="gardenArrayToSend.storageUrl || img_placeholder"
            :alt="gardenArrayToSend.storageUrl || img_placeholder"
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
        style="height: 50vh"
      >
        <div>
          <div
            style="
              min-width: 600px;
              max-width: 50%;
              min-height: 100px;
              max-height: 700px;
            "
            class="row"
          >
            <div
              class="whiteBlock rounded col m-3 d-flex align-items-center justify-content-center text-black fw-normal h3"
            >
              1
            </div>
            <div
              class="whiteBlock rounded col m-3 d-flex align-items-center justify-content-center text-black fw-normal h3"
            >
              2
            </div>
          </div>
          <div
            style="
              min-width: 600px;
              max-width: 50%;
              min-height: 100px;
              max-height: 700px;
            "
            class="row"
          >
            <div
              class="whiteBlock rounded col m-3 d-flex align-items-center justify-content-center text-black fw-normal h3"
            >
              3
            </div>
            <div
              class="whiteBlock rounded col m-3 d-flex align-items-center justify-content-center text-black fw-normal h3"
            >
              4
            </div>
          </div>
          <div
            style="
              min-width: 600px;
              max-width: 50%;
              min-height: 100px;
              max-height: 700px;
            "
            class="row"
          >
            <div
              class="whiteBlock rounded col m-3 d-flex align-items-center justify-content-center text-black fw-normal h3"
            >
              5
            </div>
            <div
              class="whiteBlock rounded col m-3 d-flex align-items-center justify-content-center text-black fw-normal h3"
            >
              6
            </div>
          </div>
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
            <div class="col border-top-dotted-4f4f4f py-4">
              {{ flower.description.substring(0, 300) + "..." }}
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
  </div>
</template>

<style></style>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { postGarden } from "../services/flowers";
import { Garden } from "../entities/garden";
import { postGetFlowersByGarden } from "../services/gardens";
import { Flower } from "../entities/flower";
import VueSlider from "vue-slider-component";
import Button from "primevue/button";
import img_placeholder from "@assets/img/placeholder_noimage.png";

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

const gardenArrayToSend: Ref<Garden> = ref({
  gardens: "3", // дефолтный цветник если ничо не работает
});
let flowersGeneratedList: Ref<any[]> = ref([]);
const loading = ref(false);

const gardenSubmit = async () => {
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
</script>

<style lang="scss" scoped>
.gensettings {
  background-image: url("@assets/img/gen-VectorFlowers.png"),
    linear-gradient(to top, $bshtr-grad1-green1, $bshtr-grad1-green2);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
}

.whiteBlock {
  background: #f4f4f4b2;
}

.p-button-label {
  font-weight: normal;
}
.p-button-secondary {
  color: black;
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
