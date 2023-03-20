<template>    
    <div  id="menus">
        <sideBar id="sideBar" style="position:fixed; z-index:3 ; height: 100%;"></sideBar>
        <navbar style="position: static; z-index: 2; " ></navbar>
        <div class="content" style="padding-bottom: 10px; height: 100vh; position: static; z-index:4 ; margin-top: 25px;">
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
    background: #F5F7FA;    

}    
.content{    
    margin-left:130px; margin-right:30px;  
}

</style>