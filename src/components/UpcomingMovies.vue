<script setup>
import { ref, onBeforeMount } from "vue";

const props = defineProps({
  apiKey: String,
});
const upcomingMoviesData = ref({});

function getRequest(url) {
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad response");
    }
  });
}

function getTrendingData(url) {
  getRequest(url).then((data) => {
    upcomingMoviesData.value = data;
  });
}

onBeforeMount(() => {
  getTrendingData(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
      props.apiKey +
      "&language=en-US&page=1"
  );
  console.log(upcomingMoviesData);
});
</script>

<template>
  <div class="upcomingMoviesTab">
    <h1>Upcoming movies</h1>
  </div>
</template>

<style scoped>
.upcomingMoviesTab {
  margin-left: 5rem;
  margin-right: 5rem;
  color: var(--red);
}
</style>
