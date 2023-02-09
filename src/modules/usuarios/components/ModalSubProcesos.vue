<template lang="">
    <div>
        <div id="botonModal">
            <button type="button" id="boton"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalSubProceso" data-bs-whatever="@mdo"><span id="boton" class="material-symbols-outlined">add</span>Adicionar</button>
        </div>

        <div class="modal fade" id="exampleModalSubProceso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Crear Sub Proceso</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre Sub Proceso" aria-describedby="basic-addon1" id="nombreSubProceso" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">mail</span></span>
                            <input type="text" class="form-control" placeholder="Nombre Proceso" aria-describedby="basic-addon1" id="procesoSubProceso">
                            <!-- <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> -->
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarSubProceso"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="guardar()" id="botonGuardarSubProceso" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Crear</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal Edit -->

        <div class="modal fade" id="exampleModalEditSubProceso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Editar Proceso</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre Proceso" aria-describedby="basic-addon1" id="nombreEditSubProceso" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">support_agent</span></span>
                            <input type="text" class="form-control" placeholder="Responsable" aria-describedby="basic-addon1" id="procesoEditSubProceso">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarSubProcesoEditarSubProceso"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="editarDato()" id="botonGuardarSubProceso" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Editar</button>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import useSubProceso from '../helpers/useSubProceso'
import useAjustes from '../helpers/useAjustes'
import useAlerts from '../helpers/useAlerts'
import { onMounted } from 'vue'

export default {

    setup(){
        const { ToastInformacion  } = useAlerts()

        const { obtenerDatos, crear , editar , idActual , cantidadPaginaActual ,obtenerCantidadPaginas } = useSubProceso()
        const { obtenerCliente, datosCliente } = useAjustes()

        onMounted( async () => {
            await obtenerCliente()
            document.querySelectorAll("#boton").forEach(element => {
                element.style.background = datosCliente.value['colorSide']
                element.style.color = datosCliente.value['colorLetra']                
            });
            document.querySelectorAll("#botonGuardarSubProceso").forEach(element => {
                element.style.background = datosCliente.value['colorSide']
                element.style.color = datosCliente.value['colorLetra']                
            });
            document.querySelectorAll("#spanBoton").forEach(element => {
                element.style.background = datosCliente.value['colorSide']
                element.style.color = datosCliente.value['colorLetra']

            });
            document.querySelectorAll("#modalTitulo").forEach(element => {
                element.style.background = datosCliente.value['colorSide']
                element.style.color = datosCliente.value['colorLetra']                
            });
            
        })

        return{
            ToastInformacion,
            idActual,
            cantidadPaginaActual,
            obtenerCantidadPaginas,
            guardar: async ()=>{
                let nombre = document.getElementById("nombreSubProceso").value
                let proceso = document.getElementById("procesoSubProceso").value
                let cliente = "860090915"        
                let datos = {
                    nombre,
                    proceso,
                    cliente
                }
                await crear(datos)
                obtenerDatos(1)
                obtenerCantidadPaginas()
                document.getElementById("botonCerrarSubProceso").click()
                document.getElementById("nombreSubProceso").value = ''
                document.getElementById("procesoSubProceso").value = ''
                ToastInformacion.fire({ icon: 'success', html: 'Registro guardado correctamente: <b>' +nombre +'</b>'})  

            },
            editarDato: async ()=>{
                let nombre = document.getElementById("nombreEditSubProceso").value
                let proceso = document.getElementById("procesoEditSubProceso").value
                let id = idActual.value
                let datos = {
                    id,
                    nombre,
                    proceso,                    
                }
                await editar(datos)
                document.getElementById("botonCerrarSubProcesoEditarSubProceso").click()
                obtenerDatos(cantidadPaginaActual.value)
                document.getElementById("nombreEditSubProceso").value = ''
                document.getElementById("procesoEditSubProceso").value = ''
                ToastInformacion.fire({ icon: 'success', html: 'Registro editado correctamente: <b>' +nombre +'</b>'})  
            }

        }
    }
    
}
</script>
<style scoped>
    
#botonModal{
    margin-bottom: 5px;
}

#botonModal span{
    color: #AAABAE;
    font-size: 12px;
    vertical-align: middle;
}
#botonModal button{
    background : #303840;
    color: #AAABAE;
    font-size: 12px;
    border: 1px solid black;
    font-weight: bolder;
}
#botonModal button:hover{
    font-size: 12.5px;    
}

#modalTitulo{
    background : #303840;
}
.modal-header .modal-title{
    color: #AAABAE;
    font-size: 16px;
}
.modal-header .modal-title span{
    color: #AAABAE;
    font-size: 23px;
    vertical-align: middle;
}

.modal-body input{
    font-size: 14px;

}
.modal-body span{
    font-size: 16px;
}
.modal-footer #botonGuardarSubProceso{
    background : #303840;
    color: #AAABAE;
    font-size: 13px;
    border: 1px solid black;   
    font-weight: bolder;
}
.modal-footer #botonGuardarSubProceso span{
    background : #303840;
    color: #AAABAE;
    font-size: 19px;
    vertical-align: middle;
}
.modal-footer #botonCerrarSubProceso{
    background : white;
    color: black;
    font-weight: bolder;
    font-size: 13px;
    border: 1px solid black;          
}
.modal-footer #botonCerrarSubProcesoEditarSubProceso{
    background : white;
    color: black;
    font-weight: bolder;
    font-size: 13px;
    border: 1px solid black;          
}

</style>