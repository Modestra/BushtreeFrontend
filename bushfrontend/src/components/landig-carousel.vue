<template>
  <div
    class="carousel slide row"
    id="carouselDemo"
    data-bs-wrap="true"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@assets/img/flowerbed-1.png" class="w-100" />
      </div>

      <div class="carousel-item" data-bs-interval="20000">
        <img src="@assets/img/flowerbed-2.png" class="w-100" />
      </div>

      <div class="carousel-item">
        <img src="@assets/img/flowerbed-3.png" class="w-100" />
      </div>

      <div class="carousel-item">
        <img src="@assets/img/flowerbed-4.png" class="w-100" />
      </div>

      <div class="carousel-item">
        <img src="@assets/img/flowerbed-5.png" class="w-100" />
      </div>

      <div class="carousel-item">
        <img src="@assets/img/flowerbed-6.png" class="w-100" />
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

      <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="1">
        <img src="@assets/img/flowerbed-2.png" />
      </button>

      <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="2">
        <img src="@assets/img/flowerbed-3.png" />
      </button>

      <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="3">
        <img src="@assets/img/flowerbed-4.png" />
      </button>

      <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="4">
        <img src="@assets/img/flowerbed-5.png" />
      </button>

      <button type="button" data-bs-target="#carouselDemo" data-bs-slide-to="5">
        <img src="@assets/img/flowerbed-6.png" />
      </button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
</style>