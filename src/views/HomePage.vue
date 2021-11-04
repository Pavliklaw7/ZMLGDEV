<template>
  <main class="main-wrapper__home-section">
    <div class="logo-wrapper">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="home__wrapper">
      <div class="home__inner">
        <h1 class="home__title">Гра «Zемля: Неймовірна Україна»</h1>
        <p class="home__subTitle">Готові перевірити свої знання?</p>
        <router-link to="/rules" class="btn home__btn"> До Гри </router-link>
      </div>
      <div class="home__img">
        <img src="../assets/home-img.png" alt="img" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
</style>
