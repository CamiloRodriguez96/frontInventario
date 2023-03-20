import { createRouter, createWebHistory } from 'vue-router'
import usuarioRouter from '@/modules/usuarios/router'
import usuarioAutentication from '@/modules/autentication/router'

const routes = [
  {
    path: '',
    name: 'autentication',
    ...usuarioAutentication
  },
  {
    path: '/u',
    name: 'usuarios',
    ...usuarioRouter
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes

})


export default router
