<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

defineProps({});
</script>

<template>
  <vueper-slides
    class="no-shadow arrows-outside bullets-outside ex--center-mode"
    :visible-slides="3"
    :slide-ratio="1 / 4"
    :dragging-distance="70"
    :bullets="true"
  >
    <vueper-slide v-for="i in 9" :key="i" :title="i.toString()" />
  </vueper-slides>
</template>

<style scoped>
.arrows-outside {
  color: var(--red);
}

.ex--center-mode {
  width: 60rem;
  max-width: 100%;
  margin: auto;
}
</style>
