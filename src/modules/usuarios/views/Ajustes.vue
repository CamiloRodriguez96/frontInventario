<template lang="">
    <div class="menus">
        <div class="datosEmpresa">
            <div class="card">
                <h5 class="card-header">Datos de la empresa - Ajustes</h5>
                <div class="card-body">   
                    <form id="formularioCliente" class="row">               
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                            <input type="text" class="form-control" placeholder="Razon Social" aria-describedby="basic-addon1" id="razonSocial" >
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">tag</span></span>
                            <input type="text" class="form-control" placeholder="Nit" aria-describedby="basic-addon1" id="nit">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">contact_mail</span></span>
                            <input type="text" class="form-control" placeholder="Dirección" aria-describedby="basic-addon1" id="direccion">
                        </div>
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">call</span></span>
                            <input type="text" class="form-control" placeholder="Telefono" aria-describedby="basic-addon1" id="telefono">
                        </div>
                        <div class="mb-3" id="file">
                            <input id="logo" class="form-control" type="file">                        
                        </div>                   
                        <div class="col-md-6">
                            <div @click="subirArchivo" id="botonSubirArchivo" class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Logo" aria-describedby="basic-addon1" disabled >
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">download</span></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="color" class="input-group mb-3">
                                <input type="text" class="form-control" aria-describedby="basic-addon1" placeholder="SideBar" disabled >
                                <span  class="input-group-text" id="basic-addon1"><input style="height:23px" id="colorSide" type="color" class="form-control form-control-color" value="#303840" title="Escoge el color"></span>                        
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="color" class="input-group mb-3">
                                <input type="text" class="form-control" aria-describedby="basic-addon1" placeholder="Letra" disabled >
                                <span  class="input-group-text" id="basic-addon1"><input style="height:23px" id="colorLetra" type="color" class="form-control form-control-color" value="#303840" title="Escoge el color"></span>                        
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="color" class="input-group mb-3">
                                <input type="text" class="form-control" aria-describedby="basic-addon1" placeholder="Fondo" disabled >
                                <span  class="input-group-text" id="basic-addon1"><input style="height:23px" id="colorFondo" type="color" class="form-control form-control-color" value="#303840" title="Escoge el color"></span>                        
                            </div>
                        </div>
                    </form>
                    <div class="contenedorArchivo mt-1" >
                        <h5 @click="guardarCliente" type="button" class="btn" id="botonEditar"><span class="material-symbols-outlined">edit</span>Guardar</h5>
                        <h5 @click="restablecerColores" type="button" class="btn" id="botonRestablecerColores"><span class="material-symbols-outlined">edit</span>Restablecer</h5>
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
        const { actualizarCliente,obtenerCliente,datosCliente ,restablecerColores} = useAjustes()        

        onMounted( async () => {
            await obtenerCliente()  
            document.getElementById("razonSocial").value = datosCliente.value['razonSocial']
            document.getElementById("nit").value = datosCliente.value['nit']
            document.getElementById("direccion").value = datosCliente.value['direccion']
            document.getElementById("telefono").value = datosCliente.value['telefono']
            document.getElementById("colorSide").value = datosCliente.value['colorSide']
            document.getElementById("colorLetra").value = datosCliente.value['colorLetra']
            document.getElementById("colorFondo").value = datosCliente.value['colorFondo']
            document.getElementById("botonEditar").style.background = datosCliente.value['colorSide']
            document.getElementById("botonEditar").style.color = datosCliente.value['colorLetra']
            
        })
        return{
            ToastConfirmacion,
            actualizarCliente,
            obtenerCliente,
            datosCliente,
            restablecerColores,
            subirArchivo: ()=>{
                document.getElementById('logo').click()
            },
            guardarCliente: async()=>{
                ToastConfirmacion.fire({
                    html: 'Se refrescara la pagina para actualizar la información. '
                }).then(async(result) => {
                        if (result.isConfirmed) {
                        let razonSocial = document.getElementById("razonSocial").value
                        let nit = document.getElementById("nit").value
                        let direccion = document.getElementById("direccion").value
                        let telefono = document.getElementById("telefono").value
                        let logo = document.getElementById("logo").files[0]
                        let colorSide = document.getElementById("colorSide").value                
                        let colorLetra = document.getElementById("colorLetra").value                
                        let colorFondo = document.getElementById("colorFondo").value                
                        let id=1
                        let cliente = {
                            id,
                            razonSocial,                    
                            nit,                    
                            direccion,                    
                            telefono,                    
                            logo,                    
                            colorSide,   
                            colorLetra, 
                            colorFondo  
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
                        let razonSocial = document.getElementById("razonSocial").value
                        let nit = document.getElementById("nit").value
                        let direccion = document.getElementById("direccion").value
                        let telefono = document.getElementById("telefono").value
                        let logo = document.getElementById("logo").files[0]
                        let colorSide =  '#303840'            
                        let colorLetra = '#AAABAE'  
                        let colorFondo = '#F5F7FA'  
                        let id=1
                        let cliente = {
                            id,
                            razonSocial,                    
                            nit,                    
                            direccion,                    
                            telefono,                    
                            logo,                    
                            colorSide,   
                            colorLetra,  
                            colorFondo 
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

.datosEmpresa{
    max-width: 500px;
}
#file input{
    display: none;    
}
.card-header{
    font-size: 18px;
    font-weight: bolder;
    text-align: start;
}
.card-body  #botonSubirArchivo{
    cursor: pointer;
}

@media screen and (max-width: 440px) {
    
    .contenedorArchivo{
        display: grid;
        place-items: end;
    }
    .card-header{
        text-align: center;
    }
}


.contenedorArchivo h5{
    width: 120px;
}
.contenedorArchivo span{
    font-size: 19px;
    font-weight: bolder;
    margin-right: 5px;
    vertical-align: middle;
    overflow-wrap: break-word; 
}
.card-body input{
    font-size: 14px;
}
.card-body #botonRestablecerColores{
    font-size: 13px;
    /* background: #303840;     */
    /* background: #e70d0d;     */
    background: #F5F7FA;    
    font-weight: bolder;
    color: #303840; 
    border: 1px solid black;
    
}
.card-body #botonEditar{
    font-size: 13px;
    background: #303840;
    font-weight: bolder;
    color: #AAABAE;  
    margin-right: 5px;   
    border: 1px solid black;  
        white-space: nowrap;

}
.card-body #botonEditar:hover{
    font-size: 14px;
    font-weight: bolder;
    margin-right: 5px;   
    color: white;
}
.card-body #botonRestablecerColores:hover{
    font-size: 14px;
    font-weight: bolder;
}


</style>