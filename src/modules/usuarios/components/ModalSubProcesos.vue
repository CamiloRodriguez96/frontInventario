<template lang="">
    <div>
        <div id="botonModal">
            <button type="button" id="boton"  class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalSubProceso" data-bs-whatever="@mdo"><span id="boton" class="material-symbols-outlined">post_add</span>Adicionar</button>
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
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">rebase</span></span>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="procesoSubProceso">
                                <option selected>Selecciona el Proceso</option>
                                <option v-for="proceso in procesos" :key="proceso" :value="proceso.pro_nombre">{{proceso.pro_nombre}}</option>
                            </select>
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
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">rebase</span></span>
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="procesoEditSubProceso">
                                <option selected>Selecciona el Proceso</option>
                                <option v-for="proceso in procesos" :key="proceso.pro_nombre" :value="proceso.pro_nombre">{{proceso.pro_nombre}}</option>
                            </select>
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
import useAlerts from '../helpers/useAlerts'
import { onMounted } from 'vue'
import useAjustes from '../helpers/useAjustes'

export default {

    setup(){
        const { ToastInformacion  } = useAlerts()
        const { obtenerCliente, datosCliente  } = useAjustes()
        const { obtenerDatos, crear , editar , idActual , cantidadPaginaActual ,obtenerCantidadPaginas , obtenerProcesos, procesos } = useSubProceso()

        onMounted( async () => {
            await obtenerProcesos()
            // document.querySelectorAll("#boton").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
            // document.querySelectorAll("#modalTitulo").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
            // document.querySelectorAll("#botonGuardarSubProceso").forEach(element => {
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
            procesos,
            ToastInformacion,
            idActual,
            cantidadPaginaActual,
            obtenerCantidadPaginas,
            obtenerCliente,
            datosCliente,
            traer: () =>{
                console.log(procesos)
            },

            guardar: async ()=>{
                let spr_nombre = document.getElementById("nombreSubProceso").value
                let pro_nombre = document.getElementById("procesoSubProceso").value
                let nit_num = "860090915"        
                let datos = {
                    spr_nombre,
                    pro_nombre,
                    nit_num,
                    spr_borrado:0,
                }
                await crear(datos)
                obtenerDatos(1)
                obtenerCantidadPaginas()
                document.getElementById("botonCerrarSubProceso").click()
                document.getElementById("nombreSubProceso").value = ''
                document.getElementById("procesoSubProceso").value = 'Selecciona el Proceso'
                ToastInformacion.fire({ icon: 'success', html: 'Registro guardado correctamente: <b>' +spr_nombre +'</b>'})  

            },
            editarDato: async ()=>{
                let spr_nombre = document.getElementById("nombreEditSubProceso").value
                let pro_nombre = document.getElementById("procesoEditSubProceso").value
                let spr_id = idActual.value
                let datos = {
                    spr_id,
                    spr_nombre,
                    pro_nombre,     
                    spr_borrado:0,
                    // consecutivo:0               
                }
                await editar(datos)
                document.getElementById("botonCerrarSubProcesoEditarSubProceso").click()
                obtenerDatos(cantidadPaginaActual.value)
                document.getElementById("nombreEditSubProceso").value = ''
                document.getElementById("procesoEditSubProceso").value = ''
                ToastInformacion.fire({ icon: 'success', html: 'Registro editado correctamente: <b>' +spr_nombre +'</b>'})  
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
.modal-footer #botonGuardarSubProceso{
    background-color: #303840;
    color: white;
}
.modal-footer #botonGuardarSubProceso span{
    vertical-align: middle;
    font-size: 17px;
}

</style>