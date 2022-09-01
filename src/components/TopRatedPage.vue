<script setup>
import AppHeader from "./AppHeader.vue";
import { ref, onBeforeMount } from "vue";
import goldStar from "./icons/gold-star-icon.png";

const topRatedMoviesData = ref([]);
const API = ref("2cc7d8a7cdb91108d9665ce323fb49a5");

function getRequest(url) {
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad response");
    }
  });
}

function getTopMoviesData(url) {
  getRequest(url).then((data) => {
    const filtered = data.results.filter(
      (result) => result.poster_path !== null
    );
    topRatedMoviesData.value = filtered;
  });
}

onBeforeMount(() => {
  getTopMoviesData(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
      API.value +
      "&language=en-US"
  );
  console.log(topRatedMoviesData);
});
</script>

<template>
  <AppHeader />
  <div class="topRatedMoviesContainer" v-if="topRatedMoviesData.length > 0">
    <h4>TMDb Charts</h4>
    <h1>TMDb Top Movies</h1>
    <div class="movieTabContainer" v-if="topRatedMoviesData.length > 0">
      <p>Rank & Title</p>
      <div class="movieTab" v-for="i in 20" :key="i">
        <div class="titleAndImage">
          <img
            :src="
              'http://image.tmdb.org/t/p/w500/' +
              topRatedMoviesData[i - 1].poster_path
            "
          />
          <div class="title">
            {{ i }}
            <h3>{{ topRatedMoviesData[i - 1].title }}</h3>
          </div>
        </div>
        <div class="ratingAndWatchlist">
          <img :src="goldStar" />
          <h3>{{ topRatedMoviesData[i - 1].vote_average }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topRatedMoviesContainer {
  color: white;
  background-color: var(--red);
  margin-right: 10rem;
  margin-left: 10rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--red),
    0 0 0.8rem var(--red), 0 0 2.8rem var(--red), inset 0 0 1.3rem var(--red);
}
h4 {
  margin: 0;
  opacity: 0.5;
}
h1 {
  margin: 0;
}
.movieTabContainer {
  display: flex;
  flex-direction: column;

  gap: 0.1rem;
}
.movieTab {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.movieTab img {
  height: 5rem;
  width: 3.5rem;
}
.title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.titleAndImage {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.ratingAndWatchlist {
  display: flex;
  align-items: center;
}

.ratingAndWatchlist img {
  height: 2rem;
  width: 2rem;
}
</style>
