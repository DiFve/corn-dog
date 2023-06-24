<template>
  <div class="bg-ma_yellow h-screen flex flex-col justify-center items-center">
    <audio controls autoplay :src="musicFile" class="audio-player"></audio>
    <div class="radial-progress" :style="`--value: ${percent}`">
      {{ percent }}%
    </div>
  </div>
</template>

<script>
import musicFile from "../assets/TheChamps-Tequila.ogg";
import Done from "../pages/Done.vue";
export default {
  data() {
    return {
      percent: 0,
      musicFile: musicFile,
      changePage: null,
      randNum: null,
    };
  },
  mounted() {
    this.changePage = setInterval(this.makeAlert, 130000);
    // this.changePage = setInterval(this.makeAlert, 1000);
    this.randNum = setInterval(this.runProgress, 2000);
  },
  methods: {
    makeAlert() {
      this.$store.commit("SET_PAGES", Done);
    },

    runProgress() {
      this.percent += Math.floor(Math.random() * 6);
      if (this.percent >= 100) {
        this.percent = 0;
      }
    },
  },
  unmounted() {
    clearInterval(this.changePage);
    clearInterval(this.randNum);
  },
};
</script>

<style>
.audio-player {
  /* Hide the default audio controls visually */
  position: absolute;
  top: -9999px;
  left: -9999px;
}
</style>
