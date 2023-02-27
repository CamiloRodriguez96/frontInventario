import { createRouter, createWebHistory } from 'vue-router'
import usuarioRouter from '@/modules/usuarios/router'
import proveedorRouter from '@/modules/proveedores/router'

const routes = [
  {
    path: '/',
    name: 'usuarios',
    ...usuarioRouter
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    ...proveedorRouter
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes

})

// router.beforeEach crear seguridad

export default router
