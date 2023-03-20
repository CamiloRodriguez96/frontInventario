<template>
    <div class="menus">
        <div class="datosEmpresa">
            <div class="card">
                <h6 class="card-header">Ajustes e información general</h6>
                <div class="card-body">   
                    <div class="contenedor">
                        <form id="formularioCliente" class="row">  
                        <h4>Datos basicos</h4>
                        <div class="col-md-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">format_image_left</span></span>
                                <select class="form-select" id="tipoIdentificacion" aria-label="Floating label select example">
                                    <option selected>Tipo de identificación</option>
                                    <option value="Persona Natural">Persona Natural</option>
                                    <option value="Persona Juridica">Persona Juridica</option>
                                </select>
                            </div>
                        </div>             
                        <div class="col-md-8">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">badge</span></span>
                                <input type="text" class="form-control" placeholder="Nombre" aria-describedby="basic-addon1" id="nombre" >
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">magnify_docked</span></span>
                                <input type="text" class="form-control" placeholder="Documento" aria-describedby="basic-addon1" id="numeroDocumento">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                                <input type="text" class="form-control" placeholder="Dirección" aria-describedby="basic-addon1" id="direccion">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">store</span></span>
                                <input type="text" class="form-control" placeholder="Ciudad" aria-describedby="basic-addon1" id="ciudad">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">contact_mail</span></span>
                                <input type="text" class="form-control" placeholder="Correo" aria-describedby="basic-addon1" id="correo">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">password</span></span>
                                <input type="password" class="form-control" placeholder="Contrasena" aria-describedby="basic-addon1" id="contrasena">
                            </div>
                        </div>
                        
                        </form>
                        <div class="contenedorArchivo mt-3" >
                            <div class="botones">
                                <h5 @click="actualizar()" type="button" class="btn m-2" id="botonEditar"><span class="material-symbols-outlined">save</span>Guardar</h5>
                            </div>
                        </div>
                    </div>   
                    <div class="mb-3" id="file">
                        <input id="logo" class="form-control" type="file">                        
                    </div>                 
                </div>
            </div>
        </div> 
    </div>
</template>
<script>

import { onMounted } from 'vue'
import useAjustes from '../helpers/useAjustes'
import useAlerts from '../helpers/useAlerts'

export default {
    
    setup(){   
        const { ToastConfirmacion  } = useAlerts()
        const {obtenerCliente , datosCliente , actualizarCliente} = useAjustes()
        
        onMounted( async () => {
            await obtenerCliente()
            document.getElementById("ciudad").value = datosCliente.value[0]['ciudad']
            document.getElementById("nombre").value = datosCliente.value[0]['nombre']
            document.getElementById("contrasena").value = datosCliente.value[0]['contrasena']
            document.getElementById("correo").value = datosCliente.value[0]['correo']
            document.getElementById("direccion").value = datosCliente.value[0]['direccion']
            document.getElementById("numeroDocumento").value = datosCliente.value[0]['numeroDocumento']
            document.getElementById("tipoIdentificacion").value = datosCliente.value[0]['tipoIndentificacion']           
        })

        return{
            obtenerCliente,
            datosCliente,
            actualizarCliente,
            
            actualizar:async ()=>{
                let ciudad = document.getElementById("ciudad").value
                let nombre = document.getElementById("nombre").value
                let contrasena = document.getElementById("contrasena").value
                let correo = document.getElementById("correo").value
                let direccion = document.getElementById("direccion").value
                let numeroDocumento = document.getElementById("numeroDocumento").value
                let tipoIdentificacion = document.getElementById("tipoIdentificacion").value   
                let dato = {
                    ciudad,
                    nombre,
                    contrasena,
                    correo,
                    direccion,
                    numeroDocumento,
                    tipoIdentificacion
                }
                await actualizarCliente(dato)
            }

        }
    }
}
</script>
<style scoped>
#file input{
    display: none; 
}
.card-header{
    padding: 15px;
    font-weight: bolder;
    font-size: 13px;
    color: #697179;
}
.contenedor{
    max-width: 650px;
    padding: 10px;
}
.botones h5{
    max-width: 200px;
    width: 100%;
}
.contenedor h4{
    font-size: 12px;
    font-weight: bolder;
    margin-bottom: 15px;
    color: #65676e;
    text-align: start;
}
.contenedorArchivo{
    display: grid;
    place-content: start;
}
.contenedorArchivo span{
    vertical-align: middle;
    font-size: 17px;
}
.contenedorArchivo .btn{
    border: 1px solid #AAABAE; 
    width: 100%;   
    font-weight: bolder;
}
.contenedorArchivo #botonEditar{
    background-color: #303840;
    color: white;
}
.contenedorArchivo .btn:hover{
    -webkit-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    -moz-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
}

</style>