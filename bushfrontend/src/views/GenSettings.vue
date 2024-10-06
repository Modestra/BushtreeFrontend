<template>
  <div class="py-5"></div>

  <div class="glowBehindBlock-1">
    <div class="container-custom1920 px-4 py-5">
      <h1 class="pb-4 mb-5 mr-auto text-center text-uppercase">
        Настройте параметры вашего будущего цветника
      </h1>
      <div>
        <div
          class="gensettings px-4 py-5 row justify-content-start g-4 py-5 rounded border-bshtr-green1 gen-flowers-background"
        >
          <div>
            <div>
              <div class="options-group-1">
                <h4 class="text-start">Период цветения</h4>
                <VueSlider
                  ref="slider"
                  v-model="value"
                  :marks="true"
                  :min="0"
                  :max="5"
                  class="m-5 mt-3 mx-0"
                ></VueSlider>
              </div>
            </div>
            <div class="row">
              <div class="options-group-2 col py-4">
                <h4 class="text-start text-truncate">Освещённость</h4>
                <div
                  class="text-start whiteBlock text-black p-3 rounded border-bshtr-contrastgreen h-100"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="lightnessradio"
                      id="lightnessradio1"
                    />
                    <label class="form-check-label" for="lightnessradio1">
                      Солнце
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="lightnessradio"
                      id="lightnessradio2"
                      checked
                    />
                    <label class="form-check-label" for="lightnessradio2">
                      Полутень
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="lightnessradio"
                      id="lightnessradio3"
                    />
                    <label class="form-check-label" for="lightnessradio3">
                      Тень
                    </label>
                  </div>
                </div>
              </div>
              <div class="options-group-3 col py-4">
                <h4 class="text-start text-truncate">Режим полива</h4>
                <div
                  class="text-start whiteBlock text-black p-3 rounded border-bshtr-contrastgreen h-100"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="wateringMode"
                      id="wateringMode1"
                    />
                    <label class="form-check-label" for="wateringMode1">
                      частый
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="wateringMode"
                      id="wateringMode2"
                      checked
                    />
                    <label class="form-check-label" for="wateringMode2">
                      умеренный
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="wateringMode"
                      id="wateringMode3"
                    />
                    <label class="form-check-label" for="wateringMode3">
                      редкий
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="wateringMode"
                      id="wateringMode4"
                    />
                    <label class="form-check-label" for="wateringMode4">
                      сухой
                    </label>
                  </div>
                </div>
              </div>
              <div
                class="options-group-4 col py-4 pb-0 d-flex flex-wrap justify-content-between"
              >
                <div id="formColors1" class="align-self-start w-100">
                  <h4 class="text-start text-truncate">Основной цвет</h4>
                  <div
                    class="whiteBlock p-2 rounded border-bshtr-contrastgreen d-flex flex-wrap justify-content-around"
                  >
                    <div class="" v-for="index in 3" :key="index">
                      <input
                        class="form-check-input p-3"
                        type="checkbox"
                        id="checkboxNoLabel"
                        value=""
                        aria-label="..."
                      />
                    </div>
                  </div>
                </div>
                <div id="formColors2" class="align-self-end w-100">
                  <h4 class="text-start text-truncate">Дополнительный цвет</h4>
                  <div
                    class="whiteBlock p-2 rounded border-bshtr-contrastgreen d-flex flex-wrap justify-content-around"
                  >
                    <div class="" v-for="index in 3" :key="index">
                      <input
                        class="form-check-input p-3"
                        type="checkbox"
                        id="checkboxNoLabel"
                        value=""
                        aria-label="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <button
                class="btn btn-light btn-outline-success text-black px-4 py-2"
              >
                Сгенерировать
              </button>
            </div>
          </div>
          <div>
            <img src="" style="width: 500px" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="glowBehindBlock-1">
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
                <div>май</div>
              </div>
              <div class="col">
                <div class="h5 fw-normal">Конец:</div>
                <div>июль</div>
              </div>
            </div>
          </div>
          <div id="results_2" class="row pb-4">
            <div id="results_2-1" class="col">
              <div class="h4 fw-normal pb-2">Освещённость</div>
              <div class="d-flex align-items-center pb-2">
                <div class="flex-grow-1 me-3">солнце</div>
                <div class="flex-shrink-0">
                  <img
                    src="@assets/img/logo-whatsapp.svg"
                    alt="telegram-logo"
                  />
                </div>
              </div>
            </div>
            <div id="results_2-2" class="col">
              <div class="h4 fw-normal pb-2">Режим полива</div>
              <div class="d-flex align-items-center pb-2">
                <div class="flex-grow-1 me-3">частый</div>
                <div class="flex-shrink-0">
                  <img
                    src="@assets/img/logo-whatsapp.svg"
                    alt="telegram-logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="results_3" class="pb-4">
            <div class="h4 fw-normal pb-2">Цветовая гамма</div>
            <div
              class="d-flex align-items-center pb-2 whiteBlock rounded border-bshtr-contrastgreen p-4"
            >
              <div class="flex-grow-1 me-3">частый</div>
              <div class="flex-shrink-0">
                <img src="@assets/img/logo-whatsapp.svg" alt="telegram-logo" />
              </div>
            </div>
          </div>
          <div id="results_4_buttons" class="pb-4">
            <button
              class="btn btn btn-outline-success text-white px-5 py-2 me-3"
            >
              Редактировать
            </button>
            <button
              class="btn btn btn-outline-success text-white px-5 py-2 me-3"
            >
              Скачать материалы
            </button>
          </div>
          <div id="results_5_generate">
            <button
              class="btn btn-light btn-outline-success text-black px-4 py-2"
            >
              Сгенерировать
            </button>
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
          v-for="index in 6"
          :key="index"
          style="max-width: 700px"
        >
          <div class="h4 fw-normal px-0">{{ index + ". " }}Щучка дернистая</div>
          <div class="row g-0">
            <div class="col border-top-dotted-4f4f4f py-4">
              Многолетний дерновинный злак, образующий кочки. Стебли
              прямостоячие с расставленными узлами. Листья длинные,
              тёмно-зелёные, до 3 мм шириной, острошероховатые, склоняющиеся,
              что придаёт кочке полукруглый, каскадообразный вид. Общее
              соцветие — раскидистые метелки длиной 10–25 см. Зацветают
              зеленовато-фиолетовым цветом, позже зеленоватым. Далее соцветия
              становятся светло-золотистыми и выгорают до светло-соломенного.
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
import { CreateSession, GetSession } from "../services/sessions";
// import { Session } from "../entities/session";
import { postFlowerComp } from "../services/flowers";
import { FlowerComp } from "../entities/flowercomp";

