<template>
  <div class="py-5"></div>
  <div class="container px-4 py-5">
    <h1 class="pb-4 mr-auto text-center text-uppercase">
      Настройте параметры вашего будущего цветника
    </h1>
    <div>
      <div class="gensettings px-4 py-5 row justify-content-left g-4 py-5">
        <div>
          <div class="options-group-1">
            <h4 class="text-start">Период цветения</h4>
            <VueSlider
              ref="slider"
              v-model="value"
              :marks="true"
              :min="0"
              :max="5"
            ></VueSlider>
          </div>
        </div>
        <div class="row-cols-1 row-cols-lg-2">
          <div class="options-group-2">
            <h4 class="text-start">Освещённость</h4>
            <div class="text-start whiteBlock text-black">
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
          <div class="options-group-3">
            <h4 class="text-start">Режим полива</h4>
            <div class="text-start whiteBlock text-black">
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
          <div class="options-group-4">
            <h4 class="text-start">Цветовая гамма</h4>
            <div class="text-start whiteBlock text-black">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="wateringMode"
                  id="wateringMode1"
                />
                <label class="form-check-label" for="wateringMode1">
                  Май
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
                  Июнь
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
                  Июль
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
                  Август
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="wateringMode"
                  id="wateringMode5"
                />
                <label class="form-check-label" for="wateringMode5">
                  Сентябрь
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="btn btn-outline-success">Сгенерировать</button>
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
// import "vue-slider-component/theme/default.css";
import "vue-slider-component/theme/antd.css";

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
async function onSubmit() {
  postFlowerComp(formData.value);
}
</script>

<style lang="scss" scoped>
.gensettings {
  @include card-gradient(background);
}

.whiteBlock {
  background: #f4f4f4b2;
}
</style>
