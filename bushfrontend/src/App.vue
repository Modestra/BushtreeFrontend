<script setup>
import { onMounted } from "vue";
import { db, storage } from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

onMounted(async () => {
  const starsRef = ref(storage, "images/0.png"); // Потом это будет юзаться чтобы от сервера получить номера картинок, а с storage забирать их по номерам
  const flowers = [];
  // Get the download URL
  getDownloadURL(starsRef)
    .then((url) => {
      console.log(url);
      // Insert url into an <img> tag to "download"
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/object-not-found":
          // File doesn't exist
          break;
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect the server response
          break;
      }
    });
});
</script>

<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md fixed-top my-1">
      <div class="container glass-effect-1 g-4 py-2 d-flex">
        <RouterLink class="navbar-brand" to="/" active-class="active"
          ><img src="@assets/logo.svg" class=""
        /></RouterLink>
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
        <div
          class="collapse navbar-collapse align-self-center"
          id="navbarCollapse"
        >
          <ul class="navbar-nav mx-auto mb-2 mb-md-0">
            <div></div>
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
              class="btn btn-outline-success text-black bg-white px-3"
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
        class="row justify-content-between g-4 py-2 row-cols-1 row-cols-lg-3 text-white"
      >
        <div class="col d-flex align-items-start">
          <div>
            <p class="text-start">bushtreeee@gmail.com</p>
            <p class="text-start">+7 (964) 300-45-10</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#cpu-fill"></use>
            </svg>
          </div>
          <div>
            <p class="text-start">
              Остались вопросы и не нашли ответы? Пишите в Telegram или
              WhatsApp!
            </p>
            <div>
              <p class="text-start">@henry_chinaskey</p>
              <p class="text-start">+7 (964) 300-45-10</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-between g-4 my-1 py-1 row-cols-1 row-cols-lg-3 text-white border-top-dotted-f4f4f4"
      >
        <div class="col d-flex align-items-start">
          <div>
            <p class="text-start">© 2024 BushTree. Все права защищены</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="icon-square flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#cpu-fill"></use>
            </svg>
          </div>
          <div class="row">
            <div class="col row">
              <p class="text-start col">Дизайн и разработка</p>
              <img
                src="@assets/img/logo-devBy.svg"
                class="col"
                style="width: 100%"
              />
            </div>
            <div class="col">
              <p>Design by Freepik</p>
            </div>
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

.border-top-dotted-f4f4f4 {
  border-style: dotted none none none;
  border-color: #f4f4f4;
}

.h1_bigger1 {
  font-size: calc(1.375rem + 2vw);
}
@media (max-width: 1200px) {
  .h1_bigger1 {
    font-size: 3rem;
  }
}
</style>