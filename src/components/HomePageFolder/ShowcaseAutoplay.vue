<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { ref, onBeforeMount } from "vue";

const props = defineProps({
  apiKey: String,
});
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
  <vueper-slides v-if="trendingData.results !== undefined" autoplay>
    <vueper-slide v-for="i in 6" :key="i">
      <template #content>
        <div class="content">
          <div class="description">
            <router-link
              :to="{
                path: '/Movie/',
                name: 'movieInformation',
                params: { id: trendingData.results[i - 1].id },
              }"
            >
              <h1 class="title">
                {{ trendingData.results[i - 1].original_title }}
              </h1>
            </router-link>
            <div class="info">
              <p>
                Release Date: {{ trendingData.results[i - 1].release_date }}
              </p>
              <p>Rating: {{ trendingData.results[i - 1].vote_average }}</p>
            </div>
            <p class="overview">{{ trendingData.results[i - 1].overview }}</p>
          </div>
          <img
            :src="
              'http://image.tmdb.org/t/p/w500/' +
              trendingData.results[i - 1].poster_path
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

.title:hover {
  color: white;
  text-shadow: 0 0 0.3rem var(--red);
}
</style>
