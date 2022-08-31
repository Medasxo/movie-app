<script setup>
import AppHeader from "./components/AppHeader.vue";

import ShowcaseAutoplay from "./components/ShowcaseAutoplay.vue";
import { ref } from "vue";
import LatestMovies from "./components/LatestMovies.vue";

const API = ref("2cc7d8a7cdb91108d9665ce323fb49a5");
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <ShowcaseAutoplay :apiKey="API" />
  
  <LatestMovies />

  <main></main>
</template>

<style scoped></style>
