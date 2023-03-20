export default{

  name:'usuarios',
  component: () => import("@/modules/usuarios/layouts/UsuariosLayout.vue"),
  children:[
      {
        path : 'inicio',
        name : 'inicio',
        component: () => import('@/modules/usuarios/views/Inicio.vue')
      },
      {
        path : 'registro',
        name : 'registro',
        component: () => import('@/modules/usuarios/views/Registro.vue')
      },
      {
        path : 'ingreso',
        name : 'ingreso',
        component: () => import('@/modules/usuarios/views/Ingreso.vue')
      },
      {
        path : 'ajustes',
        name : 'ajustes',
        component: () => import('@/modules/usuarios/views/Ajustes.vue'),
      },
      // {
      //   path : '/:pathMatch(.*)*',
      //   name : 'No encontrada',
      //   component: () => import('@/modules/usuarios/views/inicio.vue')
      // },

  ]

}
