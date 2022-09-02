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
        <router-link
          :to="{
            path: '/Movie/',
            name: 'movieInformation',
            params: { id: upcomingMoviesData[i].id },
          }"
        >
          <img
            :src="
              'http://image.tmdb.org/t/p/w500/' +
              upcomingMoviesData[i].poster_path
            "
          />
        </router-link>
        <h4>{{ upcomingMoviesData[i].title }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.upcomingMoviesTab {
  padding-left: 5rem;
  color: var(--red);
  margin: 0;
  width: 70%;
}

.moviesGrid {
  display: grid;
  grid-template: 1fr 1fr 1fr/ 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin: 0;
}

.movieTab {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.movieTab img {
  width: 13rem;
  height: 18rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--red),
    0 0 0.8rem var(--red), 0 0 2.8rem var(--red), inset 0 0 1.3rem var(--red);
}
</style>
