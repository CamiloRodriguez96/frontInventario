export default{

  name:'proveedores',
  component: () => import("@/modules/proveedores/layouts/ProveedorLayout.vue"),
  children:[
      {
        path : '',
        name : 'inicioProveedor',
        component: () => import('@/modules/proveedores/views/Inicio.vue')
      },
      
  ]

}