import VueSlider from "vue-slider-component";

const value = ref([2, 4]);
defineExpose({ value });

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

const formData: Ref<FlowerComp> = ref({
  Name: "",
  Description: "",
  Frozen_resistance: "",
  Sunlight: "",
  Period_blossom_start: "",
  Period_blossom_end: "",
  Height: "",
  Color_bloss_name: "",
  Color_bloss_hex: "",
  Color_leaves_name: "",
  Color_leaves_hex: "",
});
// const formData: Ref<FlowerComp> = ref({
//   Name: "",
//   description: "",
//   frost_resistance_zone: 0,
//   light: "",
//   watering: "",
//   color_main: "",
//   color_other: "",
//   period_bloosom_start: "",
//   period_bloosom_end: ""
// });
// {
//   "name": "string",
//   "description": "string",
//   "frost_resistance_zone": 2147483647,
//   "light": "string",
//   "watering": "string",
//   "color_main": "фиолетовый",
//   "color_other": "белый",
//   "period_bloosom_start": 2147483647,
//   "period_bloosom_end": 2147483647
// }
// user sends only 2 colors
async function onSubmit() {
  postFlowerComp(formData.value);
}
</script>

<style lang="scss" scoped>
.gensettings {
  @include gradient-block-1(background);
}

.gen-flowers-background {
  background-image: url("@assets/img/gen-VectorFlowers.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.whiteBlock {
  background: #f4f4f4b2;
}
</style>
