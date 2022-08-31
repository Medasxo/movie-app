<script setup>
import AppHeader from "./components/AppHeader.vue";

import ShowcaseAutoplay from "./components/ShowcaseAutoplay.vue";
import { ref } from "vue";
import UpcomingMovies from "./components/UpcomingMovies.vue";

const API = ref("2cc7d8a7cdb91108d9665ce323fb49a5");
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
  <ShowcaseAutoplay :apiKey="API" />
  <UpcomingMovies :apiKey="API"/>
  </main>
</template>

<style scoped></style>
