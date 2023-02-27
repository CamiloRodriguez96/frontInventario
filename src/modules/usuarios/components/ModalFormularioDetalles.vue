<template lang="">
    <div>
        <div id="botonModal">
            <button type="button" id="boton"  class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalFormularioDetalle" data-bs-whatever="@mdo"><span id="boton" class="material-symbols-outlined">post_add</span>Adicionar</button>
        </div>

        <div class="modal fade" id="exampleModalFormularioDetalle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Crear FormularioDetalle</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre" aria-describedby="basic-addon1" id="nombreFormularioDetalle" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Tipo" aria-describedby="basic-addon1" id="tipoDetalleFormularioDetalle" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Adjunto" aria-describedby="basic-addon1" id="adjuntoFormularioDetalle" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Vigencia" aria-describedby="basic-addon1" id="vigenciaFormularioDetalle" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre Estado" aria-describedby="basic-addon1" id="estadoFormularioDetalle" >
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarFormularioDetalle"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="guardar()" id="botonGuardarFormularioDetalle" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Crear</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal Edit -->

        <div class="modal fade" id="exampleModalEditFormularioDetalle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Editar FormularioDetalle</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre FormularioDetalle" aria-describedby="basic-addon1" id="nombreEditFormularioDetalle" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre FormularioDetalle" aria-describedby="basic-addon1" id="tipoDetalleEditFormularioDetalle" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre FormularioDetalle" aria-describedby="basic-addon1" id="adjuntoEditFormularioDetalle" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre FormularioDetalle" aria-describedby="basic-addon1" id="vigenciaEditFormularioDetalle" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre FormularioDetalle" aria-describedby="basic-addon1" id="estadoEditFormularioDetalle" >
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarFormularioDetalleEditarFormularioDetalle"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="editarDato()" id="botonGuardarFormularioDetalle" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Editar</button>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import useFormularioDetalle from '../helpers/useFormularioDetalle'
import useAlerts from '../helpers/useAlerts'
import useAjustes from '../helpers/useAjustes'
import useFormulario from '../helpers/useFormulario';
import { onMounted, reactive } from 'vue'


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
            // document.querySelectorAll("#botonGuardarFormularioDetalle").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
            // document.querySelectorAll("#spanBoton").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });        
        })

        const { obtenerFormularios , formularios} = useFormulario()
        const { ToastInformacion  } = useAlerts()  
        const { obtenerCliente, datosCliente  } = useAjustes()         
        const { obtenerDatos, crear , editar , idActual , cantidadPaginaActual, obtenerCantidadPaginas ,obtenerDatosForm } = useFormularioDetalle()


        return{
            ToastInformacion,
            idActual,
            cantidadPaginaActual,
            obtenerCantidadPaginas,
            obtenerCliente,
            datosCliente,
            formularios,
            obtenerFormularios,
            obtenerDatosForm,
            guardar: async ()=>{
                await obtenerFormularios()
                let for_nombre = document.getElementById("nombreFormularioFormularioDetalle").value
                let fod_nombre = document.getElementById("nombreFormularioDetalle").value
                let fod_tipo = document.getElementById("tipoDetalleFormularioDetalle").value
                let fod_adjunto = document.getElementById("adjuntoFormularioDetalle").value
                let fod_vigencia = document.getElementById("vigenciaFormularioDetalle").value
                let nit_num = "860090915"        
                let datos = {
                    for_nombre,
                    fod_nombre,
                    fod_tipo,
                    fod_adjunto,
                    fod_vigencia,
                    nit_num,
                    fod_borrado:0,
                }
                await crear(datos)
                await obtenerDatosForm(document.getElementById("nombreFormularioFormularioDetalle").value)
                obtenerCantidadPaginas()
                document.getElementById("botonCerrarFormularioDetalle").click()
                document.getElementById("nombreFormularioDetalle").value = ''
                document.getElementById("tipoDetalleFormularioDetalle").value = ''
                document.getElementById("adjuntoFormularioDetalle").value = ''
                document.getElementById("vigenciaFormularioDetalle").value = ''
                document.getElementById("estadoFormularioDetalle").value = ''
                ToastInformacion.fire({ icon: 'success', html: 'Registro guardado correctamente: <b>' +fod_nombre +'</b>'})  
            },
            editarDato: async ()=>{
                let for_nombre = document.getElementById("nombreFormularioFormularioDetalle").value
                let fod_nombre = document.getElementById("nombreEditFormularioDetalle").value
                let fod_tipo = document.getElementById("tipoDetalleEditFormularioDetalle").value
                let fod_adjunto = document.getElementById("adjuntoEditFormularioDetalle").value
                let fod_vigencia = document.getElementById("vigenciaEditFormularioDetalle").value
                let fod_id = idActual.value
                let datos = {
                    fod_id,
                    for_nombre,
                    fod_nombre,
                    fod_tipo,
                    fod_adjunto,
                    fod_vigencia
                }
                await editar(datos)
                document.getElementById("botonCerrarFormularioDetalleEditarFormularioDetalle").click()
                obtenerDatos(cantidadPaginaActual.value)
                ToastInformacion.fire({ icon: 'success', html: 'Registro editado correctamente: <b>' +fod_nombre +'</b>'})  
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
.modal-footer #botonGuardarFormularioDetalle{
    background-color: #303840;
    color: white;
}
.modal-footer #botonGuardarFormularioDetalle span{
    vertical-align: middle;
    font-size: 17px;
}
</style>