<script setup>
import goldStar from "./icons/gold-star-icon.png";
import WatchlistButton from "./WatchlistButton.vue";
import {onBeforeMount } from "vue";
const props = defineProps({
  number: String,
  img: String,
  id: String,
  title: String,
  vote_average: String,
});
onBeforeMount(() => {
  console.log(props.number);
});

</script>

<template>
    
  <div class="titleAndImage">
    <img :src="'http://image.tmdb.org/t/p/w500/' + props.img" class="poster"/>
    <div class="title">
      <div class="number">{{ props.number }}</div>
      <router-link
        :to="{
          path: '/Movie/',
          name: 'movieInformation',
          params: { id: props.id },
        }"
        ><h3>{{ props.title }}</h3></router-link
      >
    </div>
  </div>
  <div class="ratingAndWatchlist">
    <div class="rating">
      <img :src="goldStar" class="star" />
      <h3>{{ props.vote_average }}</h3>
    </div>
    <WatchlistButton />
  </div>
</template>

<style scoped>
.star{
    height: 10px;
    width: 20px;
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
.number {
  color: white;
  font-size: 30px;
  text-shadow: 0 0 0.5rem white;
}
.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.rating img {
  height: 2rem;
  width: 2rem;
}
.poster {
  height: 5rem;
  width: 3.5rem;
}

</style>
