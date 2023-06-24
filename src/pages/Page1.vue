<template>
  <div class="flex flex-col absolute inset-0 justify-center items-center">
    <div class="text-3xl mt-6">Which is corndog?</div>
    <div class="flex flex-row items-center justify-center mt-8">
      <div class="relative">
        <button @click="clickBtn">
          <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#361c1c30] border border-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center"
          >
            This
          </div>

          <img :src="realCornDog" class="" />
        </button>
      </div>

      <div class="relative ml-6">
        <button @click="clickBtn">
          <div
            class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#361c1c30] border border-primary bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center"
          >
            This
          </div>

          <img :src="fakeCornDog" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import realCornDog from "../assets/RealCornDogPage1.png";
import fakeCornDog from "../assets/FakeCornDogPage1.png";
import Page2 from "../pages/Page2.vue";

export default {
  data() {
    return {
      realCornDog: realCornDog,
      fakeCornDog: fakeCornDog,
    };
  },
  methods: {
    clickBtn() {
      this.$store.commit("SET_PAGES", Page2);
    },
  },
};
</script>
