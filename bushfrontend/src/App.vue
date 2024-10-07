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
        <RouterLink
          class="navbar-brand"
          :to="{ name: 'home', hash: '#landing_start' }"
          active-class="active"
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
                :to="{ name: 'home', hash: '#landing_4steps' }"
                active-class="active"
                >Инструкция</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                active-class="active"
                :to="{ name: 'home', hash: '#landing_galleria' }"
                >Готовые решения</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                active-class="active"
                :to="{ name: 'home', hash: '#landing_QaA' }"
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
    <div class="container pt-2">
      <div
        class="row justify-content-between g-4 py-2 pb-3 row-cols-1 row-cols-lg-2 text-white"
      >
        <div class="col d-flex align-items-start">
          <div>
            <p class="text-start h5 fw-normal">bushtreeee@gmail.com</p>
            <p class="text-start h5 fw-normal">+7 (964) 300-45-10</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <div class="text-start h5 fw-normal pb-3">
              Остались вопросы и не нашли ответы? Пишите в Telegram или
              WhatsApp!
            </div>
            <div>
              <div class="d-flex align-items-center pb-2">
                <div class="flex-shrink-0">
                  <img
                    src="@assets/img/logo-telegram.svg"
                    alt="telegram-logo"
                  />
                </div>
                <div class="flex-grow-1 ms-3">@henry_chinaskey</div>
              </div>
              <div class="d-flex align-items-center pb-2">
                <div class="flex-shrink-0">
                  <img
                    src="@assets/img/logo-whatsapp.svg"
                    alt="telegram-logo"
                  />
                </div>
                <div class="flex-grow-1 ms-3">+7 (964) 300-45-10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-between g-4 my-1 py-1 row-cols-1 row-cols-lg-2 text-white border-top-dotted-f4f4f4"
      >
        <div class="col">
          <div>
            <p class="text-start">© 2024 BushTree. Все права защищены</p>
          </div>
        </div>
        <div class="col">
          <div class="row d-flex align-items-end">
            <div class="col">
              <div class="row">
                <div class="col">
                  <p class="text-start col text-truncate">
                    Дизайн и разработка
                  </p>
                </div>
                <div class="col">
                  <img
                    src="@assets/img/logo-devBy.svg"
                    class="col"
                    style="width: 100%"
                  />
                </div>
              </div>
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

@media (min-width: 1400px) {
  .container-custom1920 {
    max-width: 1680px;
  }
}

.container-custom1920 {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

.glowBehindBlock-1 {
  background: radial-gradient(
    closest-side,
    $bshtr-green-bggrad1,
    transparent 99%
  );
}

.gradient-block-1 {
  @include gradient-block-1(background);
}

.border-bshtr-green1 {
  border: var(--bs-border-width) var(--bs-border-style) $bshtr-green-1 !important;
}

.border-bshtr-contrastgreen {
  border: 2px solid;
  border-color: $bshtr-contrastgreen;
}

.border-top-dotted-f4f4f4 {
  border-style: dotted none none none;
  border-color: #f4f4f4;
}

.border-top-dotted-4f4f4f {
  border-style: dotted none none none;
  border-color: #4f4f4f;
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