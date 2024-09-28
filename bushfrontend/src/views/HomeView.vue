<script setup lang="ts">
</script>

<template>
  <div>
    <div class="landing-hero py-5">
      <div class="container px-4 py-5">
        <h1 class="h1_bigger1 pb-2 mr-auto text-center text-uppercase">
          Подберем идеальный цветник для вашего участка
        </h1>
        <div class="p-5"></div>
        <div class="p-5"></div>
        <div
          class="row justify-content-center g-4 py-5 row-cols-1 row-cols-lg-3"
        >
          <div class="col align-items-center">
            <p class="text-center">
              Выберите параметры вашего участка и мы предложим подходящие цветы
              и варианты рассадки
            </p>
            <form class="d-flex justify-content-center">
              <RouterLink
                class="btn btn-outline-success text-black bg-white px-4 py-2"
                to="/gensettings"
                active-class="active"
              >
                Узнать подробнее
              </RouterLink>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5">
      <h2 class="h1 pb-2 mr-auto text-center text-uppercase">
        Готовые решения
      </h2>
      <div>
        <div
          class="carousel slide col"
          id="carouselDemo"
          data-bs-wrap="true"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@assets/img/flowerbed-1.png" class="w-100" />
              <div class="carousel-caption">
                <h5>Title Slide 0</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Modi, nemo?
                </p>
              </div>
            </div>

            <div class="carousel-item" data-bs-interval="2000">
              <img src="@assets/img/flowerbed-2.png" class="w-100" />
              <div class="carousel-caption">
                <h5>Title Slide 1</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Modi, nemo?
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="@assets/img/flowerbed-3.png" class="w-100" />
              <div class="carousel-caption">
                <h5>Title Slide 2</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Modi, nemo?
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="@assets/img/flowerbed-4.png" class="w-100" />
              <div class="carousel-caption">
                <h5>Title Slide 3</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Modi, nemo?
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="@assets/img/flowerbed-5.png" class="w-100" />
              <div class="carousel-caption">
                <h5>Title Slide 4</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Modi, nemo?
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="@assets/img/flowerbed-6.png" class="w-100" />
              <div class="carousel-caption">
                <h5>Title Slide 5</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Modi, nemo?
                </p>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>

          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>

          <div class="carousel-indicators">
            <button
              type="button"
              class="active"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="0"
            >
              <img src="@assets/img/flowerbed-1.png" />
            </button>

            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="1"
            >
              <img src="@assets/img/flowerbed-2.png" />
            </button>

            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="2"
            >
              <img src="@assets/img/flowerbed-3.png" />
            </button>

            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="3"
            >
              <img src="@assets/img/flowerbed-4.png" />
            </button>

            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="4"
            >
              <img src="@assets/img/flowerbed-5.png" />
            </button>

            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to="5"
            >
              <img src="@assets/img/flowerbed-6.png" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5">
      <h2 class="h1 pb-2 mr-auto text-center text-uppercase">
        Кому подойдёт сервис?
      </h2>
      <div class="row justify-content-center g-4 py-5 row-cols-1 row-cols-lg-3">
        <div
          class="card text-bg-dark mb-3 border-bshtr-green1 m-2"
          style="max-width: 24rem"
        >
          <div class="card-body px-2">
            <img src="@assets/img/landing-project.svg" class="pb-5" />
            <p class="h5 fw-normal">Бизнес</p>
            <p class="card-text">
              Для предпринимателей, которые занимаются озеленением
            </p>
          </div>
        </div>
        <div
          class="card text-bg-dark mb-3 border-bshtr-green1 m-2"
          style="max-width: 24rem"
        >
          <div class="card-body px-2">
            <img src="@assets/img/landing-gardening.svg" class="pb-5" />
            <p class="h5 fw-normal">Садоводство</p>
            <p class="card-text">
              Для садоводов, которые хотят создать красивый цветник
            </p>
          </div>
        </div>
        <div
          class="card text-bg-dark mb-3 border-bshtr-green1 m-2"
          style="max-width: 24rem"
        >
          <div class="card-body px-2">
            <img src="@assets/img/landing-designer.svg" class="pb-5" />
            <p class="h5 fw-normal">Дизайн</p>
            <p class="card-text">
              Для ландшафтных архитекторов, которые ценят свое время
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5">
      <h2 class="h1 pb-2 mr-auto text-center text-uppercase">
        4 шага к красивому цветнику
      </h2>
    </div>

    <div class="container px-4 py-5 glowBehind-1">
      <h2 class="h1 pb-2 mr-auto text-center text-uppercase">
        Ответы на популярные вопросы
      </h2>
      <div>
        <div
          class="accordion accordion-flush"
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

<style lang="scss" scoped>
.landing-hero {
  background-image: url("@assets/img/landing-image-neural-network-generates-flowers.png");
  background-repeat: no-repeat;
}
.accordion {
  --bs-accordion-active-bg: transparent;
  --bs-accordion-btn-bg: transparent;
  // --bs-accordion-btn-color: green;
  // --bs-accordion-active-color: red;
}
.card {
  @include card-gradient(background);
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
</style>