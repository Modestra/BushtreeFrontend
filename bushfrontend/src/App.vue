<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md fixed-top my-1">
      <div class="container glass-effect-1 g-4 py-2">
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
                to="/"
                active-class="active"
                >Инструкция</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/results"
                >Готовые решения</RouterLink
              >
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
              class="btn btn-outline-success text-black bg-white"
              to="/gensettings"
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

  <footer class="footer mt-auto py-3 fullWidthFooterBootstrapFix">
    <div class="container">
      <div
        class="row justify-content-between g-4 py-5 row-cols-1 row-cols-lg-3 text-white"
      >
        <div class="col d-flex align-items-start">
          <div class="icon-square flex-shrink-0 me-3">
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
          <div class="icon-square flex-shrink-0 me-3">
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

<style lang="scss">
.fullWidthFooterBootstrapFix {
  max-width: 100% !important;
  position: absolute;
  left: 0;
  width: 100%;
  @include footer-gradient(background);
}
.glass-effect-1 {
  /* From https://css.glass */
  background: $bshtr-green-1-opas25;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid $bshtr-green-1;
}

body {
  background-color: $bshtr-darkgreen !important;
  --bs-body-bg: $bshtr-green-1;
}

.glowBehind-1 {
  background: radial-gradient(
    closest-side,
    $bshtr-green-bggrad1,
    transparent 99%
  );
}

.border-bshtr-green1 {
  border: var(--bs-border-width) var(--bs-border-style) $bshtr-green-1 !important;
}
</style>