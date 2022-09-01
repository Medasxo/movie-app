<script setup>
import bookmarkUnmarked from "./icons/bookmarkUnmarked.png";
import bookmarkMarked from "./icons/bookmarkMarked.png";
import { ref } from "vue";
const currentImage = ref(bookmarkUnmarked);
function changeImage() {
  if (currentImage.value == bookmarkUnmarked)
    currentImage.value = bookmarkMarked;
  else {
    currentImage.value = bookmarkUnmarked;
  }
}
</script>

<template>
  <div class="watchlistButton">
    <img :src="currentImage" @click="changeImage" />
  </div>
</template>

<style scoped>
img {
  width: 2.5rem;
  height: 2.5rem;
}
</style>
