<template lang="">
    <div>
        <div id="botonModal">
            <button type="button" id="boton" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalProceso" data-bs-whatever="@mdo"><span id="boton" class="material-symbols-outlined">post_add</span>Adicionar</button>
        </div>

        <div class="modal fade" id="exampleModalProceso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Crear Proceso</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body mt-3 p-4">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre" aria-describedby="basic-addon1" id="nombreProceso" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">support_agent</span></span>
                            <input type="text" class="form-control" placeholder="Responsable" aria-describedby="basic-addon1" id="responsableProceso">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">work</span></span>
                            <input type="text" class="form-control" placeholder="Cargo" aria-describedby="basic-addon1" id="cargoProceso">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">phone</span></span>
                            <input type="number" class="form-control" placeholder="Celular" aria-describedby="basic-addon1" id="celularProceso">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">mail</span></span>
                            <input type="mail" class="form-control" placeholder="Correo" aria-describedby="basic-addon1" id="correoProceso">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarProceso"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="guardar()" id="botonGuardarProceso" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Crear</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal Edit -->

        <div class="modal fade" id="exampleModalEditProceso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Editar Proceso</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre Proceso" aria-describedby="basic-addon1" id="nombreEditProceso" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">support_agent</span></span>
                            <input type="text" class="form-control" placeholder="Responsable" aria-describedby="basic-addon1" id="responsableEditProceso">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">work</span></span>
                            <input type="text" class="form-control" placeholder="Cargo" aria-describedby="basic-addon1" id="cargoEditProceso">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">phone</span></span>
                            <input type="text" class="form-control" placeholder="Celular" aria-describedby="basic-addon1" id="celularEditProceso">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">mail</span></span>
                            <input type="text" class="form-control" placeholder="Correo" aria-describedby="basic-addon1" id="correoEditProceso">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarProcesoEditarProceso"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="editarDato()" id="botonGuardarProceso" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Editar</button>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import useProceso from '../helpers/useProceso'
import useSubProceso from '../helpers/useSubProceso'
import useAlerts from '../helpers/useAlerts'
import useAjustes from '../helpers/useAjustes'
import { onMounted } from 'vue'


export default {

    setup(){
        const { ToastInformacion  } = useAlerts()   
        const { obtenerProcesos } = useSubProceso()
        const { obtenerDatos, crear , editar , idActual , cantidadPaginaActual, obtenerCantidadPaginas } = useProceso()
        const { obtenerCliente, datosCliente  } = useAjustes()

        onMounted( async () => {    
            obtenerDatos(1)
            obtenerCantidadPaginas()
            
            // document.querySelectorAll("#boton").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
            // document.querySelectorAll("#modalTitulo").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
            // document.querySelectorAll("#botonGuardarProceso").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
            // document.querySelectorAll("#spanBoton").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
        })


        return{
            obtenerProcesos,
            ToastInformacion,
            idActual,
            cantidadPaginaActual,
            obtenerCantidadPaginas,
            obtenerCliente,
            datosCliente,
            guardar: async ()=>{
                let pro_nombre = document.getElementById("nombreProceso").value
                let pro_responsable = document.getElementById("responsableProceso").value
                let pro_cargo = document.getElementById("cargoProceso").value    
                let pro_celular = document.getElementById("celularProceso").value    
                let pro_correo = document.getElementById("correoProceso").value    
                let nit_num = "860090915"        
                let datos = {
                    pro_nombre,
                    pro_responsable,                    
                    pro_correo,
                    pro_cargo,
                    pro_celular,
                    nit_num,
                    pro_borrado:0,
                    // consecutivo:0
                }
                await crear(datos)
                obtenerDatos(1)
                obtenerCantidadPaginas()
                await obtenerProcesos()
                document.getElementById("botonCerrarProceso").click()
                document.getElementById("nombreProceso").value = ''
                document.getElementById("responsableProceso").value = ''
                document.getElementById("cargoProceso").value = '' 
                document.getElementById("celularProceso").value = '' 
                document.getElementById("correoProceso").value = '' 
                ToastInformacion.fire({ icon: 'success', html: 'Registro guardado correctamente: <b>' + pro_nombre +'</b>'})  
            },
            editarDato: async ()=>{
                let pro_nombre = document.getElementById("nombreEditProceso").value
                let pro_responsable = document.getElementById("responsableEditProceso").value
                let pro_cargo = document.getElementById("cargoEditProceso").value    
                let pro_celular = document.getElementById("celularEditProceso").value    
                let pro_correo = document.getElementById("correoEditProceso").value    
                let pro_id = idActual.value
                let datos = {
                    pro_id,
                    pro_nombre,
                    pro_responsable,                    
                    pro_correo,
                    pro_cargo,
                    pro_celular
                }
                await editar(datos)
                await obtenerProcesos()
                document.getElementById("botonCerrarProcesoEditarProceso").click()
                obtenerDatos(cantidadPaginaActual.value)
                document.getElementById("nombreEditProceso").value = ''
                document.getElementById("responsableEditProceso").value = ''
                document.getElementById("cargoEditProceso").value = ''  
                document.getElementById("celularEditProceso").value = ''  
                document.getElementById("correoEditProceso").value = ''  
                ToastInformacion.fire({ icon: 'success', html: 'Registro editado correctamente: <b>' + pro_nombre +'</b>'})  
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
.modal-footer #botonGuardarProceso{
    background-color: #303840;
    color: white;
}
.modal-footer #botonGuardarProceso span{
    vertical-align: middle;
    font-size: 17px;
}

</style>