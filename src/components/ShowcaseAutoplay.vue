<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { onMounted, ref } from "vue";

const trendingData = ref({});
function getRequest(url) {
  return fetch(url).then((res) => {
    if (res.ok) {
      // Checks server response (if there is one)
      return res.json();
    } else {
      throw new Error("Bad response");
    }
  });
}

function getData(url) {
  getRequest(url)
    .then((data) => {
      trendingData.value = data;
    })
    .catch((err) => console.log(err)); // Catch handles an error
}

onMounted(() => {
  getData(
    "https://api.themoviedb.org/3/trending/all/week?api_key=2cc7d8a7cdb91108d9665ce323fb49a5"
  );
  console.log(trendingData);
});
defineProps({});
</script>

<template>
  <vueper-slides autoplay>
    <vueper-slide
      v-for="i in 4"
      :key="i"
      :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
    >
      <template #content>
        <div class="content">
          Complex content with Vue.js SSIO
          {{ 1 === 1 ? "interpreted" : "non-interpreted" }} compilable content &
          <span v-pre>{{ mustaches }}</span
          >.
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<style scoped>
.arrows-outside {
  color: var(--red);
}

.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
