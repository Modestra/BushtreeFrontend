<template>
  <div class="py-5"></div>

  <div class="glowBehindBlock-1" v-if="!generationDone">
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
                        checked
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
                        checked
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
                    <div class="" v-for="garden in garden_colors" :key="garden">
                      <div>
                        <input
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
                          id="maincolorradio"
                          :value="{ garden }"
                        />
                      </div>
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
                        id="checkboxNoLabel"
                        aria-label="..."
                        :value="{ garden1 }"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <!-- <button
                class="btn btn-light btn-outline-success text-black px-4 py-2"
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
                @click="load"
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

  <div class="glowBehindBlock-1" v-if="!generationDone">
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
              class="btn btn-light btn-outline-success text-black px-4 py-2"
            >
              Сгенерировать
            </button> -->
            <Button
              class="px-4 py-2"
              type="submit"
              label="Сгенерировать"
              severity="secondary"
              :loading="loading"
              @click="load"
            ></Button>
          </div>
        </div>
        <div class="col" id="result_pic">
          <img
            src="@assets/img/flowerbed-1.png"
            alt="#"
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
      <div class="d-flex flex-wrap justify-content-center">
        <div
          class="flower-item py-4 px-4"
          v-for="(flower, index) in flowersGeneratedList[0]"
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
                src="@assets/img/flowerbed-1.png"
                alt="#"
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
import { GetSession } from "../services/sessions";
// import { CreateSession } from "../services/sessions";
// import { Session } from "../entities/session";
import { postGarden } from "../services/gardens";
import { Garden } from "../entities/garden";
import { postGetFlowersByGarden } from "../services/flowers";
import { Flower } from "../entities/flower";
import VueSlider from "vue-slider-component";
import Button from "primevue/button";

var generationDone = ref();

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

const loading = ref(false);

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const garden_colors = [
  "белый",
  "красный",
  "желтый",
  "зеленый",
  "синий",
  "фиолетовый",
  "розовый",
];
// options: { // all slider options //
//         dotSize: 14,
//         width: 'auto',
//         height: 4,
//         contained: false,
//         direction: 'ltr',
// 	       data: null,
//         dataLabel: 'label',
//         dataValue: 'value',
//         min: 0,
//         max: 100,
//         interval: 1,
//         disabled: false,
//         clickable: true,
//         duration: 0.5,
//         adsorb: false,
//         lazy: false,
//         tooltip: 'active',
//         tooltipPlacement: 'top',
//         tooltipFormatter: void 0,
//         useKeyboard: false,
//         keydownHook: null,
//         dragOnClick: false,
//         enableCross: true,
//         fixed: false,
//         minRange: void 0,
//         maxRange: void 0,
//         order: true,
//         marks: true,
//         dotOptions: void 0,
//         dotAttrs: void 0,
//         process: true,
//         dotStyle: void 0,
//         railStyle: void 0,
//         processStyle: void 0,
//         tooltipStyle: void 0,
//         stepStyle: void 0,
//         stepActiveStyle: void 0,
//         labelStyle: void 0,
//         labelActiveStyle: void 0,
//       }

GetSession().then((resp) => {
  console.log(resp);
});

const formData: Ref<Garden> = ref({
  name: "",
  description: "",
  frost_resistance_zone: 1,
  light: "полутень",
  watering: "сухой",
  color_main: "зеленый",
  color_other: "желтый",
  period_bloosom_start: sliderValue.value[0],
  period_bloosom_end: sliderValue.value[1],
});
// const formData: Ref<Garden> = ref({
//   name: "",
//   description: "",
//   frost_resistance_zone: 1,
//   light: "",
//   watering: "",
//   color_main: "",
//   color_other: "",
//   period_bloosom_start: sliderValue.value[0],
//   period_bloosom_end: sliderValue.value[1],
// });
const gardenArrayToSend: Ref<Flower> = ref({
  gardens: "6",
});
const flowersGeneratedList = [];

const gardenSubmit = async () => {
  postGarden(formData.value).then((resp) => {
    console.log(resp);
    // generationDone = true;
    // console.log(generationDone);
    // postGetFlowersByGarden("2");
    // postGetFlowersByGarden(resp.data.gardens[0].toString());
    // console.log(resp.data.gardens[0].toString());
    // console.log(formData.value.frost_resistance_zone);
    postGetFlowersByGarden(gardenArrayToSend.value).then((resp) => {
      // console.log(resp);
      flowersGeneratedList.push(resp.data.flowers);
      console.log(flowersGeneratedList);
    });
  });
};
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