<template lang="">
    <div>
        <div id="botonModal">
            <button type="button" id="boton"  class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalPeriodo" data-bs-whatever="@mdo"><span id="boton" class="material-symbols-outlined">post_add</span>Adicionar</button>
        </div>

        <div class="modal fade" id="exampleModalPeriodo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Crear Periodo</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre Periodo" aria-describedby="basic-addon1" id="nombrePeriodo" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">support_agent</span></span>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="estadoPeriodo">
                                <option selected>Visibilidad del proveedor</option>
                                <option value="visible">Visible</option>
                                <option value="oculto">Oculto</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarPeriodo"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="guardar()" id="botonGuardarPeriodo" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Crear</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal Edit -->

        <div class="modal fade" id="exampleModalEditPeriodo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Editar Periodo</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre Periodo" aria-describedby="basic-addon1" id="nombreEditPeriodo" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">support_agent</span></span>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="estadoEditPeriodo">
                                <option selected>Visibilidad del proveedor</option>
                                <option value="Visible">Visible</option>
                                <option value="Oculto">Oculto</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarPeriodoEditarPeriodo"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="editarDato()" id="botonGuardarPeriodo" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Editar</button>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import usePeriodo from '../helpers/usePeriodo'
import useAlerts from '../helpers/useAlerts'
import useAjustes from '../helpers/useAjustes'
import { onMounted } from 'vue'


export default {

    setup(){

        onMounted( async () => {
                    
            // document.querySelectorAll("#boton").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
            // document.querySelectorAll("#modalTitulo").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
            // document.querySelectorAll("#botonGuardarPeriodo").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
            // document.querySelectorAll("#spanBoton").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });        
        })

        const { ToastInformacion  } = useAlerts()  
        const { obtenerCliente, datosCliente  } = useAjustes()         
        const { obtenerDatos, crear , editar , idActual , cantidadPaginaActual, obtenerCantidadPaginas } = usePeriodo()
        return{
            ToastInformacion,
            idActual,
            cantidadPaginaActual,
            obtenerCantidadPaginas,
            obtenerCliente,
            datosCliente,
            guardar: async ()=>{
                let per_nombre = document.getElementById("nombrePeriodo").value
                let per_estado = document.getElementById("estadoPeriodo").value
                let nit_num = "860090915"        
                let datos = {
                    per_nombre,
                    per_estado,                    
                    nit_num,
                    per_borrado:0,
                    per_consecutivo:0,
                    per_nombre_copia:'2023'
                }
                await crear(datos)
                obtenerDatos(1)
                obtenerCantidadPaginas()
                document.getElementById("botonCerrarPeriodo").click()
                document.getElementById("nombrePeriodo").value = ''
                document.getElementById("estadoPeriodo").value = 'Visibilidad del proveedor'
                ToastInformacion.fire({ icon: 'success', html: 'Registro guardado correctamente: <b>' + per_nombre +'</b>'})  
            },
            editarDato: async ()=>{
                let per_nombre = document.getElementById("nombreEditPeriodo").value
                let per_estado = document.getElementById("estadoEditPeriodo").value
                let per_id = idActual.value
                let datos = {
                    per_id,
                    per_nombre,
                    per_estado,                    
                }
                await editar(datos)
                document.getElementById("botonCerrarPeriodoEditarPeriodo").click()
                obtenerDatos(cantidadPaginaActual.value)
                ToastInformacion.fire({ icon: 'success', html: 'Registro editado correctamente: <b>' + per_nombre +'</b>'})  
            }

        }
    }
    
}
</script>
<style scoped>

#botonModal{
    text-align: center; 
}

#botonModal button{
    margin-top: -5px;
    width: 100%;
    color: white;
}
#botonModal span{
    vertical-align: middle;
}
.modal-header{
    -webkit-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    -moz-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
}
.modal-header h1{
    font-size: 12px;
    vertical-align: middle;
}
.modal-header span{
    font-size: 30px;
    vertical-align: middle;
}
.modal-footer button{
    width: 100px;
    height: 30px; 
    border: 1px solid #AAABAE;
}
.modal-footer button:hover{
    -webkit-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    -moz-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
}
.modal-footer #botonGuardarPeriodo{
    background-color: #303840;
    color: white;
}
.modal-footer #botonGuardarPeriodo span{
    vertical-align: middle;
    font-size: 17px;
}
</style>