import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReadMore from '../views/ReadMore.vue'

const routes = [
	{
		path: "/",
		name: 'home',
		component: Home
	},
	{
		path: "/readMore",
		name: 'readmore',
		component: ReadMore
	},
	{
		path: "/about",
		name: "about",
		component: Home,
		hash: "#about"
	},
	{
		path: "/ourService",
		name: "ourService",
		component: Home,
		hash: "#ourService"
	},
	{
		path: "/contact",
		name: "contact",
		component: Home,
		hash: "#contact"
	}
]


const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Optional for smooth scrolling
      };
    }
  },
})

export default router