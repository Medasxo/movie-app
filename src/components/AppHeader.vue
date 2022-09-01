<script setup>
defineProps({});
</script>

<template>
  <div class="header">
    <div class="linksMovies">
      <router-link to="/TopRated"
        ><h3 class="hover-underline-animation">Top-Rated</h3></router-link
      >
      <router-link to="/MostPopular"
        ><h3 class="hover-underline-animation">Most Popular</h3></router-link
      >
    </div>
    <router-link to="/"><h1>Movify</h1></router-link>
  </div>
</template>

<style scoped>
.header {
  color: var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  border-radius: 1.5rem;
  padding: 1rem;
  text-shadow: 0 0 0.3rem var(--red);
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--red),
    0 0 0.8rem var(--red), 0 0 2.8rem var(--red), inset 0 0 1.3rem var(--red);
}
h1:hover {
  background-color: var(--red);
  color: white;
}
.linksMovies {
  position: absolute;
  right: 2rem;
  display: flex;
  gap: 1rem;
}
.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: var(--red);
  text-shadow: 0 0 0.3rem var(--red);
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--red);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
