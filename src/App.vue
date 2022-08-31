<script setup>
import AppHeader from "./components/AppHeader.vue";

import ShowcaseAutoplay from "./components/ShowcaseAutoplay.vue";
import { ref } from "vue";
import UpcomingMovies from "./components/UpcomingMovies.vue";
import TopMovies from "./components/TopMovies.vue";

const API = ref("2cc7d8a7cdb91108d9665ce323fb49a5");
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <ShowcaseAutoplay :apiKey="API" />
    <div class="moviesFlexContainer">
      <UpcomingMovies :apiKey="API" />
      <TopMovies :apiKey="API" />
    </div>
  </main>
</template>

<style scoped>
.moviesFlexContainer {
  display: flex;
}
</style>
