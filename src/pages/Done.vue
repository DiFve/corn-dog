<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <div class="flex justify-center items-center h-full">
      <img :src="KamKom" />
    </div>
  </div>
</template>

<script>
import KamKom from "../assets/KamKom.png";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      KamKom: KamKom,
    };
  },
};
</script>
