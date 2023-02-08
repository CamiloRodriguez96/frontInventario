<template lang="">
    <div class="menus">
        <div class="card">
            <h5 class="card-header">Condiciones de la Empresa</h5>
            <div class="card-body"></div>
            <div id="procesos">
                <TablaProcesos></TablaProcesos>
                <TablaProcesos></TablaProcesos>
                <TablaProcesos></TablaProcesos>
            </div>

       </div>           
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default {
    components:{
        TablaProcesos: defineAsyncComponent(() => import('../components/TablaProcesos.vue')),
    }

}        


</script>
<style scoped>
.card-header{
    font-size: 19px;
    font-weight: bolder;
}

#procesos{
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 25px;  
    max-width: 600px;
    min-height: 210px;
}

@media screen and (max-width: 440px) {
    .card-header{
        text-align: center;
    }
}


</style>