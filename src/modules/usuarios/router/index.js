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
        path : '/empresa',
        name : 'empresa',
        component: () => import('@/modules/usuarios/views/Empresa.vue'),
        children:[
          {
          path : 'procesos',
          name : 'procesos',
          component: () => import('@/modules/usuarios/components/TablaProcesos.vue')
          },
          {
          path : 'periodos',
          name : 'periodos',
          component: () => import('@/modules/usuarios/components/TablaPeriodos.vue')
          },
          {
          path : 'subProcesos',
          name : 'subProcesos',
          component: () => import('@/modules/usuarios/components/TablaSubProcesos.vue')
          },
          {
          path : 'formularioInicial',
          name : 'formularioInicial',
          component: () => import('@/modules/usuarios/components/TablaFormularios.vue')
          },
          {
          path : 'formularioDetalle',
          name : 'formularioDetalle',
          component: () => import('@/modules/usuarios/components/TablaFormularioDetallesForm.vue')
          },
        ]
      },
      {
        path : '/formulario',
        name : 'formulario',
        component: () => import('@/modules/usuarios/views/Formulario.vue'),
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
      {
        path : '/:pathMatch(.*)*',
        name : 'No encontrada',
        component: () => import('@/modules/usuarios/views/inicio.vue')
      },

  ]

}
