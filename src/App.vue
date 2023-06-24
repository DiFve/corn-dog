<template>
  <div class="font-dm-mono">
    <component :is="this.$store.state.pages" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./pages/Home.vue";

export default {
  components: {
    Navbar,
    Home,
  },

  methods: {},
};
</script>
