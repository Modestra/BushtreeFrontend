<template>
  <div class="py-2"></div>
  <div>
    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-start">Фильтры</h2>
      <div>
        <div class="row justify-content-center g-4 py-5 row-cols-1">
          <div class="row justify-content-center">
            <p class="col text-start">Начало цветения</p>
            <p class="col text-end">май</p>
          </div>
          <div class="row justify-content-center">
            <p class="col text-start">Конец цветения</p>
            <p class="col text-end">июль</p>
          </div>
          <div class="row justify-content-center">
            <p class="col text-start">Освещённость</p>
            <p class="col text-end">солнце</p>
          </div>
          <div class="row justify-content-center">
            <p class="col text-start">Режим полива</p>
            <p class="col text-end">частый (ежедневно)</p>
          </div>
          <div class="row justify-content-center">
            <p class="col text-start">Цветовая гамма</p>
            <p class="col text-end">красный</p>
          </div>
        </div>
        <div class="results-buttons">
          <button class="btn btn-outline-success">Редактировать</button>
          <button class="btn btn-outline-success">Сгенерировать</button>
          <button class="btn btn-outline-success">Скачать материалы</button>
        </div>
      </div>
    </div>
    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-start">Результат</h2>
      <div class="g-4 py-5">
        <img src="#" alt="#" />
      </div>
    </div>
    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-start">Карта рассадки</h2>
      <div class="g-4 py-5">
        <img src="#" alt="#" />
      </div>
    </div>
    <div class="container px-4 py-5">
      <h2 class="pb-2 mr-auto text-start">Цветы</h2>
      <div class="py-3">
        <div class="flower-item row g-4 py-5" v-for="index in 6" :key="index">
          <div class="flower-item-texts py-5 col-lg-8">
            <div
              class="flower-item-texts-title border-bottom my-4 row justify-content-center"
            >
              <h4 class="col text-start">{{ index }}</h4>
              <h4 class="col text-start">Щучка дернистая</h4>
              <p class="col-lg-6 text-start"></p>
            </div>
            <div class="flower-item-texts-descr">
              <p class="text-start">
                Многолетний дерновинный злак, образующий кочки. Стебли
                прямостоячие с расставленными узлами. Листья длинные,
                тёмно-зелёные, до 3 мм шириной, острошероховатые, склоняющиеся,
                что придаёт кочке полукруглый, каскадообразный вид.
              </p>
              <p class="text-start">
                Общее соцветие — раскидистые метелки длиной 10–25 см. Зацветают
                зеленовато-фиолетовым цветом, позже зеленоватым. Далее соцветия
                становятся светло-золотистыми и выгорают до светло-соломенного.
              </p>
            </div>
          </div>
          <div class="flower-item-pic col g-4 py-5">
            <img src="#" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
