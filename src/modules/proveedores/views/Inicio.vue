<template lang="">
    <div class="menus">
        <div class="card">
            <h5 class="card-header">Información general </h5>
            <div class="card-body">   
                <div class="contenedor">
                    <form id="formularioCliente" class="row">
                        <h4>Datos basicos</h4>
                        <div class="col-sm-3">                            
                            <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                            <input type="text" class="form-control" placeholder="Tipo Documento" aria-describedby="basic-addon1" id="tipoDocumentoProveedor">
                            </div>
                        </div>             
                        <div class="col-sm-3">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                                <input type="text" class="form-control" placeholder="Numero NIT/CC" aria-describedby="basic-addon1" id="numeroDocumentoProveedor" >
                            </div>                            
                        </div>                            
                        <div class="col-sm-6">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                                <input type="text" class="form-control" placeholder="Nombre proveedor" aria-describedby="basic-addon1" id="nombreProveedor" >
                            </div>                     
                        </div>  
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                                <input type="text" class="form-control" placeholder="Proceso" aria-describedby="basic-addon1" id="procesoProveedor" >
                            </div>                 
                        </div>    
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                                <input type="text" class="form-control" placeholder="Proceso" aria-describedby="basic-addon1" id="subProcesoProveedor" >
                            </div>                 
                        </div>    
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                                <input type="text" class="form-control" placeholder="Contrasena" aria-describedby="basic-addon1" id="contraseProveedor" >
                            </div>           
                        </div>    
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                                <input type="text" class="form-control" placeholder="Celular " aria-describedby="basic-addon1" id="celularProveedor" >
                            </div>                
                        </div>  
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                                <input type="text" class="form-control" placeholder="Ciudad" aria-describedby="basic-addon1" id="ciudadProveedor" >
                            </div>             
                        </div>   
                        <div class="col-sm-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">apartment</span></span>
                                <input type="text" class="form-control" placeholder="Direccion" aria-describedby="basic-addon1" id="direccionnProveedor" >
                            </div>              
                        </div> 
                    </form>                    
                    <div class="contenedorBotones mt-2" >
                        <div class="botones">
                            <h5 @click="guardarDatos()" type="button" class="btn" id="botonGuardarDatos"><span class="material-symbols-outlined">save</span>Guardar</h5>
                        </div>
                    </div>
                </div>                
            </div>            
        </div>

        <div class="card mt-4 mb-5">
            <h5 class="card-header">Información detallada </h5>
            <div class="card-body">   
                <div class="formularios" v-for="periodo in dataPeriodo" :key="periodo.per_nombre" >
                    <div v-for="form in formularios" :key="formularios.for_nombre" id="contenedorFormulario">
                        <h5 class="mb-3"> {{ form.for_nombre }}</h5>
                        <div class="row mb-1">
                            <div v-for="val in datosStateFormulario" :key="val.fop_estado" class="col-md-6" :id="'estadoN'+val.fop_estado" :var="val.fod_nombre + val.for_nombre+form.for_nombre">
                                <div v-if="val.fop_estado == 0 && val.for_nombre == form.for_nombre" :id="val.fod_nombre">
                                    <div v-for="data in datosState" :key="data.fod_nombre"  :id="data.fod_nombre + form.for_nombre + data.for_nombre">
                                        <div v-if="val.fod_nombre == data.fod_nombre && val.pro_nombre == dataProveedores.prc_nombre && val.spr_nombre == dataProveedores.spr_nombre && val.per_nombre == periodo.per_nombre && form.for_nombre == data.for_nombre && val.fop_estado==0">
                                            <div>
                                                <div class="row mb-3">
                                                    <label for="exampleFormControlInput1" class="col-sm-2 col-form-label" > {{ data.fod_nombre }}</label>
                                                    <div class="col-sm-10">
                                                         <input class="form-control"  :type="data.fod_tipo" :id="form.for_nombre + data.fod_nombre + periodo.per_nombre + data.fod_tipo" >
                                                         <div v-if="data.fod_tipo == 'file'" id="contenedorFecha">
                                                            <h6>Fecha de expedición:</h6>
                                                             <input type="date" name="" :id="'dateArchivo' + form.for_nombre + data.fod_nombre + periodo.per_nombre">
                                                             <a v-if="data.fod_tipo == 'file'" >Previsualizar</a>
                                                        </div>                                                        
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>                                          
                                    </div>                        
                                </div> 
                                <div v-else>
                                    <h4 id="elementNotView"></h4>
                                </div>
                            </div>   
                            <h4></h4>  
                        </div>               
                    </div>       
                    <div class="contenedorBotones mt-2" >
                        <div class="botones">
                            <h5 @click="guardarInformacion(periodo.per_nombre)" type="button" class="btn" id="botonGuardarDatos"><span class="material-symbols-outlined">save</span>Guardar</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>               
                
    </div>
