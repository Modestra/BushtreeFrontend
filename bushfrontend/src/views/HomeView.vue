<script setup lang="ts">
</script>

<template>
  <div class="py-5"></div>
  <div>
    <div class="container px-4 py-5">
      <h1 class="pb-2 mr-auto text-start">
        Подберем идеальный цветник для вашего участка
      </h1>
      <div class="row justify-content-center g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#toggles2"></use>
            </svg>
          </div>
          <div>
            <p class="text-start">Просто выберите параметры вашего участка</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#cpu-fill"></use>
            </svg>
          </div>
          <div>
            <p class="text-start">
              Мы предложим подходящие цветы и варианты рассадки
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-start">Кому подойдёт сервис ?</h2>
      <div class="row justify-content-center g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="card text-bg-light mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <p class="card-text">
              Для предпринимателей, которые занимаются озеленением
            </p>
          </div>
        </div>
        <div class="card text-bg-light mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <p class="card-text">
              Для садоводов, которые хотят создать красивый цветник
            </p>
          </div>
        </div>
        <div class="card text-bg-light mb-3" style="max-width: 18rem">
          <div class="card-header">Header</div>
          <div class="card-body">
            <p class="card-text">
              Для ландшафтных архитекторов, которые ценят свое время
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-start">Как пользоваться ?</h2>
    </div>
    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-start">Ответы на популярные вопросы</h2>
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
                Облегчить проектирование цветников можно с помощью принципов
                ландшафтного дизайна и учета условий участка. Не забывайте
                подбирать растения по цвету, периоду цветения, высоте и форме,
                а также учитывайте практичность и не бойтесь экспериментировать!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
