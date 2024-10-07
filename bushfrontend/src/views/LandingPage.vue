<script setup>
import landigCarousel from "../components/landig-carousel.vue";
import { ref, onMounted } from "vue";
import Galleria from "primevue/galleria";

const images = [
  {
    itemImageSrc: "./src/assets/img/flowerbed-1.png",
    thumbnailImageSrc: "./src/assets/img/flowerbed-1.png",
    alt: "Image 1",
  },
  {
    itemImageSrc: "./src/assets/img/flowerbed-2.png",
    thumbnailImageSrc: "./src/assets/img/flowerbed-2.png",
    alt: "Image 1",
  },
  {
    itemImageSrc: "./src/assets/img/flowerbed-3.png",
    thumbnailImageSrc: "./src/assets/img/flowerbed-3.png",
    alt: "Image 1",
  },
  {
    itemImageSrc: "./src/assets/img/flowerbed-4.png",
    thumbnailImageSrc: "./src/assets/img/flowerbed-4.png",
    alt: "Image 1",
  },
  {
    itemImageSrc: "./src/assets/img/flowerbed-5.png",
    thumbnailImageSrc: "./src/assets/img/flowerbed-5.png",
    alt: "Image 1",
  },
  {
    itemImageSrc: "./src/assets/img/flowerbed-6.png",
    thumbnailImageSrc: "./src/assets/img/flowerbed-6.png",
    alt: "Image 1",
  },
];
const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 6,
  },
  {
    breakpoint: "575px",
    numVisible: 6,
  },
]);
const position = "right";
</script>

