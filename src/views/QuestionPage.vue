<template>
  <transition name="question">
    <main class="question main-wrapper__question-section">
      <div class="question__order">
        <p>1</p>
        /
        <p>12</p>
      </div>
      <div class="question__wrapper">
        <div class="question__title">
          <!-- <h3 name="title">{{ this.questionData.question }}</h3> -->
          <h3 name="title">
            Згадайте перший контейнер «Просвіта»-лаунж. <br />А тепер скажіть,
            яку з цих світлин зробив Кароль Дівольд?
          </h3>
        </div>
        <div class="question__inner">
          <div class="question__item">
            <img src="../assets/q1-img1.jpg" alt="img" />
            <label class="question__label"
              >answer
              <input type="checkbox" class="question__option" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="question__item">
            <img src="../assets/q1-img2.jpg" alt="img" />
            <label class="question__label"
              >answer
              <input type="checkbox" class="question__option" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="question__item">
            <div class="q1-img3">
              <div class="sprite-1"></div>
              <div class="sprite-2"></div>
              <div class="sprite-3"></div>
            </div>
            <label class="question__label"
              >answer
              <input type="checkbox" class="question__option" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <router-link to="/question" class="btn rules__btn">Далі</router-link>
      </div>
    </main>
  </transition>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      arr: Array.from(Array(12).keys()),
    };
  },
  mounted() {
    // const randomArr = this.shuffle(this.arr)
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
  },
};
</script>

<style lang="scss">
.q1-im3,
.q1-im2,
.q1-im1 {
  background-image: url("../assets/q1-im3-sprite.png");
  background-repeat: no-repeat;
}

.question-enter {
  opacity: 0;
}

.question-leave-active {
  opacity: 0;
}

.question-enter .question-container,
.question-leave-active .question-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.question__label {
  position: relative;
  display: block;
  text-align: left;
  font-size: 1.2vw;
  padding-left: 120px;

  input:checked ~ .checkmark {
    background-color: transparent;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border: none;
    border-radius: 100px;
    background-color: #000;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
}

.question__inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3vw 1vw;
}

.question__option {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &::before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}

.checkmark {
  position: absolute;
  top: -10px;
  left: 0;
  width: 2vw;
  background-color: transparent;
  border: 0.1vw solid #000;
  border-radius: 100px;

  &::before {
    content: "";
    display: block;
    margin-bottom: 100%;
  }
}
</style>