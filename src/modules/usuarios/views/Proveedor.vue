<template lang="">
    <div class="menus">
        <div class="card">
            <h5 class="card-header">Proveedores</h5>
            <div class="card-body"></div>  
            <!-- <TablaProveedores></TablaProveedores> -->
                <form id="formularioCliente" class="row">               
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                        <input type="text" class="form-control" placeholder="Tipo Documento" aria-describedby="basic-addon1" id="tipoDocumentoProveedor" >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                        <input type="text" class="form-control" placeholder="Numero NIT/CC" aria-describedby="basic-addon1" id="numeroDocumentoProveedor" >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                        <input type="text" class="form-control" placeholder="Nombre proveedor" aria-describedby="basic-addon1" id="nombreProveedor" >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                        <input type="text" class="form-control" placeholder="Proceso" aria-describedby="basic-addon1" id="procesoProveedor" >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                        <input type="text" class="form-control" placeholder="Sub Proceso" aria-describedby="basic-addon1" id="subProcesoProveedor" >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                        <input type="text" class="form-control" placeholder="Contrasena" aria-describedby="basic-addon1" id="contraseProveedor" >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                        <input type="text" class="form-control" placeholder="celular " aria-describedby="basic-addon1" id="celularProveedor" >
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                        <input type="text" class="form-control" placeholder="Direccion" aria-describedby="basic-addon1" id="direccionnProveedor" >
                    </div> 
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                        <input type="text" class="form-control" placeholder="Ciudad" aria-describedby="basic-addon1" id="ciudadProveedor" >
                    </div>
                </form>
                <div class="row">
                    <h4 v-for="periodo in dataPeriodo" :key="periodo.per_nombre" style="text-align:center">{{periodo.per_nombre}}</h4>
                    <div style="text-align:center" class="col-6">
                        <div v-for="formulario in datosState" :key="datosStateForm.for_id">
                            <h4>{{formulario.for_nombre}}</h4>  
                            <div v-for="formularioDetalle in datosStateForm" :id="formularioDetalle.fod_id">
                                <h4 v-if="formulario.for_nombre == formularioDetalle.for_nombre"> {{ formularioDetalle.fod_nombre }}</h4>                     
                                <input v-if="formulario.for_nombre == formularioDetalle.for_nombre" :type="formularioDetalle.fod_tipo">
                            </div>
                        </div>

                        

                    </div>
                    <div  style="text-align:center" class="col-6">
                        <h4>Imagen pdf</h4>
                    </div>
                </div>
            <div>
            </div>
       </div>           
    </div>
</template>
<script>
import { defineAsyncComponent , onMounted } from 'vue';
import usePeriodo from '../helpers/usePeriodo';
import useFormularioDetalle from '../helpers/useFormularioDetalle';
import useFormulario from '../helpers/useFormulario';

export default {
    components:{
        TablaProveedores: defineAsyncComponent(() => import('../components/TablaProveedores.vue')),
    },
    
    setup(){

        const {dataPeriodo , obtenerPeriodos} = usePeriodo()
        const {datosStateForm  , obtenerTodosDatos } = useFormularioDetalle()
        const {datosState  , obtenerDatosGet } = useFormulario()

        onMounted(async() => {
            await obtenerPeriodos()
            await obtenerTodosDatos()
            await obtenerDatosGet()
            console.log(datosStateForm)
        })

        return{
            obtenerPeriodos,
            dataPeriodo,
            obtenerTodosDatos,
            datosStateForm,
            obtenerDatosGet,
            datosState



        }
    }

}
</script>
<style scoped>

</style>