import { createRouter, createWebHistory } from "vue-router";
import HomePageView from "../views/homePageView.vue";
import Contactusview from "../views/contactusview.vue";
import AboutPageView from "@/views/AboutPageView.vue";
import FaqPageView from "@/views/FaqPageView.vue";
import productpageview from "@/views/ProductPageView.vue";
import productdetails from "@/components/ProductPage/ProductDesc.vue";
import ServicesPageView from "@/views/ServicesPageView.vue";
import Blogview from "@/views/Blogview.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePageView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contactusview,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPageView,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FaqPageView,
  },
  {
    path: "/products",
    name: "Products",
    component: productpageview,
  },
  {
    path: "/products/:id",
    name: "Productdetails",
    component: productdetails,
  },
  {
    path: "/services", // Add the Services route
    name: "Services",
    component: ServicesPageView,
  },
  {
    path: "/blog", // Add the Services route
    name: "blog",
    component: Blogview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
