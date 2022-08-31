<script setup>
import { ref, onBeforeMount } from "vue";

const props = defineProps({
  apiKey: String,
});
const upcomingMoviesData = ref([]);

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
    const filtered = data.results.filter(
      (result) => result.poster_path !== null
    );
    upcomingMoviesData.value = filtered;
  });
}

onBeforeMount(() => {
  getTrendingData(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
      props.apiKey +
      "&language=en-US&page=1&region=US"
  );
});
</script>

<template>
  <div class="upcomingMoviesTab">
    <h1>Upcoming Movies</h1>
    <div class="moviesGrid" v-if="upcomingMoviesData.length > 0">
      <div class="movieTab" v-for="i in 15" :key="i">
        <img
          :src="
            'http://image.tmdb.org/t/p/w500/' +
            upcomingMoviesData[i].poster_path
          "
        />
        <h4>{{ upcomingMoviesData[i].original_title }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.upcomingMoviesTab {
  margin-left: 5rem;
  color: var(--red);
}

.moviesGrid {
  width: 85%;
  display: grid;
  grid-template: 1fr 1fr 1fr/ 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5rem;
  margin: 0;
}

.movieTab {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.movieTab img {
  width: 15rem;
  height: 20rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--red),
    0 0 0.8rem var(--red), 0 0 2.8rem var(--red), inset 0 0 1.3rem var(--red);
}
</style>
