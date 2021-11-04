<template>
  <div class="main-wrapper" @click="revertToIntro">
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/styles/styles.scss";

export default {
  name: "quiz-app",
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    revertToIntro() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        //   this.$router.push({path: '/'}
        console.log("revertToIntro");
      }, 120000);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

