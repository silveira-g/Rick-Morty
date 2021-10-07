import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Personagens',
    component: () => import('../Pages/Personagens.vue')
  },
  {
    path: '/locais',
    name: 'Local',
    component: () => import(/* webpackChunkName: "about" */ '../Pages/Local.vue')
  },
  {
    path: '/episodios',
    name: 'Episodio',
    component: () => import('../Pages/Episodio.vue')
  },
  {
    path: '/personagem/detalhes/:id',
    name: 'Detalhes',
    component: () => import('../Pages/Detalhes.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PaginaNaoExiste',
    component: () => import('../Pages/PaginaNaoExiste.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