</template>
<script>

import { onMounted} from 'vue';
import useFormularioProceso from '@/modules/usuarios/helpers/useFormularioProceso'
import useFormulario from '@/modules/usuarios/helpers/useFormulario'
import useFormularioDetalle from '@/modules/usuarios/helpers/useFormularioDetalle'
import usePeriodo from '@/modules/usuarios/helpers/usePeriodo'
import useProveedorVista from '@/modules/proveedores/helpers/useProveedorVista'


export default {

    setup(){
        const borrar = () =>{
            document.querySelectorAll("#estadoN1").forEach(e=>{
                e.remove()                
            })
            document.querySelectorAll("#elementNotView").forEach(e=>{
                e.parentNode.parentNode.remove()                
            })            
        }
        const { obtenerDatosProveedor, dataProveedores , guardarFormulario , obtenerDatosProveedorFormulario,dataProveedoresFormulario , guardarDatosProveedor} = useProveedorVista()
        const { obtenerEstado , datosStateFormulario } = useFormularioProceso()
        const { obtenerFormularios , formularios } = useFormulario()
        const { obtenerTodosDatos , datosState } = useFormularioDetalle()
        const { obtenerPeriodos , dataPeriodo } = usePeriodo()

        onMounted( async() => {
            await obtenerEstado()
            await obtenerFormularios()
            await obtenerTodosDatos()
            await obtenerDatosProveedor()
            await obtenerDatosProveedor('token')
            await obtenerDatosProveedorFormulario('123')
            await obtenerPeriodos()
            borrar()            
            document.getElementById("tipoDocumentoProveedor").value = dataProveedores.value['prv_td']
            document.getElementById("numeroDocumentoProveedor").value = dataProveedores.value['prv_num']
            document.getElementById("nombreProveedor").value = dataProveedores.value['prv_nombre']
            document.getElementById("procesoProveedor").value = dataProveedores.value['prc_nombre']
            document.getElementById("subProcesoProveedor").value = dataProveedores.value['spr_nombre']
            document.getElementById("contraseProveedor").value = dataProveedores.value['prv_contrasena']
            document.getElementById("celularProveedor").value = dataProveedores.value['prv_celular']
            document.getElementById("direccionnProveedor").value = dataProveedores.value['prv_direccion']
            document.getElementById("ciudadProveedor").value = dataProveedores.value['prv_ciudad']  
            formularios.value.forEach(element=>{
                datosState.value.forEach(e=>{  
                    dataPeriodo.value.forEach(p=>{
                        let dato = document.getElementById(element.for_nombre+e.fod_nombre+p.per_nombre + e.fod_tipo)
                        if(dato == null) { return }
                        dataProveedoresFormulario.value.forEach(f=>{
                            f.prd_doc.forEach(pr=>{
                                if(element.for_nombre+e.fod_nombre + p.per_nombre + e.fod_tipo == pr.for_nombre+pr.fod_nombre+f.per_nombre+ pr.fod_tipo){
                                    if(e.fod_tipo == 'file'){
                                        if( pr['fecha_doc'] == null) return
                                        document.getElementById('dateArchivo'+element.for_nombre+e.fod_nombre +f.per_nombre ).value = pr['fecha_doc']
                                    }else{
                                        dato.value = pr['data']
                                    }
                                }
                            })
                        })

                    })                
                })
            })
        })

        return{
            obtenerEstado,
            datosStateFormulario,
            obtenerFormularios,
            formularios,
            obtenerTodosDatos,
            datosState,
            guardarFormulario,
            obtenerDatosProveedorFormulario,
            dataProveedoresFormulario,
            dataProveedores,
            guardarDatosProveedor,
            dataPeriodo,
            borrar,

            guardarInformacion: ( periodo ) =>{
                let docs = []
                formularios.value.forEach(element=>{
                datosState.value.forEach(e=>{  
                    dataPeriodo.value.forEach(p=>{
                        let dato = document.getElementById(element.for_nombre+e.fod_nombre+p.per_nombre + e.fod_tipo)
                        if(dato == null) { return }
                        let fecha_doc = document.getElementById("dateArchivo"+element.for_nombre+e.fod_nombre+p.per_nombre)
                        if( fecha_doc == null) { fecha_doc = 'No aplica' }
                        if(periodo == p.per_nombre){
                            docs.push({
                                for_nombre : element.for_nombre,
                                fod_nombre : e.fod_nombre,
                                data : dato.value,
                                fecha_doc : fecha_doc.value,
                                fod_tipo : e.fod_tipo
                            })
                        }
                    })                
                })
            })
                let datos = {
                    prd_doc: docs,
                    prv_num: 123,
                    per_nombre : periodo,
                    nit_num:'860090915'
                }
                guardarFormulario(datos)
            },

            guardarDatos:()=>{
                let prv_td = document.getElementById("tipoDocumentoProveedor").value
                let prv_num = document.getElementById("numeroDocumentoProveedor").value
                let prv_nombre = document.getElementById("nombreProveedor").value
                let prc_nombre = document.getElementById("procesoProveedor").value
                let spr_nombre = document.getElementById("subProcesoProveedor").value
                let prv_contrasena = document.getElementById("contraseProveedor").value
                let prv_celular = document.getElementById("celularProveedor").value
                let prv_direccion = document.getElementById("direccionnProveedor").value
                let prv_ciudad = document.getElementById("ciudadProveedor").value

                let datos = {
                    prv_td,
                    prv_num,
                    prv_nombre,
                    prc_nombre,
                    spr_nombre,
                    prv_contrasena,
                    prv_celular,
                    prv_direccion,
                    prv_ciudad
                }
                guardarDatosProveedor(datos)
            },
        }
    }

    

}

