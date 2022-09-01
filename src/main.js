import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomePage from "./components/HomePageFolder/HomePage.vue";
import TopRated from "./components/TopRatedPage.vue";
import MostPopular from "./components/MostPopularPage.vue";
import MovieInformation from "./components/MovieInformation.vue";

import "./assets/main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomePage },
    { path: "/TopRated", name: "TopRated", component: TopRated },
    { path: "/MostPopular", name: "MostPopular", component: MostPopular },
    {
      path: "/Movie/:id",
      name: "movieInformation",
      component: MovieInformation,
      props: true,
    },
  ],
});

createApp(App).use(router).mount("#app");
