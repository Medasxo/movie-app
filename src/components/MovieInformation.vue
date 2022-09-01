<script setup>
import AppHeader from "./AppHeader.vue";
import { ref, onBeforeMount } from "vue";

const props = defineProps({
  id: String,
});

const Data = ref({});
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

function getData(url) {
  getRequest(url).then((data) => {
    Data.value = data;
  });
}

onBeforeMount(() => {
  getData(
    "https://api.themoviedb.org/3/movie/" +
      props.id +
      "?api_key=" +
      API.value +
      "&language=en-US"
  );
  console.log(Data);
});
</script>

<template>
  <AppHeader />
  <div class="movieInformationContainer" v-if="Data.id !== undefined">
    <div class="titleAndImages">
      <h1 class="title">{{ Data.title }}</h1>
      <div class="images">
        <img
          class="posterImage"
          :src="'http://image.tmdb.org/t/p/w780/' + Data.poster_path"
        />
        <img
          class="backdropImage"
          :src="'http://image.tmdb.org/t/p/w1280/' + Data.backdrop_path"
        />
      </div>
    </div>
    <div class="information">
      <div class="genres">
        <h3 class="genre" v-for="i in Data.genres.length" :key="i">
          {{ Data.genres[i - 1].name }}
        </h3>
      </div>
      <p>{{Data.overview}}</p>
      <div class="informationTable">
        <h4 class="withoutBold">Release Date <h4>{{Data.release_date}}</h4></h4>
        <h4 class="withoutBold">Rating <h4>{{Data.vote_average}}</h4></h4>
        <h4 class="withoutBold">Runtime <h4>{{Data.runtime}} minutes</h4></h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movieInformationContainer {
  color: white;
  background-color: var(--red);
  padding-left: 20rem;
  padding-right: 20rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--red),
    0 0 0.8rem var(--red), 0 0 2.8rem var(--red), inset 0 0 1.3rem var(--red);
}
.titleAndImages {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  text-shadow: 0 0 0.3rem white;
}
.images {
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}
.backdropImage {
  height: 25rem;
  width: 70%;
}

.posterImage {
  height: 25rem;
  width: 30%;
}

.genres {
  display: flex;
  gap: 0.5rem;
}
.informationTable{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.genre {
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 0.75rem;
  padding: 0.5rem;
}

.informationTable h4{
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.withoutBold{
  font-weight: normal;
}
</style>
