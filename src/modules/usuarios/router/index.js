export default{

  name:'usuarios',
  component: () => import("@/modules/usuarios/layouts/UsuariosLayout.vue"),
  children:[
      {
        path : '',
        name : 'inicio',
        component: () => import('@/modules/usuarios/views/Inicio.vue')
      },
      {
        path : '/proveedor',
        name : 'proveedor',
        component: () => import('@/modules/usuarios/views/Proveedor.vue')
      },
      {
        path : '/cliente',
        name : 'cliente',
        component: () => import('@/modules/usuarios/views/Cliente.vue')
      },
      {
        path : '/formulario',
        name : 'formulario',
        component: () => import('@/modules/usuarios/views/Formulario.vue')
      },
      {
        path : '/ajustes',
        name : 'ajustes',
        component: () => import('@/modules/usuarios/views/Ajustes.vue')
      },
      {
        path : '/notificaciones',
        name : 'notificaciones',
        component: () => import('@/modules/usuarios/views/Notificaciones.vue')
      },
      {
        path : '/usuario',
        name : 'usuario',
        component: () => import('@/modules/usuarios/views/Usuario.vue')
      },

  ]

}
