<template>
    <div id="buscador">
        <div id="elementos">
            <!-- <ModalProveedors id="modalAdicionar"></ModalProveedors> -->
            <input @keyup="obtenerDatosTodos(busquedaTexto.texto)" v-model="busquedaTexto.texto" type="text" placeholder="Buscar...">
        </div>
    </div>
    <div id="table" class="table-md mt-1">
        <table class="table">
            <thead>
                <tr id="titulosTablaProveedor">
                <th class="estaticoTitulo" scope="col">Id</th>
                <th class="normal" scope="col">Tipo Documento</th>
                <th class="normal" scope="col">Numero Documento</th>
                <th class="normal" scope="col">Nombre</th>
                <th class="normal" scope="col">Proceso</th>
                <th class="normal" scope="col">Sub Proceso</th>
                <th class="normal" scope="col">Celular</th>
                <th class="normal" scope="col">Direccion</th>
                <th class="normal" scope="col">Ciudad</th>
                </tr>
            </thead>
            <tbody v-if="cantidadPaginaActual">
                <tr id="letraTabla" v-for="datos in datosState" :key="datos.prv_id">
                    <td class="estatico"> {{ datos.prv_id }} </td>
                    <td class="normal">{{  datos.prv_td }}</td>
                    <td class="normal">{{  datos.prv_num }}</td>
                    <td class="normal">{{  datos.prv_nombre }}</td>
                    <td class="normal">{{  datos.prc_nombre }}</td>
                    <td class="normal">{{  datos.spr_nombre }}</td>
                    <td class="normal">{{  datos.prv_celular }}</td>
                    <td class="normal">{{  datos.prv_direccion }}</td>
                    <td class="normal">{{  datos.prv_ciudad }}</td>
                </tr>         
            </tbody>
        </table>
    </div> 
    <div id="paginacion" class="mt-2">        
        <h6> Página {{ cantidadPaginaActual }} de {{ datosCantidadPaginasState  }}</h6>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-if="cantidadPaginaActual != 1" @click="irPaginaAnterior" class="page-item"><a class="page-link" ><span class="material-symbols-outlined">arrow_back_ios</span></a></li>
                <li @click="obtenerDatos(1)" class="page-item "><a class="page-link" >1</a></li>
                <li v-if="cantidadPaginaActual != datosCantidadPaginasState && cantidadPaginaActual != 1 " @click="obtenerDatos(cantidadPaginaActual)" class="page-item"><a class="page-link" >{{cantidadPaginaActual}}</a></li>
                <li v-if="cantidadPaginaActual != datosCantidadPaginasState" @click="obtenerDatos(datosCantidadPaginasState)" class="page-item"><a class="page-link" >{{datosCantidadPaginasState}}</a></li>
                <li v-if="cantidadPaginaActual != datosCantidadPaginasState" @click="irPaginaSiguiente" class="page-item"><a class="page-link" ><span class="material-symbols-outlined">arrow_forward_ios</span></a></li>
            </ul>
        </nav>
    </div>    
</template>
<script>
import useProveedor from '../helpers/useProveedor'
import { onMounted,reactive,defineAsyncComponent } from 'vue'
import useAlerts from '../helpers/useAlerts'
import useSubProceso from '../helpers/useSubProceso'
import useAjustes from '../helpers/useAjustes'


