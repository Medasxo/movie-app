<script setup>
import { ref } from "vue";
import NewDataPage from "./NewDataPage.vue";

const API = ref("2cc7d8a7cdb91108d9665ce323fb49a5");
const APILink = ref("https://api.themoviedb.org/3/movie/top_rated?api_key=");
</script>

<template>
  <NewDataPage :APIKey="API" :APILink="APILink" :Title="'Top Movies'" />
</template>

<style scoped></style>