</script>
<style scoped>
.card-header{
    padding: 15px;
    font-weight: bolder;
    font-size: 13px;
    color: #697179;
}
.contenedor{
    max-width: 850px;
    padding: 5px;
}
.contenedor h4{
    font-size: 14px;
    font-weight: bolder;
    margin-bottom: 15px;
    color: #65676e;
    text-align: start;
}
.contenedorBotones span{
    vertical-align: middle;
    font-size: 17px;
}
.contenedorBotones .btn{
    border: 1px solid #AAABAE; 
    font-weight: bolder;
    width: 100%;
}
.contenedorBotones #botonGuardarDatos{
    background: #303840;
    color: white;
    max-width: 200px;
    font-size: 12px;
}
.formularios h5{
    font-size: 14px;
    text-align: center;
    font-weight: bolder;
}
.formularios #contenedorFormulario{
    padding: 15px;
    border: 1px solid #AAABAE;
    border-radius: 5px;
    margin-bottom: 15px;
}
.formularios #contenedorFormulario label{
    font-size: 12px;
    font-weight: bolder;
    text-align: start;
}
.formularios #contenedorFormulario input{
    font-size: 11px;
    color: #697179;
    font-weight: bolder;
    text-align: start;
}
#contenedorFecha{
    display: flex;
    flex-wrap: wrap;
    margin-top: 2px;
}
#contenedorFecha input{
    border-color: transparent;
    margin-top: -5px;
    background-color: transparent;

}
#contenedorFecha h6{
    font-size: 12px;    
}
#contenedorFecha a{
    margin-top: -1px;
    font-size: 11px;    
    color: blue;
    cursor: pointer;
}





</style>
