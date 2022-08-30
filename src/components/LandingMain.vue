<script setup>
defineProps({});
</script>

<template>
  <div className="landingMain">
    <img src="../assets/characters.png" />
    <a href="#down">Click Here</a>
  </div>
</template>

<style scoped>
.landingMain {
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
    width: 45%;
    position: relative;
    top: -11rem;
}
a{
  background-color: var(--red);
  position: absolute;
  color: white;
  text-decoration: none;
  padding: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 1rem;
  bottom: 5rem;
  text-shadow: 0 0 0.3rem white;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem var(--red),
    0 0 0.8rem var(--red), 0 0 2.8rem var(--red), inset 0 0 1.3rem var(--red);
}
a:hover{
  font-size: 24px;
}
a:active{
  color: black;
  font-size: 24px;
}
</style>
