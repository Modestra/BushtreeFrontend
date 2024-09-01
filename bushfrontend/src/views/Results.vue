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
      <div class="g-4 py-5">
        <div class="flower-item">
          <div class="flower-item-texts">
            <div class="flower-item-texts-title">
              <p>1</p>
              <p>Щучка Душистая</p>
            </div>
            <div class="flower-item-texts-descr">
              <p>
                Многолетний дерновинный злак, образующий кочки. Стебли
                прямостоячие с расставленными узлами. Листья длинные,
                тёмно-зелёные, до 3 мм шириной, острошероховатые, склоняющиеся,
                что придаёт кочке полукруглый, каскадообразный вид.
              </p>
              <p>
                Общее соцветие — раскидистые метелки длиной 10–25 см. Зацветают
                зеленовато-фиолетовым цветом, позже зеленоватым. Далее соцветия
                становятся светло-золотистыми и выгорают до светло-соломенного.
              </p>
            </div>
          </div>
          <div class="flower-item-pic g-4 py-5">
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