<template>
  <div>
    <div class="landing-hero pt-5" style="height: 120vh" id="landing_start">
      <div class="container px-4 py-5 d-flex flex-column" style="height: 100%">
        <h1 class="h1_bigger1 p-4 mr-auto text-center text-uppercase">
          Подберем идеальный цветник для вашего участка
        </h1>
        <div class="d-flex justify-content-center" style="min-height: 50%">
          <div class="align-self-end" style="max-width: 600px">
            <div class="align-items-center">
              <p class="text-center pb-4 h5 fw-normal">
                Выберите параметры вашего участка и мы предложим подходящие
                цветы и варианты рассадки
              </p>
              <form class="d-flex justify-content-center">
                <RouterLink
                  class="btn btn-outline-success text-black bg-white px-4 py-3"
                  to="/gensettings"
                  active-class="active"
                >
                  <p class="justify-content-center h5 fw-normal p-0 m-0">
                    Узнать подробнее
                  </p>
                </RouterLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-5 glowBehindBlock-1" id="landing_galleria">
      <div class="container-custom1920 px-4 pb-5">
        <h2 class="h1 pb-5 mr-auto text-center text-uppercase">
          Готовые решения
        </h2>
        <div>
          <Galleria
            :value="images"
            :responsiveOptions="responsiveOptions"
            :numVisible="6"
            :thumbnailsPosition="position"
            containerStyle="width: 100%"
            :circular="true"
            class="no-border"
            :autoPlay="true"
            :transitionInterval="3000"
          >
            <template #item="slotProps">
              <img
                :src="slotProps.item.itemImageSrc"
                :alt="slotProps.item.alt"
                style="max-width: 100%; width: 1255px"
                class="rounded"
              />
            </template>
            <template #thumbnail="slotProps">
              <img
                :src="slotProps.item.thumbnailImageSrc"
                :alt="slotProps.item.alt"
                style="max-height: 100px; max-width: 100px"
                class="p-1 rounded"
              />
            </template>
          </Galleria>
        </div>
      </div>

      <div class="container-custom1920 pt-5">
        <h2 class="h1 pt-5 pb-2 mr-auto text-center text-uppercase">
          Кому подойдёт сервис?
        </h2>
        <div
          class="row justify-content-center g-4 py-5 row-cols-1 row-cols-lg-3"
        >
          <div
            class="card gradient-block-1 text-bg-dark mb-3 border-bshtr-green1 m-2"
            style="max-width: 30rem"
          >
            <div class="card-body px-2">
              <img src="@assets/img/landing-project.svg" class="pb-5" />
              <div class="pt-5">
                <p class="h5 fw-normal">Бизнес</p>
                <p class="card-text">
                  Для предпринимателей, которые занимаются озеленением
                </p>
              </div>
            </div>
          </div>
          <div
            class="card gradient-block-1 text-bg-dark mb-3 border-bshtr-green1 m-2"
            style="max-width: 30rem"
          >
            <div class="card-body px-2">
              <img src="@assets/img/landing-gardening.svg" class="pb-5" />
              <div class="pt-5">
                <p class="h5 fw-normal">Садоводство</p>
                <p class="card-text">
                  Для садоводов, которые хотят создать красивый цветник
                </p>
              </div>
            </div>
          </div>
          <div
            class="card gradient-block-1 text-bg-dark mb-3 border-bshtr-green1 m-2"
            style="max-width: 30rem"
          >
            <div class="card-body px-2">
              <img src="@assets/img/landing-designer.svg" class="pb-5" />
              <div class="pt-5">
                <p class="h5 fw-normal">Дизайн</p>
                <p class="card-text">
                  Для ландшафтных архитекторов, которые ценят свое время
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-custom1920 px-4 py-5" id="landing_4steps">
      <h2 class="h1 pb-2 mr-auto text-center text-uppercase">
        4 шага к красивому цветнику
      </h2>
      <div class="row justify-content-center g-4 py-5 mx-auto align-self-end">
        <div class="col align-items-center">
          <div class="landing-4steps row-cols-2">
            <div>
              <div class="row align-items-center col">
                <div class="col">Нажмите кнопку «Сгенерировать»</div>
                <div class="col">
                  <div
                    class="landing-littleVectorFlower d-flex justify-content-center"
                  >
                    <div class="p-0 m-0 g-0 text-center align-self-center h5">
                      2
                    </div>
                  </div>
                </div>
              </div>

              <div class="row align-items-center col">
                <div class="col">
                  <div
                    class="landing-littleVectorFlower d-flex justify-content-center"
                  >
                    <div class="p-0 m-0 g-0 text-center align-self-center h5">
                      3
                    </div>
                  </div>
                </div>
                <div class="col">Посмотрите результат</div>
              </div>
            </div>

            <div>
              <div class="row align-items-center col">
                <div class="col">Выберите параметры своего участка</div>
                <div class="col">
                  <div
                    class="landing-littleVectorFlower d-flex justify-content-center"
                  >
                    <div class="p-0 m-0 g-0 text-center align-self-center h5">
                      1
                    </div>
                  </div>
                </div>
              </div>

              <div class="row align-items-center col">
                <div class="col">
                  <div
                    class="landing-littleVectorFlower d-flex justify-content-center"
                  >
                    <div class="p-0 m-0 g-0 text-center align-self-center h5">
                      4
                    </div>
                  </div>
                </div>
                <div class="col">Скачайте материалы</div>
              </div>
            </div>
          </div>
          <form class="d-flex justify-content-center py-5">
            <RouterLink
              class="btn btn-outline-success text-black bg-white px-4 py-3"
              to="/gensettings"
              active-class="active"
            >
              <p class="justify-content-center h5 fw-normal p-0 m-0">
                Узнать подробнее
              </p>
            </RouterLink>
          </form>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5 glowBehindBlock-1" id="landing_QaA">
      <h2 class="h1 pb-2 mr-auto text-center text-uppercase">
        Ответы на популярные вопросы
      </h2>
      <div class="pb-5">
        <div
          class="accordion accordion-flush pb-5"
          id="accordionPanelsStayOpenExample1"
        >
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Как облегчить проектирование цветников для различных участков?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                Облегчить проектирование цветников можно с помощью принципов
                ландшафтного дизайна и учета условий участка. Не забывайте
                подбирать растения по цвету, периоду цветения, высоте и форме,
                а также учитывайте практичность и не бойтесь экспериментировать!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Где найти информацию о растениях и уходе за ними?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                «BushTree» предоставляет детальную информацию о растениях, их
                периодах цветения и инструкций по уходу, чтобы помочь выбрать
                подходящие растения и правильно за ними ухаживать.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Как наглядно планировать размещение растений в цветниках?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                Наш инструмент позволяет создавать визуальные схемы цветников с
                картой рассадки для наглядного планирования размещения растений,
                что особенно полезно для ландшафтных дизайнеров и садоводов.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Как повысить экологическую устойчивость цветников?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                «BushTree» учитывает местные климатические условия при создании
                цветочных композиций, обеспечивая устойчивость и долговечность
                цветников.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.landing-hero {
  background-image: url("@assets/img/landing-image-neural-network-generates-flowers.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.landing-4steps {
  background-image: url("@assets/img/landing-round_flowers.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 500px;
}
.landing-littleVectorFlower {
  background-image: url("@assets/img/LittleVectorFlower.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 55px;
}
.accordion {
  --bs-accordion-active-bg: transparent;
  // --bs-accordion-btn-bg: transparent;
}

.carousel-indicators img {
  width: 70px;
  display: block;
}
.carousel-indicators button {
  width: max-content !important;
}
.carousel-indicators {
  position: unset;
}

.p-galleria {
  border-style: none !important;
  justify-items: center !important;
  justify-self: center !important;
  justify-content: center !important;
}

.p-galleria-content {
  justify-items: center !important;
  margin: 0 auto !important;
  justify-content: center !important;
}

.p-galleria-thumbnails {
  padding-left: 3rem;
}

.p-galleria-thumbnails-content {
  background: transparent !important;
  justify-content: space-between;
  height: 100%;
}

.p-galleria-thumbnails-viewport {
  height: 100% !important;
}
</style>