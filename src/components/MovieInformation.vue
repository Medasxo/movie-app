
<script setup>
import AppHeader from "./AppHeader.vue";
</script>

<template>
  <AppHeader />
  <div class="movieInformationContainer">
    {{ $route.params.id }}
  </div>
</template>

<style scoped>
.movieInformationContainer {
  color: white;
}
</style>
