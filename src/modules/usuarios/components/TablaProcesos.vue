<template>
    <div id="contenedorTitulo">
        <h4 id="tituloTabla">Información de Procesos</h4>    
    </div>
    <div id="buscador">
        <div id="elementos">
            <ModalProcesos id="modalAdicionar"></ModalProcesos>
            <input @keyup="obtenerDatosTodos(busquedaTexto.texto)" v-model="busquedaTexto.texto" type="text" placeholder="Buscar...">
            <button @click="obtenerDatosTodos(busquedaTexto.texto)"  class="btn" id="boton" > Buscar </button>
        </div>
    </div>
    <div id="table" class="table-md mt-1">
        <table class="table">
            <thead>
                <tr id="titulosTabla">
                <th class="estaticoTitulo" scope="col">Id</th>
                <th class="estaticoTitulo2" scope="col">Editar</th>
                <th class="normal" scope="col">Nombre</th>
                <th class="normal" scope="col">Responsable</th>
                <th class="normal" scope="col">Correo</th>
                <th class="normal" scope="col">Borrar</th>
                </tr>
            </thead>
            <tbody v-if="cantidadPaginaActual">
                <tr id="letraTabla" v-for="datos in datosState" :key="datos.id">
                    <td class="estatico"> {{ datos.id }} </td>
                    <td id="botonEditarFila" @click="traerIdEditar(datos.id)" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" data-bs-whatever="@mdo"><span class="material-symbols-outlined">edit</span> </td>
                    <td class="normal">{{  datos.nombre }}</td>
                    <td class="normal">{{  datos.responsable }}</td>
                    <td class="normal">{{  datos.correoResponsable }}</td>
                    <td @click="borrarDato(datos.id)" class="normal"><span class="material-symbols-outlined text-danger">DELETE</span></td>
                </tr>         
            </tbody>
        </table>
    </div> 
    <div id="paginacion" class="mt-2">        
        <h6> Página {{ cantidadPaginaActual }} de {{ datosCantidadPaginasState  }}</h6>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-if="cantidadPaginaActual != 1" @click="irPaginaAnterior" class="page-item"><a class="page-link" href="#"><span class="material-symbols-outlined">arrow_back_ios</span></a></li>
                <li @click="obtenerDatos(1)" class="page-item "><a class="page-link" href="#">1</a></li>
                <li v-if="cantidadPaginaActual != datosCantidadPaginasState && cantidadPaginaActual != 1 " @click="obtenerDatos(cantidadPaginaActual)" class="page-item"><a class="page-link" href="#">{{cantidadPaginaActual}}</a></li>
                <li @click="obtenerDatos(datosCantidadPaginasState)" class="page-item"><a class="page-link" href="#">{{datosCantidadPaginasState}}</a></li>
                <li v-if="cantidadPaginaActual != datosCantidadPaginasState" @click="irPaginaSiguiente" class="page-item"><a class="page-link" href="#"><span class="material-symbols-outlined">arrow_forward_ios</span></a></li>
            </ul>
        </nav>
    </div>
    
    
    
</template>
<script>
import useProceso from '../helpers/useProceso'
import { onMounted,reactive,defineAsyncComponent } from 'vue'
import useAjustes from '../helpers/useAjustes'

