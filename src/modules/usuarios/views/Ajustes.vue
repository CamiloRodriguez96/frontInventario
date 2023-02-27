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
                                <select class="form-select" id="tipoDoc" aria-label="Floating label select example">
                                    <option selected>Tipo de identificación</option>
                                    <option value="Persona Natural">Persona Natural</option>
                                    <option value="Persona Juridica">Persona Juridica</option>
                                </select>
                            </div>
                        </div>             
                        <div class="col-md-8">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">badge</span></span>
                                <input type="text" class="form-control" placeholder="Razon social" aria-describedby="basic-addon1" id="razonSocial" >
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">magnify_docked</span></span>
                                <input type="text" class="form-control" placeholder="Numero de identificación (NIT)" aria-describedby="basic-addon1" id="nit">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">contact_mail</span></span>
                                <input type="text" class="form-control" placeholder="Dirección" aria-describedby="basic-addon1" id="direccion">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">call</span></span>
                                <input type="text" class="form-control" placeholder="Telefono" aria-describedby="basic-addon1" id="telefono">
                            </div>
                        </div>                       
                        <div class="col-md-6">
                            <div @click="subirArchivo" id="botonSubirArchivo" class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Logo de empresa" aria-describedby="basic-addon1" disabled >
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">download</span></span>
                            </div>
                        </div>
                        <h4 class="mt-4">Personalización plataforma</h4>
                        <div class="col-md-6">
                            <div id="color" class="input-group mb-3">
                                <input type="text" class="form-control" aria-describedby="basic-addon1" placeholder="Color de barra lateral" disabled >
                                <span  class="input-group-text" id="basic-addon1"><input style="height:23px" id="colorSide" type="color" class="form-control form-control-color" value="#303840" title="Escoge el color"></span>                        
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="color" class="input-group mb-3">
                                <input type="text" class="form-control" aria-describedby="basic-addon1" placeholder="Color letra" disabled >
                                <span  class="input-group-text" id="basic-addon1"><input style="height:23px" id="colorLetra" type="color" class="form-control form-control-color" value="#303840" title="Escoge el color"></span>                        
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="color" class="input-group mb-3">
                                <input type="text" class="form-control" aria-describedby="basic-addon1" placeholder="Color de fondo" disabled >
                                <span  class="input-group-text" id="basic-addon1"><input style="height:23px" id="colorFondo" type="color" class="form-control form-control-color" value="#303840" title="Escoge el color"></span>                        
                            </div>
                        </div>
                        </form>
                        <div class="contenedorArchivo mt-3" >
                            <div class="botones">
                                <h5 @click="guardarCliente" type="button" class="btn m-2" id="botonEditar"><span class="material-symbols-outlined">save</span>Guardar</h5>
                                <h5 @click="restablecerColores" type="button" class="btn m-2" id="botonRestablecerColores"><span class="material-symbols-outlined">restart_alt</span>Restablecer</h5>
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
import useAlerts from '../helpers/useAlerts'
import useAjustes from '../helpers/useAjustes'

export default {
    
    setup(){   
        const { ToastConfirmacion  } = useAlerts()
        const { actualizarCliente,obtenerCliente,datosCliente ,restablecerColores} = useAjustes()               

        onMounted( async () => {
            await obtenerCliente()
            document.getElementById("tipoDoc").value = datosCliente.value['tipoDocumento']
            document.getElementById("razonSocial").value = datosCliente.value['razonSocial']
            document.getElementById("nit").value = datosCliente.value['nit']
            document.getElementById("direccion").value = datosCliente.value['direccion']
            document.getElementById("telefono").value = datosCliente.value['telefono']
            document.getElementById("colorSide").value = datosCliente.value['colorSide']
            document.getElementById("colorLetra").value = datosCliente.value['colorLetra']
            document.getElementById("colorFondo").value = datosCliente.value['colorFondo']  
            
            // document.querySelectorAll("#botonEditar").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });             
        })

        return{
            ToastConfirmacion,
            actualizarCliente,
            obtenerCliente,
            restablecerColores,
            datosCliente,            
            subirArchivo: ()=>{
                document.getElementById('logo').click()
            },
            guardarCliente: async()=>{
                ToastConfirmacion.fire({
                    html: 'Se refrescara la pagina para actualizar la información. '
                }).then(async(result) => {
                        if (result.isConfirmed) {
                        let nit_td = document.getElementById("tipoDoc").value
                        let nit_nombre = document.getElementById("razonSocial").value
                        let nit_num = document.getElementById("nit").value
                        let nit_direccion = document.getElementById("direccion").value
                        let nit_telefono = document.getElementById("telefono").value
                        let nit_logo = document.getElementById("logo").files[0]
                        let nit_colorSide = document.getElementById("colorSide").value                
                        let nit_colorLetra = document.getElementById("colorLetra").value                
                        let nit_colorFondo = document.getElementById("colorFondo").value                
                        let nit_id=1
                        let cliente = {
                            nit_id,
                            nit_td,
                            nit_nombre,                    
                            nit_num,                    
                            nit_direccion,                    
                            nit_telefono,                    
                            nit_logo,                    
                            nit_colorSide,   
                            nit_colorLetra, 
                            nit_colorFondo,
                            nit_logo:"pendiente conexion",
                            nit_contrasena:'123'
                        }
                        await actualizarCliente(cliente)
                        window.location.reload()
                    }
                })
            },    
            restablecerColores: async()=>{
                ToastConfirmacion.fire({
                    html: 'Se refrescara la pagina para actualizar colores predeterminados. '
                }).then(async(result) => {
                    if (result.isConfirmed) {
                        let nit_td = document.getElementById("tipoDoc").value
                        let nit_nombre = document.getElementById("razonSocial").value
                        let nit_num = document.getElementById("nit").value
                        let nit_direccion = document.getElementById("direccion").value
                        let nit_telefono = document.getElementById("telefono").value
                        let nit_colorSide =  '#303840'            
                        let nit_colorLetra = '#AAABAE'  
                        let nit_colorFondo = '#F5F7FA'  
                        let nit_id=1
                        let cliente = {
                            nit_id,
                            nit_nombre,                    
                            nit_td,                    
                            nit_num,                    
                            nit_direccion,                    
                            nit_telefono,                    
                            nit_colorSide,   
                            nit_colorLetra,  
                            nit_colorFondo,
                            nit_logo:"pendiente conexion",
                            nit_contrasena:'123'
                        }
                        await actualizarCliente(cliente)
                        window.location.reload()
                    }
                })
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