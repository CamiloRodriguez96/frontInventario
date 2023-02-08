<template lang="">
    <div>
        <div id="botonModal">
            <button type="button" id="boton"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><span id="boton" class="material-symbols-outlined">add</span>Adicionar</button>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" id="modalTitulo">
                    <h1 class="modal-title" id="modalTitulo"><span id="modalTitulo" class="material-symbols-outlined">memory</span>Crear Proceso</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formulario" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">account_tree</span></span>
                            <input type="text" class="form-control" placeholder="Nombre Proceso" aria-describedby="basic-addon1" id="nombre" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">support_agent</span></span>
                            <input type="text" class="form-control" placeholder="Responsable" aria-describedby="basic-addon1" id="responsable">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">mail</span></span>
                            <input type="text" class="form-control" placeholder="Correo" aria-describedby="basic-addon1" id="correoResponsable">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrar"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="guardar()" id="botonGuardar" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Crear</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal Edit -->

        <div class="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <input type="text" class="form-control" placeholder="Nombre Proceso" aria-describedby="basic-addon1" id="nombreEdit" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">support_agent</span></span>
                            <input type="text" class="form-control" placeholder="Responsable" aria-describedby="basic-addon1" id="responsableEdit">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">mail</span></span>
                            <input type="text" class="form-control" placeholder="Correo" aria-describedby="basic-addon1" id="correoResponsableEdit">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="botonCerrarEditar"  type="button" class="btn" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="editarDato()" id="botonGuardar" type="button" class="btn"><span id="spanBoton" class="material-symbols-outlined">save</span>Editar</button>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import useProceso from '../helpers/useProceso'
import useAjustes from '../helpers/useAjustes'
import { onMounted } from 'vue'

export default {

    setup(){

        const { obtenerDatos, crear , editar , idActual , cantidadPaginaActual } = useProceso()
        const { obtenerCliente, datosCliente } = useAjustes()

        onMounted( async () => {
            await obtenerCliente()
            document.querySelectorAll("#boton").forEach(element => {
                element.style.background = datosCliente.value['colorSide']
                element.style.color = datosCliente.value['colorLetra']                
            });
            document.querySelectorAll("#botonGuardar").forEach(element => {
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
            idActual,
            cantidadPaginaActual,
            guardar: async ()=>{
                let nombre = document.getElementById("nombre").value
                let responsable = document.getElementById("responsable").value
                let correoResponsable = document.getElementById("correoResponsable").value    
                let cliente = "860090915"        
                let datos = {
                    nombre,
                    responsable,                    
                    correoResponsable,
                    cliente
                }
                await crear(datos)
                obtenerDatos(1)
                document.getElementById("botonCerrar").click()
            },
            editarDato: async ()=>{
                let nombre = document.getElementById("nombreEdit").value
                let responsable = document.getElementById("responsableEdit").value
                let correoResponsable = document.getElementById("correoResponsableEdit").value    
                let id = idActual.value
                let datos = {
                    id,
                    nombre,
                    responsable,                    
                    correoResponsable,
                }
                await editar(datos)
                document.getElementById("botonCerrarEditar").click()
                obtenerDatos(cantidadPaginaActual.value)
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
.modal-footer #botonGuardar{
    background : #303840;
    color: #AAABAE;
    font-size: 13px;
    border: 1px solid black;   
    font-weight: bolder;
}
.modal-footer #botonGuardar span{
    background : #303840;
    color: #AAABAE;
    font-size: 19px;
    vertical-align: middle;
}
.modal-footer #botonCerrar{
    background : white;
    color: black;
    font-weight: bolder;
    font-size: 13px;
    border: 1px solid black;          
}
.modal-footer #botonCerrarEditar{
    background : white;
    color: black;
    font-weight: bolder;
    font-size: 13px;
    border: 1px solid black;          
}

</style>