<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <div class="flex flex-row justify-center items-center h-full">
      <div class="flex flex-col justify-center items-center w-1/2">
        <div class="text-5xl">Machine Learning</div>
        <div class="flex flex-col">
          <div class="text-2xl mt-4">that will help you distinguish</div>
          <div class="text-2xl">between corndogs and corn dogs.</div>
        </div>

        <buttonHome class="mt-12" @click="nextPage" />
      </div>
      <div class="flex justify-center items-center">
        <img :src="cornDog" />
      </div>
    </div>
  </div>
</template>

<script>
import cornDog from "../assets/CornDogHome.png";
import Page1 from "../pages/Page1.vue";
import buttonHome from "../components/ButtonHome.vue";
import musicFile from "../assets/TheChamps-Tequila.ogg";
import Navbar from "../components/Navbar.vue";

export default {
  data() {
    return {
      cornDog: cornDog,
      musicFile: musicFile,
    };
  },
  components: {
    buttonHome,
    Navbar,
    Page1,
  },

  methods: {
    nextPage() {
      this.$store.commit("SET_PAGES", Page1);
    },
  },
};
</script>
