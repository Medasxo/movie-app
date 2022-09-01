<script setup>
import { ref, onBeforeMount } from "vue";

const props = defineProps({
  apiKey: String,
});
const topMoviesData = ref([]);

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
    topMoviesData.value = filtered;
  });
}

onBeforeMount(() => {
  getTopMoviesData(
    "https://api.themoviedb.org/3/movie/popular?api_key=" +
      props.apiKey +
      "&language=en-US&page=1"
  );
});
</script>

<template>
  <div class="topMoviesTab" v-if="topMoviesData.length > 0">
    <h1>Top Movies</h1>
    <div class="topMoviesFlexContainer">
      <div class="topMovie" v-for="i in 9" :key="i">
        <h1>{{ i }}</h1>
        <img
          :src="
            'http://image.tmdb.org/t/p/w500/' + topMoviesData[i].poster_path
          "
        />
        <div class="movieInformation">
          <h4>{{ topMoviesData[i].title }}</h4>
          <p>
            {{ topMoviesData[i].release_date }} Rating:{{
              " " + topMoviesData[i].vote_average
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topMoviesTab {
  display: flex;
  flex-direction: column;
}
h1 {
  color: var(--red);
  text-shadow: 0 0 0.3rem var(--red);
}
.topMoviesFlexContainer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.topMovie {
  display: flex;
  padding-left: 0.5rem;
  gap: 1rem;
  border-radius: 0.5rem;
  justify-content: flex-start;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--red),
    0 0 0.8rem var(--red), 0 0 2.8rem var(--red), inset 0 0 1.3rem var(--red);
}

.topMovie img {
  height: 6rem;
  width: 5rem;
}

.movieInformation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  justify-content: center;
}

.movieInformation h4 {
  margin: 0;
}

.movieInformation p {
  opacity: 0.5;
  margin: 0;
}
</style>
