import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMovieView from '@/views/AboutMovieView.vue'
import MyMoviesView from '@/views/MyMoviesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/meus-filmes',
    name: 'meus-filmes',
    component: MyMoviesView
  },
  {
    path: '/filme/:id',
    name: 'filme',
    component: AboutMovieView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
