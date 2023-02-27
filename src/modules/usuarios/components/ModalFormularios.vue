<template lang="">
    <div>
        <div id="botonModal">
            <button type="button" id="boton"  class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalFormulario" data-bs-whatever="@mdo"><span id="boton" class="material-symbols-outlined">post_add</span>Adicionar</button>
        </div>

        <div class="modal fade" id="exampleModalFormulario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" id="modalTitulo">
                        <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Crear Formulario</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="formulario" class="row">               
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">dns</span></span>
                                <input type="text" class="form-control" placeholder="Nombre Formulario" aria-describedby="basic-addon1" id="nombreFormulario" >
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">details</span></span>
                                <textarea class="form-control" id="detalleFormulario" rows="3" placeholder="Detalle Formulario"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button id="botonCerrarFormulario"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                        <button @click="guardar()" id="botonGuardarFormulario" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Crear</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Edit -->

        <div class="modal fade" id="exampleModalEditFormulario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Editar Formulario</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">dns</span></span>
                            <input type="text" class="form-control" placeholder="Nombre Formulario" aria-describedby="basic-addon1" id="nombreEditFormulario" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">details</span></span>
                            <textarea class="form-control" id="detalleEditFormulario" rows="3" placeholder="Detalle Formulario"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarFormularioEditarFormulario"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="editarDato()" id="botonGuardarFormulario" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Editar</button>
                </div>
                </div>
            </div>
        </div>
    </div> 

</template>
<script>
import useFormulario from '../helpers/useFormulario'
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
            // document.querySelectorAll("#botonGuardarFormulario").forEach(element => {
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
        const { obtenerDatos, crear , editar , idActual , cantidadPaginaActual, obtenerCantidadPaginas } = useFormulario()
        return{
            ToastInformacion,
            idActual,
            cantidadPaginaActual,
            obtenerCantidadPaginas,
            obtenerCliente,
            datosCliente,
            guardar: async ()=>{
                let for_nombre = document.getElementById("nombreFormulario").value
                let for_detalle = document.getElementById("detalleFormulario").value
                let nit_num = "860090915"        
                let datos = {
                    for_nombre,
                    nit_num,
                    for_detalle,
                    for_borrado:0,
                }
                await crear(datos)
                obtenerDatos(1)
                obtenerCantidadPaginas()
                document.getElementById("botonCerrarFormulario").click()
                document.getElementById("nombreFormulario").value = ''
                document.getElementById("detalleFormulario").value = ''
                ToastInformacion.fire({ icon: 'success', html: 'Registro guardado correctamente: <b>' +for_nombre +'</b>'})  
            },
            editarDato: async ()=>{
                let for_nombre = document.getElementById("nombreEditFormulario").value
                let for_detalle = document.getElementById("detalleEditFormulario").value
                let for_id = idActual.value
                let datos = {
                    for_id,
                    for_nombre,
                    for_detalle
                }
                await editar(datos)
                document.getElementById("botonCerrarFormularioEditarFormulario").click()
                obtenerDatos(cantidadPaginaActual.value)
                ToastInformacion.fire({ icon: 'success', html: 'Registro editado correctamente: <b>' +for_nombre +'</b>'})  
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
.modal-footer #botonGuardarFormulario{
    background-color: #303840;
    color: white;
}
.modal-footer #botonGuardarFormulario span{
    vertical-align: middle;
    font-size: 17px;
}

</style>