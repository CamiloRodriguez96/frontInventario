<template lang="">
    <div class="menus">
        <div id="card">        
            <div class="card">
            <h5 class="card-header" >Registro de productos</h5>
            <div class="card-body">
                <h6 class="mb-4">Información Compras</h6>
                <div class="row">
                    <div class="col-md-6 mt-3">
                        <form id="formulario"> 
                            <h3>Registrar Productos</h3>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">dns</span></span>
                                <input type="text" class="form-control" placeholder="Codígo del producto" aria-describedby="basic-addon1" id="codigoProducto" >
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">info</span></span>
                                <input type="text" class="form-control" placeholder="Nombre del producto" aria-describedby="basic-addon1" id="nombreProducto" >
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">settings</span></span>
                                <textarea  type="text" class="form-control" placeholder="Detalle del producto" aria-describedby="basic-addon1" id="detalleProducto" ></textarea>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">settings_accessibility</span></span>
                                <input type="text" class="form-control" placeholder="Nombre del proveedor" aria-describedby="basic-addon1" id="proveedorProducto" >
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">bolt</span></span>
                                <input type="number" class="form-control" placeholder="Cantidad comprada" aria-describedby="basic-addon1" id="cantidadProducto" >
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">payments</span></span>
                                <input type="number" class="form-control" placeholder="Valor compra" aria-describedby="basic-addon1" id="valorProducto" >
                            </div>
                            <div class="mb-3">
                                <h1 @click="guardar()" class="btn btn-warning">Registrar Compra</h1>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6 mt-3">
                        <h3>Informacion registrada</h3>
                        <TablaRegistro></TablaRegistro>
                    </div>
                </div>
            </div>
        </div>
       </div>           
    </div>
</template>
<script>

import { useRouter } from 'vue-router'
import { onMounted, reactive , defineAsyncComponent } from 'vue';
import useRegistro from '../helpers/useRegistro'

export default {
    components:{
        TablaRegistro: defineAsyncComponent(() => import('../components/TablaRegistro.vue')),
    },

    setup(){
        

        onMounted( async() => {
        
        })
        const router = useRouter()  
        const { crear, obtenerCantidadPaginas , obtenerDatos} = useRegistro() 

        return{
            crear,
            obtenerDatos,
            obtenerCantidadPaginas,
            goRoute: async( param )=>{
                await router.push({name:param})
            },
            guardar:async()=>{
                let codigo = document.getElementById("codigoProducto").value
                let nombre = document.getElementById("nombreProducto").value
                let detalle = document.getElementById("detalleProducto").value
                let proveedor = document.getElementById("proveedorProducto").value
                let cantidad = document.getElementById("cantidadProducto").value
                let valor = document.getElementById("valorProducto").value
                let datos = {
                    codigo,
                    nombre,                    
                    detalle,
                    proveedor,
                    cantidad,
                    valor
                }
                await crear(datos)
                await obtenerDatos(1)
                await obtenerCantidadPaginas('')




            }
        }

    }

}   
     


</script>
<style scoped>

.card-header{
    padding: 15px;
    font-weight: bolder;
    font-size: 13px;
    color: #697179;
}
#formulario{
    text-align: center;
}
.row{
    margin: 30px;
    border-bottom: 1px solid rgb(185, 183, 183);
    border-top: 1px solid rgb(185, 183, 183);

}
h3{
    text-align: center;
    font-size: 12px;
    font-weight: bolder;
    color:#697179;
}
.card-body h6{
    font-size: 14px;
    font-weight: bolder;
    text-align: center;
}

h1{
    font-weight: bold;
}
</style>