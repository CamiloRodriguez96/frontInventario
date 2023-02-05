<template>
    
    <div class="menus">
        <sideBar style="position:fixed; z-index:1"></sideBar>
        <navbar style="margin-left:98px;" ></navbar>
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default {
    components:{
        Navbar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        SideBar: defineAsyncComponent(() => import('../components/SideBar.vue'))
    }    
}
</script>
<style scoped>    
*{
    background-color: #F5F7FA;    
}
.content{
    margin-left:130px; margin-right:30px; margin-top:30px; height: 91vh;
}

</style>