<script setup lang="ts">
</script>

<template>
  <div class="py-5"></div>
  <div>
    <div class="container px-4 py-5">
      <h1 class="pb-2 mr-auto text-center text-uppercase">
        Подберем идеальный цветник для вашего участка
      </h1>
      <div class="row justify-content-center g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col align-items-center">
          <p class="text-center">
            Выберите параметры вашего участка и мы предложим подходящие цветы
            и варианты рассадки
          </p>
          <form class="d-flex justify-content-center">
            <RouterLink
              class="btn btn-outline-success text-black bg-white"
              to="/gensettings"
              active-class="active"
            >
              Создать цветник
            </RouterLink>
          </form>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-center text-uppercase">Готовые решения</h2>
      <div></div>
    </div>

    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-center text-uppercase">
        Кому подойдёт сервис?
      </h2>
      <div class="row justify-content-center g-4 py-5 row-cols-1 row-cols-lg-3">
        <div
          class="card text-bg-dark mb-3 border-bshtr-green1"
          style="max-width: 18rem"
        >
          <div class="card-body">
            <p>Бизнес</p>
            <p class="card-text">
              Для предпринимателей, которые занимаются озеленением
            </p>
          </div>
        </div>
        <div
          class="card text-bg-dark mb-3 border-bshtr-green1"
          style="max-width: 18rem"
        >
          <div class="card-body">
            <p>Садоводство</p>
            <p class="card-text">
              Для садоводов, которые хотят создать красивый цветник
            </p>
          </div>
        </div>
        <div
          class="card text-bg-dark mb-3 border-bshtr-green1"
          style="max-width: 18rem"
        >
          <div class="card-body">
            <p>Дизайн</p>
            <p class="card-text">
              Для ландшафтных архитекторов, которые ценят свое время
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-center text-uppercase">
        4 шага к красивому цветнику
      </h2>
    </div>

    <div class="container px-4 py-5 glowBehind-1">
      <h2 class="pb-2 mr-auto text-center text-uppercase">
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
.accordion {
  --bs-accordion-active-bg: transparent;
  --bs-accordion-btn-bg: transparent;
  // --bs-accordion-btn-color: green;
  // --bs-accordion-active-color: red;
}
.card {
  @include card-gradient(background);
}
</style>