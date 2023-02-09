<template>    
    <div id="menus">
        <sideBar style="position:fixed; z-index:1"></sideBar>
        <navbar style="margin-left:98px;" ></navbar>
        <div class="content" id="content">
            <router-view></router-view>
        </div>        
    </div>
</template>
<script>

import { defineAsyncComponent } from 'vue';
import { onMounted  } from 'vue'
import useAjustes from '../helpers/useAjustes';


export default {

    components:{
        Navbar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        SideBar: defineAsyncComponent(() => import('../components/SideBar.vue'))
    },

    setup(){
        const { obtenerCliente, datosCliente } = useAjustes()

        onMounted( async() => {
            await obtenerCliente()
            document.getElementById("menus").style.background = datosCliente.value['colorFondo']

        })
        return{
            datosCliente,
            datosCliente,
            obtenerCliente,
        }
    }
}
</script>
<style scoped>
#menus{
    background-color: #F5F7FA;
}    
    .content{    
    margin-left:130px; margin-right:30px; margin-top:30px; height: 100vh;
}



</style>