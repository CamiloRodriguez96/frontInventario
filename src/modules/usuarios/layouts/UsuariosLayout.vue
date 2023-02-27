<template>    
    <div  id="menus">
        <sideBar style="position:fixed; z-index:3 ; height: 100%;"></sideBar>
        <navbar style="margin-left:98px;" ></navbar>
        <div class="content" id="content" style="position: relative; min-height: 100vh; ">
            <router-view></router-view>
        </div> 
    </div>
</template>
<script>

import { defineAsyncComponent } from 'vue';
import useAjustes from '../helpers/useAjustes';
import { onMounted } from 'vue';

export default {

    components:{
        Navbar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        SideBar: defineAsyncComponent(() => import('../components/SideBar.vue'))
    },

    setup(){
        const { obtenerCliente, datosClienteMostrar, datosCliente } = useAjustes()

        onMounted( async() => {
            await obtenerCliente()
            document.getElementById("menus").style.background = datosCliente.value['colorFondo']
        })


        return{
            obtenerCliente,
            datosClienteMostrar,
            datosCliente
        }
    }
}
</script>
<style scoped>
#menus{
    background-color: #F5F7FA;
}    
.content{    
    margin-left:130px; margin-right:30px;  margin-top:25px;  
}

</style>