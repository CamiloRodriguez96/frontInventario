export default{

  name:'autentication',
  component: () => import("@/modules/autentication/layouts/AutenticationLayout.vue"),
  children:[
      {
        path:'',
        name:'index',
        component: () => import('@/modules/autentication/views/Index.vue')
      }     
  ]

}


