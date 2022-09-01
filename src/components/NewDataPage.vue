<script setup>
import AppHeader from "./AppHeader.vue";
import { ref, onBeforeMount } from "vue";
import goldStar from "./icons/gold-star-icon.png";
import WatchlistButton from "./watchlistButton.vue";

const Data = ref([]);
const props = defineProps({
  APILink: String,
  APIKey: String,
  Title: String,
});

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
    const filtered = data.results.filter(
      (result) => result.poster_path !== null
    );
    Data.value = filtered;
  });
}

onBeforeMount(() => {
  getData(props.APILink + props.APIKey + "&language=en-US");
});
</script>

<template>
  <AppHeader />
  <div class="topRatedMoviesContainer" v-if="Data.length > 0">
    <h4>TMDb Charts</h4>
    <h1>TMDb {{ props.Title }}</h1>
    <div class="movieTabContainer" v-if="Data.length > 0">
      <div class="tags">
        <p>Rank & Title</p>
        <p>Rating</p>
      </div>
      <div class="movieTab" v-for="i in 20" :key="i">
        <div class="titleAndImage">
          <img
            :src="'http://image.tmdb.org/t/p/w500/' + Data[i - 1].poster_path"
          />
          <div class="title">
            <div class="number">{{ i }}.</div>
            <h3>{{ Data[i - 1].title }}</h3>
          </div>
        </div>
        <div class="ratingAndWatchlist">
          <div class="rating">
            <img :src="goldStar" />
            <h3>{{ Data[i - 1].vote_average }}</h3>
          </div>
          <WatchlistButton />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topRatedMoviesContainer {
  color: white;
  background-color: var(--red);
  margin-right: 20rem;
  margin-left: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--red),
    0 0 0.8rem var(--red), 0 0 2.8rem var(--red), inset 0 0 1.3rem var(--red);
}
.tags {
  display: flex;
  justify-content: space-between;
  padding-right: 5rem;
}
h4 {
  margin: 0;
  opacity: 0.5;
}
h1 {
  margin: 0;
  text-shadow: 0 0 0.5rem white;
}
.number {
  color: white;
  font-size: 30px;
  text-shadow: 0 0 0.5rem white;
}
.movieTabContainer {
  display: flex;
  flex-direction: column;

  gap: 0.1rem;
}
.movieTab:nth-child(2n) {
  background-color: rgba(0, 0, 0, 0.3);
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
  gap: 2rem;
}
.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.ratingAndWatchlist img {
  height: 2rem;
  width: 2rem;
}
</style>
