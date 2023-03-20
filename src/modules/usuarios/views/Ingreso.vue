<template lang="">
    <div class="menus">
        <div id="card">        
            <div class="card">
            <h5 class="card-header" >Ingreso de productos</h5>
            <div class="card-body">
                <h6 class="mb-4">Información Actual de Productos</h6>
                <div class="row">
                    <div class="col-md-6 mt-3">
                        <form id="formulario"> 
                            <h3>Movimientos</h3>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">dns</span></span>
                                <select class="form-select" aria-label="Disabled select example" id="productoIngreso">
                                    <option selected>Selecciona el Producto</option>
                                    <option v-for="producto in datosStateregistro" :key="producto.id" :value="producto.nombre">{{ producto.nombre }}</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">checklist</span></span>
                                <select class="form-select" aria-label="Disabled select example" id="movimientoIngreso">
                                    <option value="Entrada">Entrada</option>
                                    <option value="Salida">Salida</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">repeat_one_on</span></span>
                                <input type="number" class="form-control" placeholder="Cantidad comprada" aria-describedby="basic-addon1" id="cantidadIngreso" >
                            </div>
                            <div class="mb-3">
                                <h1 @click="guardar()" class="btn btn-info">Registrar Movimiento</h1>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6 mt-3">
                        <h3>Stock Actual</h3>                       
                        <TablaIngreso></TablaIngreso>
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
import useIngreso from '../helpers/useIngreso'
import useRegistro from '../helpers/useRegistro'


export default {
    components:{
        TablaIngreso: defineAsyncComponent(() => import('../components/TablaIngreso.vue')),
    },

    setup(){
        

        onMounted( async() => {
            await obtenerDatosGetregistro();
        
        })
        const router = useRouter()  
        const { crear, obtenerCantidadPaginas , obtenerDatos} = useIngreso() 
        const { obtenerDatosGetregistro , datosStateregistro } = useRegistro() 
        

        return{
            crear,
            obtenerDatosGetregistro,
            datosStateregistro,
            obtenerDatos,
            obtenerCantidadPaginas,
            goRoute: async( param )=>{
                await router.push({name:param})
            },
            guardar:async()=>{
                let movimiento = document.getElementById("movimientoIngreso").value
                let cantidad = document.getElementById("cantidadIngreso").value
                let producto = document.getElementById("productoIngreso").value
                let datos = {
                    movimiento,
                    cantidad,                    
                    producto,                   
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