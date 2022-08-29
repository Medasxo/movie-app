<script setup>
defineProps({});
</script>

<template>
  <div class="header">
    <div class="linksMovies">
      <h3>Top-Rated</h3>
      <h3>Most Popular</h3>
    </div>
    <h1>MOVIES</h1>
    <div class="watchlist">
      <h3>Watchlist</h3>
    </div>
  </div>
</template>

<style scoped>
.header {
  color: var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
}
.watchlist{
  position: absolute;
  right: 2rem;
}
h1 {
  border-radius: 1.5rem;
  padding: 1rem;
  text-shadow: 0 0 0.3rem var(--red);
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--red),
    0 0 0.8rem var(--red), 0 0 2.8rem var(--red), inset 0 0 1.3rem var(--red);
}
.linksMovies{
  position: absolute;
  left: 2rem;
  display: flex;
  gap: 1rem;
}
h3{
  text-shadow: 0 0 0.3rem var(--red);
}
h3:hover {
  text-decoration: underline;
}
</style>
