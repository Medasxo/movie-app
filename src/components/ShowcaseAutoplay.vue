<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { ref, onBeforeMount } from "vue";

const props = defineProps({
  apiKey: String,
})
const trendingData = ref({});

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
    trendingData.value = data;
  });
}

onBeforeMount(() => {
  getTrendingData(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=" + props.apiKey
  );
});
</script>

<template>
  <vueper-slides autoplay v-if="trendingData !== undefined">
    <vueper-slide v-for="i in 6" :key="i">
      <template #content>
        <div class="content">
          <div class="description">
            <h1>
              {{ trendingData.results[i].original_title }}
            </h1>
            <div class="info">
              <p>Release Date: {{ trendingData.results[i].release_date }}</p>
              <p>Rating: {{ trendingData.results[i].vote_average }}</p>
            </div>
            <p class="overview">{{ trendingData.results[i].overview }}</p>
          </div>
          <img
            :src="
              'http://image.tmdb.org/t/p/w500/' +
              trendingData.results[i].poster_path
            "
          />
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<style scoped>
.content {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  margin-left: 5rem;
  color: white;
}
.info {
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  gap: 0px;
}

h1 {
  color: var(--red);
  margin-bottom: 0;
}

p {
  margin: 0px;
}
.description {
  display: flex;
  flex-direction: column;
}
.content img {
  border-radius: 1rem;
}
.overview {
  max-width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