export default {   
    components:{
        ModalProcesos: defineAsyncComponent(() => import('../components/ModalProcesos.vue')),

    },
    setup(){ 
        const { obtenerCliente, datosCliente } = useAjustes()
        const {obtenerDatos , datosState , obtenerCantidadPaginas , datosCantidadPaginasState , irPaginaAnterior , cantidadPaginaActual , obtenerDatosTodos , borrar , obtenerId , datosPorId} = useProceso()
        const busquedaTexto = reactive({
            texto : ''
        })

        onMounted( async () => {    
            await obtenerCliente()
            document.getElementById("titulosTabla").style.background = datosCliente.value['colorSide']
            document.getElementById("titulosTabla").style.color = datosCliente.value['colorLetra']
            document.querySelectorAll("#boton").forEach(element => {
                element.style.background = datosCliente.value['colorSide']
                element.style.color = datosCliente.value['colorLetra']
            });
            document.querySelectorAll(".estaticoTitulo").forEach(element => {
                element.style.background = datosCliente.value['colorSide']
                element.style.color = datosCliente.value['colorLetra']
            });
            document.querySelectorAll(".estaticoTitulo2").forEach(element => {
                element.style.background = datosCliente.value['colorSide']
                element.style.color = datosCliente.value['colorLetra']
            });
            obtenerDatos(1)
            obtenerCantidadPaginas()
        })



        return  {
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
                await borrar(dato)    
                obtenerDatos(1)  
            },
            traerIdEditar: async( dato )=>{
                await obtenerId(dato)                
                document.getElementById("nombreEdit").value = datosPorId.value[0]['nombre']
                document.getElementById("responsableEdit").value = datosPorId.value[0]['responsable']
                document.getElementById("correoResponsableEdit").value = datosPorId.value[0]['correoResponsable']
            },
        }
    }
    
}
</script>
<style scoped> 
#contenedorTitulo{
    width: 170px;
}

#tituloTabla{
    font-size: 15px;
    font-weight: bolder;
    border-bottom: 1px solid rgb(194, 191, 191);
    
}

#modalAdicionar{
    margin-right: 5px;
}


@media screen and (min-width: 440px) {
    #elementos{
        display: flex;
    }
}

#elementos #boton{
    border: 1px solid black;
}

#buscador input{
    color: #303840;
    font-size: 12px;
    text-align: center;
    border: 1px solid #a8acb1;
    height: 30px;
    max-width: 95px;
}
#buscador button{
    color: #AAABAE;
    background: #303840;
    font-size: 12px;
    text-align: center;
    margin-left: 5px;
    font-weight: bolder;
    height: 30px;
}
#buscador button:hover{
    font-size: 13px;
}
#buscador input:hover{
    font-size: 13px;
}

table > tbody:empty:before {
    content: 'No existen registros...';
    position: absolute;
    font-size: 12px;
    left: 30px;
}

#table{    
    overflow-x: auto;
    border: 1px solid #a8acb1;
    border-radius: 5px; 
    -webkit-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);   
    min-height: 235px;
}

#table::-webkit-scrollbar{
    height: 11px;
    background-color: rgb(224, 224, 224);
}

#table::-webkit-scrollbar-thumb{
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
    margin-bottom: 50px;        
}
#table::-webkit-scrollbar-thumb:hover{
    background-color: rgb(201, 197, 197);
}
#paginacion{
    display: grid;
    place-items: center;
}
#paginacion ul{    
    overflow-x: auto;
}
#paginacion ul a{
    color: black;
    font-size: 12px;
}
#paginacion ul span{
    color: black;
    font-size: 10px;
    vertical-align: middle;
}

#paginacion h6{
    color: black;
    font-size: 12px;
    margin-bottom: 0px;
}
table thead tr{
    background: #303840;
    color: #AAABAE;
    font-size: 13px;
    text-align: center;
    justify-content: center;
}

table tbody tr{
    font-size: 12px;
    height: 60px;
    vertical-align: middle;

}
table tbody #botonEditarFila{
    color: darkorange;
    text-align: center;
}

table tbody tr span{
    cursor: pointer;    
}
table thead tr .estaticoTitulo{
    background: #303840;
    color: #AAABAE;
    font-size: 13px;
    text-align: center;
    position: sticky;
    left: 0;    
    min-width: 50px;
}
table thead tr .estaticoTitulo2{
    background: #303840;
    color: #AAABAE;
    font-size: 13px;
    text-align: center;
    position: sticky;
    left: 50px; 
    min-width: 50px;   
}

table tbody tr .normal{
    color: #303840;
    max-width: 130px;
    height: 20px;  
    text-align: center;  
}
table tbody tr .estatico{
    color: #303840;
    min-width: 50px;
    height: 20px;
    position: sticky;
    left: 0;    
    background-color: white;
    text-align: center;

}
table tbody tr .estatico2{
    color: #303840;
    min-width: 50px;
    height: 20px;
    position: sticky;
    left: 50px;   
    background-color: white;
    text-align: center;

}

</style>