// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "../views/homePageView.vue";
import Contactusview from "../views/contactusview.vue";
import AboutPageView from "@/views/AboutPageView.vue";
import FaqPageView from "@/views/FaqPageView.vue";
import productpageview from "@/views/productpageview.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePageView, // This is where the NewsArticle component is now rendered
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contactusview, // This is where the Contact component is now rendered
  },
  {
    path: "/about",
    name: "About",
    component: AboutPageView, // This is where the About component is now rendered
  },

  {
    path: "/faq",
    name: "FAQ",
    component: FaqPageView, // This is where the About component is now rendered
  },
  {
    path: '/products',
    name: "Products",
    component: productpageview, // This is where the About component is now rendered
  },
  // You can add more routes if needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
