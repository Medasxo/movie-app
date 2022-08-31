<script setup>
import AppHeader from "../AppHeader.vue";

import ShowcaseAutoplay from "./ShowcaseAutoplay.vue";
import { ref } from "vue";
import UpcomingMovies from "./UpcomingMovies.vue";
import TopMovies from "./TopMovies.vue";

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
  margin: 0;
  gap: 4rem;
  padding: 0;
}
</style>
