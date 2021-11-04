<template>
  <main class="rules main-wrapper__rules-section">
    <div class="rule__wrapper">
      <h2 class="rules__title">
        Привіт! <br />
        Ваше завдання — пройти тест і перевірити свою уважність на <br />
        виставці.
      </h2>
      <p class="rules__subTitle">Правила такі:</p>
      <div class="rules__inner">
        <div class="rules__item">
          <p class="rules__item-order">01</p>
          <p class="rules__item-text">
            Після того, як натиснете кнопку «Далі», — одне за одним будуть
            з’являтися питання, що стосуються тематичних блоків експозиції.
            Всього їх дванадцять;
          </p>
        </div>
        <div class="rules__item">
          <p class="rules__item-order">02</p>
          <p class="rules__item-text">
            Аби відповісти на питання — натисніть на відповідь, яку вважаєте
            правильною, а щоб перейти на наступне питання — тисніть на кнопку
            «Далі»;
          </p>
        </div>
        <div class="rules__item">
          <p class="rules__item-order">03</p>
          <p class="rules__item-text">
            Відповісте правильно на 8—12 питань — отримаєте подарунок, паперовий
            квиток, який можна посадити в землю та проростити один із плодів:
            редиска, капуста, гірчиця, волошка або мікрогрін.
          </p>
        </div>
      </div>
    </div>
    <router-link to="/question" class="btn rules__btn">Далі</router-link>
  </main>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
</style>
