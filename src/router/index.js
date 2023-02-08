import { createRouter, createWebHistory } from 'vue-router'
import usuarioRouter from '@/modules/usuarios/router'

const routes = [
  {
    path: '/',
    name: 'usuarios',
    ...usuarioRouter
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes

})

// router.beforeEach crear seguridad

export default router
