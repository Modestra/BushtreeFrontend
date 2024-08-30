<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div class="container">
        <RouterLink class="navbar-brand" to="/" active-class="active"
          >Bushtree</RouterLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                aria-current="page"
                to="/about"
                active-class="active"
                >Инструкция</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Готовые решения</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                active-class="active"
                to="/"
                tabindex="-1"
                >Вопрос-ответ</RouterLink
              >
            </li>
          </ul>
          <form class="d-flex">
            <RouterLink
              class="btn btn-outline-success"
              to="/about"
              active-class="active"
            >
              Создать цветник
            </RouterLink>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer class="footer mt-auto py-3 bg-light fullWidthFooterBootstrapFix">
    <div class="container">
      <div
        class="row justify-content-between g-4 py-5 row-cols-1 row-cols-lg-3"
      >
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#toggles2"></use>
            </svg>
          </div>
          <div>
            <p class="text-start">bushtreeee@gmail.com</p>
            <p class="text-start">+7 (964) 300-45-10</p>
            <p class="text-start">© 2024 BushTree. Все права защищены</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#cpu-fill"></use>
            </svg>
          </div>
          <div>
            <p class="text-start">Остались вопросы и не нашли ответы?</p>
            <p class="text-start">Пишите в Telegram или WhatsApp!</p>
            <p class="text-start">Дизайн и разработка</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.fullWidthFooterBootstrapFix {
  max-width: 100% !important;
  position: absolute;
  left: 0;
  width: 100%;
}
</style>
