<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-light fixed-top">
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

  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <span class="text-muted">Здесь футер</span>
    </div>
  </footer>
</template>

<style>
</style>