export default {   
    components:{
        // ModalProveedors: defineAsyncComponent(() => import('../components/ModalProveedors.vue')),
    },
    setup(){ 

        const { obtenerCliente, datosCliente  } = useAjustes()
        const { ToastInformacion , ToastConfirmacion } = useAlerts()
        const { obtenerProveedors } = useSubProceso()
        const {obtenerDatos , datosState , obtenerCantidadPaginas , datosCantidadPaginasState , irPaginaAnterior , cantidadPaginaActual , obtenerDatosTodos , borrar , obtenerId , datosPorId} = useProveedor()
        const busquedaTexto = reactive({
            texto : ''
        })

        onMounted( async () => {   
            obtenerDatos(1)
            // document.querySelectorAll("#titulosTablaProveedor").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // }); 

            // document.querySelectorAll("#boton").forEach(element => {
            //     element.style.background = datosCliente.value['colorSide']
            //     element.style.color = datosCliente.value['colorLetra']
            // });
        })

        return  {
            ToastInformacion,
            ToastConfirmacion,
            busquedaTexto,
            obtenerId,
            obtenerDatos,
            datosState,
            obtenerCantidadPaginas,
            datosCantidadPaginasState,
            irPaginaAnterior,
            cantidadPaginaActual,
            obtenerDatosTodos,
            borrar,
            datosPorId,
            obtenerProveedors,
            obtenerCliente,
            datosCliente,

            irPaginaAnterior: () =>{
                let numeroPagina = cantidadPaginaActual.value
                if(numeroPagina>=2) numeroPagina--
                obtenerDatos(numeroPagina)
            },
            irPaginaSiguiente: () =>{
                let numeroPagina = cantidadPaginaActual.value
                let cantidadPagina = datosCantidadPaginasState.value
                if(numeroPagina>=1 && numeroPagina<cantidadPagina) numeroPagina++
                obtenerDatos(numeroPagina)
                
            },
            borrarDato: async( dato )=>{
                await obtenerId(dato)
                ToastConfirmacion.fire({
                    html: 'El registro se eliminara de forma permanente: <b>' +datosPorId.value[0]['prv_nombre'] +'</b>',
                }).then(async(result) => {
                    if (result.isConfirmed) {
                        ToastInformacion.fire({ icon: 'success', html: 'Registro eliminado: <b>' +datosPorId.value[0]['prv_nombre'] +'</b>'})
                        await borrar(dato)    
                        obtenerDatos(1)  
                        obtenerCantidadPaginas()
                        await obtenerProveedors()
                    }
                })
            },
            traerIdEditar: async( dato )=>{                    
                await obtenerId(dato)                
                document.getElementById("nombreEditProveedor").value = datosPorId.value[0]['prv_nombre']
                document.getElementById("responsableEditProveedor").value = datosPorId.value[0]['prv_responsable']
                document.getElementById("cargoEditProveedor").value = datosPorId.value[0]['prv_cargo']
                document.getElementById("celularEditProveedor").value = datosPorId.value[0]['prv_celular']
                document.getElementById("correoEditProveedor").value = datosPorId.value[0]['prv_correo']
            },
        }
    }
    
}
</script>
<style scoped> 
#table{  
    text-align: center;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    -moz-box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
}
.table thead tr th{
    font-size: 11px;
    font-weight: bolder;
    height: 40px;
    vertical-align: middle;
}
.table span{
    font-size: 20px;
    cursor: pointer;
}
.table tbody tr{
    height: 50px;
    vertical-align: middle;
    font-size: 10px;
    color: #808591;

}
#elementos{
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
}
#elementos #contenedorElemento{
    display: flex;
    flex-wrap: wrap;
}
#elementos .btn{
    border: 1px solid #AAABAE; 
    width: 200px;
    height: 30px;    
    vertical-align: middle;
    background-color: #303840;
}
#elementos .buscar{
    border: 1px solid #AAABAE;
    border-radius: 2px;
    width: 250px;
    height: 30px;
    text-align: center;
}
#elementos #elemento:hover{
    -webkit-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    -moz-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
}
#paginacion{
    display: grid;
    place-items: center;
}
#paginacion ul a{
    color: rgb(100, 100, 100);
    font-size: 12px;
    cursor: pointer;
    font-size: 10px;
}
#paginacion ul span{
    color: rgb(100, 100, 100);
    font-size: 10px;
    vertical-align: middle;
}
#paginacion h6{
    color: rgb(100, 100, 100);
    font-size: 10px;
    margin-bottom: 0px;
}
.pagination span{
    cursor: pointer;
}

#botonEditarFila{
    color: coral;
}

</style>