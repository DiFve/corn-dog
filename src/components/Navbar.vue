<template>
  <div
    class="flex flex-row justify-between border-b border-[#48453d]/[0.1] p-6 z-10"
  >
    <button class="text-ma_yellow" @click="homeClick">
      <p>Corndog.machine</p>
    </button>

    <button class="text-[#001AFF]" @click="aboutUsClick">
      <p>About us</p>
    </button>
  </div>
</template>

<script>
import Home from "../pages/Home.vue";
import AboutUs from "../pages/AboutUs.vue";
export default {
  methods: {
    homeClick() {
      this.$store.commit("SET_PAGES", Home);
      console.log(this.$store.state.pages);
    },

    aboutUsClick() {
      this.$store.commit("SET_PAGES", AboutUs);
      console.log(this.$store.state.pages);
    },
  },
};
</script>
