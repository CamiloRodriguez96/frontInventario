<template>
    <div id="buscador">
        <div id="elementos">
            <div id="contenedorElemento">
                <input @keyup="busquedaInformacion({numeroDePagina : 1, texto : busquedaTexto.texto})" v-model="busquedaTexto.texto" type="text" placeholder="Buscar..." id="elemento" class="buscar m-2">
            </div>
        </div>
    </div>
    <div id="table" class="table-responsive mt-1">
        <table class="table">
            <thead>
                <tr id="titulosTablaCriticidad">
                <th class="normal" scope="col">Producto</th>
                <th class="normal" scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody v-if="cantidadPaginaActual">
                <tr id="letraTabla" v-for="datos in datosState" :key="datos.id">
                    <td class="estatico"> {{ datos.producto }} </td>
                    <td class="normal">{{  datos.cantidad }}</td>
                </tr>         
            </tbody>
        </table>
    </div> 
    <div id="paginacion" class="mt-2">        
        <h6> Página {{ cantidadPaginaActual }} de {{ datosCantidadPaginasState  }}</h6>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-if="cantidadPaginaActual != 1" @click="irPaginaAnterior" class="page-item"><a class="page-link" ><span class="material-symbols-outlined">arrow_back_ios</span></a></li>
                <li @click="busquedaInformacion({numeroDePagina:1 , texto:busquedaTexto.texto})" class="page-item "><a class="page-link" >1</a></li>
                <li v-if="cantidadPaginaActual != datosCantidadPaginasState && cantidadPaginaActual != 1 " @click="busquedaInformacion({numeroDePagina : cantidadPaginaActual , texto:busquedaTexto.texto})" class="page-item"><a class="page-link" >{{cantidadPaginaActual}}</a></li>
                <li v-if="cantidadPaginaActual != datosCantidadPaginasState" @click="busquedaInformacion({numeroDePagina : datosCantidadPaginasState , texto:busquedaTexto.texto})" class="page-item"><a class="page-link" >{{datosCantidadPaginasState}}</a></li>
                <li v-if="cantidadPaginaActual != datosCantidadPaginasState" @click="irPaginaSiguiente" class="page-item"><a class="page-link" ><span class="material-symbols-outlined">arrow_forward_ios</span></a></li>
            </ul>
        </nav>
    </div>    
</template>
<script>
import useIngreso from '../helpers/useIngreso'
import { onMounted,reactive,defineAsyncComponent } from 'vue'
import useAlerts from '../helpers/useAlerts'
import useAjustes from '../helpers/useAjustes'


export default {   
    setup(){ 
        const { obtenerCliente, datosCliente  } = useAjustes()
        const { ToastInformacion , ToastConfirmacion } = useAlerts()
        const {obtenerDatos , datosState , obtenerCantidadPaginas , datosCantidadPaginasState , cantidadPaginaActual , obtenerDatosTodos} = useIngreso()
        const busquedaTexto = reactive({
            texto : ''
        })

        onMounted( async () => {    
            await obtenerDatos(1)
            await obtenerCantidadPaginas(busquedaTexto.texto)
        })
        return  {
            ToastInformacion,
            ToastConfirmacion,
            busquedaTexto,
            obtenerDatos,
            datosState,
            obtenerCantidadPaginas,
            datosCantidadPaginasState,
            cantidadPaginaActual,
            obtenerDatosTodos,
            obtenerCliente,
            datosCliente,
            irPaginaAnterior: () =>{
                let numeroPagina = cantidadPaginaActual.value
                if(numeroPagina>=2) numeroPagina--
                obtenerDatosTodos({numeroDePagina : numeroPagina, texto:busquedaTexto.texto})                
            },
            busquedaInformacion: async(numeroDePagina,texto) =>{  
                obtenerDatosTodos(numeroDePagina,texto)              
                await obtenerCantidadPaginas(busquedaTexto.texto)
            },
            irPaginaSiguiente: () =>{
                let numeroPagina = cantidadPaginaActual.value
                let cantidadPagina = datosCantidadPaginasState.value
                if(numeroPagina>=1 && numeroPagina<cantidadPagina) numeroPagina++
                obtenerDatosTodos({numeroDePagina : numeroPagina, texto:busquedaTexto.texto})
                
            },
        }
    }
    
}
</script>
<style scoped> 
#tituloFormulario{
    font-size: 13px;
    margin-left: 10px;
    margin-right: 20px;
    margin-right: 20px;
}
#table{  
    text-align: center;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    -moz-box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    max-height: 310px;
}
#table::-webkit-scrollbar{
    width: 8px;
    height: 8px;
}
#table::-webkit-scrollbar-thumb{
    background-color: rgb(194, 194, 194);
    border-radius: 15px;
}
#table::-webkit-scrollbar-track{
    background: rgb(255, 255, 255);
}
#table::-webkit-scrollbar-thumb:hover{
    background-color: rgb(71, 71, 71);
}
.table thead tr th{
    font-size: 11px;
    font-weight: bolder;
    height: 40px;
    vertical-align: middle;
    background-color: #18ebeb;
}
.table span{
    font-size: 20px;
    cursor: pointer;
}
.table tbody tr{
    max-height: 35px;
    vertical-align: middle;
    font-size: 10px;
    color: #8f9180;
}
.table tbody tr td{
    max-width: 100px;
}
.table thead{
    -webkit-box-shadow: inset 0px -28px 98px -104px rgba(0,0,0,1);
    -moz-box-shadow: inset 0px -28px 98px -104px rgba(0,0,0,1);
    box-shadow: inset 0px -28px 98px -104px rgba(0,0,0,1);
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
    max-width: 250px;
    width: 100%;
    height: 30px;    
    background-color: #303840;
}
#elementos .buscar{
    border: 1px solid #AAABAE;
    border-radius: 2px;
    max-width: 250px;
    height: 30px;
    text-align: center;
    width: 100%;
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
span:hover{
    border-radius: 50%;
    -webkit-box-shadow: -1px 2px 20px 0px rgba(0,0,0,0.64);
    -moz-box-shadow: -1px 2px 20px 0px rgba(0,0,0,0.64);
    box-shadow: -1px 2px 20px 0px rgba(0,0,0,0.64);
}
</style>