<template lang="">
    <div class="menus">
        <div class="content">
            <tarjet></tarjet>
            <div class="row mt-3">
                <div class="col-md-8 col-sm-12">
                    <IndicadorProveedor></IndicadorProveedor>    
                    <TableProveedor></TableProveedor>
                </div>
                <div class="col-md-4 col-sm-12">
                    <tableProveedorNuevo></tableProveedorNuevo>    
                    <IndicadorPendientes></IndicadorPendientes>    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {
    components:{
        Tarjet: defineAsyncComponent(() => import('../components/Tarjet.vue')),
        IndicadorProveedor: defineAsyncComponent(() => import('../components/IndicadorProveedor.vue')),
        TableProveedorNuevo: defineAsyncComponent(() => import('../components/TableProveedorNuevo.vue')),
        TableProveedor: defineAsyncComponent(() => import('../components/TableProveedor.vue')),
        IndicadorPendientes: defineAsyncComponent(() => import('../components/IndicadorPendientes.vue')),
        
    }
}
</script>
<style scoped>


</style>