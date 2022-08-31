<script setup>
import AppHeader from "./components/AppHeader.vue";
import MoviesOverview from "./components/MoviesOverview.vue";
import ShowcaseAutoplay from "./components/ShowcaseAutoplay.vue";
import { ref } from "vue";

const API = ref("2cc7d8a7cdb91108d9665ce323fb49a5");
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <ShowcaseAutoplay :apiKey="API" />
  <MoviesOverview />

  <main></main>
</template>

<style scoped></style>
