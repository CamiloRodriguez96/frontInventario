<template lang="">
    <div class="menus">
        <div id="card">        
            <div class="card">
                <h5 class="card-header" >Formularios proveedor</h5>
                <div class="card-body">
                    <div class="accordion" id="accordionExample">
                        <h5 class="mt-2 ms-1 mb-3">Por favor selecciona el periodo al cual deseas realizar la parametrización:</h5>
                        <select @click="vallidar" class="form-select form-select-sm mb-4" aria-label=".form-select-sm example" id="procesoSubProceso">
                                <option selected>Selecciona el proceso</option>
                                <option v-for="per in dataPeriodo" :key="per.per_nombre" :value="per.per_nombre">{{per.per_nombre}}</option>
                        </select>
                        
                        <div v-for="periodo in dataPeriodo" :key="periodo.per_nombre" class="mb-3" >
                            <div v-if="periodo.per_nombre == periodoElegido.nombre">
                                <h4 id="textoPorFormulario"></h4>
                                <h5 class="ms-2 mb-4 ">La siguiente información se presenta con base a los formularios parametrizados para el año  <strong id="anoSeleccionada"> {{ periodo.per_nombre }} </strong> </h5>
                                <div class="accordion-item" v-for="formulario in datosState" :key="formulario.for_id">
                                    <h2 class="accordion-header" :id="formulario.for_id">
                                    <button @click="cambiarTrue(formulario.for_nombre)" class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#Dato'+formulario.for_id+periodo.per_nombre" aria-expanded="true" aria-controls="collapseOne" id="periodosPorFormulario"> {{ formulario.for_nombre }}
                                    </button>
                                    </h2>
                                    <div :id="'Dato'+formulario.for_id+periodo.per_nombre" class="accordion-collapse collapse" :aria-labelledby="formulario.id" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <h5 id="detalleCarta" class="mb-4 mt-3"> <strong style="font-size:12px"> Detalle del formulario : </strong>  {{ formulario.for_detalle }}</h5>
                                            <div id="table" class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr id="titulosTablaFormularioDetalle">
                                                            <th class="estaticoTitulo" scope="col">Proceso</th>
                                                            <th class="estaticoTitulo" scope="col">Sub Proceso</th>
                                                            <th id="letraTabla" v-for="formularioDetalle in datosStateForm" :key="formularioDetalle.fod_nombre">{{formularioDetalle.fod_nombre}}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>                                                
                                                        <tr id="letraTabla" v-for="subProceso in datosStateFormSub" :key="datosStateFormSub.id">
                                                            <td class="normal">{{  subProceso.pro_nombre }}</td>
                                                            <td class="normal">{{  subProceso.spr_nombre }}</td>
                                                            <td v-for="formularioDetalle in datosStateForm" :key="formularioDetalle.fod_nombre" ><input type="checkbox" @click="checkId( formulario.for_nombre, subProceso.pro_nombre, subProceso.spr_nombre ,  formularioDetalle.fod_nombre , periodo.per_nombre)" :id="formulario.for_nombre+subProceso.pro_nombre+subProceso.spr_nombre +  formularioDetalle.fod_nombre + periodo.per_nombre"></td>
                                                        </tr>         
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
       </div>           
    </div>
</template>
<script>

import useFormulario from '../helpers/useFormulario';
import useSubProceso from '../helpers/useSubProceso';
import useFormularioProceso from '../helpers/useFormularioProceso';
import useFormularioDetalle from '../helpers/useFormularioDetalle';
import usePeriodo from '../helpers/usePeriodo';
import { onMounted, reactive } from 'vue';

export default {
    setup(){
        
        onMounted( async() => {
            await obtenerDatosGet()
            await obtenerSubProcesos()
            await obtenerEstado()
            await obtenerPeriodos()
            
        })
        let periodoElegido = reactive({
            nombre : ''
        })

        let formularioEn = []
        const { datosState, obtenerDatosGet } = useFormulario()
        const { cambiarEstado , obtenerEstado , datosStateFormulario} = useFormularioProceso()
        const { obtenerSubProcesos , datosStateFormSub } = useSubProceso()
        const { obtenerDatosGetForm , datosStateForm } = useFormularioDetalle()
        const { obtenerPeriodos , dataPeriodo } = usePeriodo()

        
        return{
            datosState,
            obtenerDatosGet,
            datosStateForm,
            obtenerDatosGetForm,
            obtenerSubProcesos,
            datosStateFormSub,
            cambiarEstado,
            formularioEn,
            obtenerEstado,
            obtenerPeriodos,
            dataPeriodo,
            periodoElegido,

            checkId: ( for_nombre , pro_nombre , spr_nombre, fod_nombre , per_nombre) =>{
                formularioEn.push({ for_nombre, pro_nombre , spr_nombre , fod_nombre , per_nombre })
                cambiarEstado(formularioEn)
                formularioEn = []                
            },

            cambiarTrue: async( dato) =>{     
                await obtenerDatosGetForm(dato) 
                let nuevoObjeto = []
                datosStateFormulario.value.forEach(element =>{
                    if(element.fop_estado === 0){
                        nuevoObjeto.push(element)
                    }
                }) 
                nuevoObjeto.forEach(encontrar =>{
                    let check = document.getElementById(encontrar.for_nombre+encontrar.pro_nombre+encontrar.spr_nombre+encontrar.fod_nombre + encontrar.per_nombre)
                    if (check == null) return
                    check.checked = true
                })   
                await obtenerEstado()         
            },
            vallidar: ()=>{
                periodoElegido.nombre = document.getElementById('procesoSubProceso').value
            }


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
.accordion #periodo{
    font-size: 11px;
    margin: 10px;   
}
.accordion select{
    max-width: 300px;
    font-size: 11px;
    font-weight: bolder;
    margin-bottom: 15px;
    color: #65676e;
    text-align: start;
    padding: 5px;
}
#textoPorFormulario{
    border-top: 2px solid #e9e9ec;
    margin-bottom: 15px;
}
#periodosPorFormulario{
    background-color: white;
    color: black;
    font-size: 12px;
    font-weight: bolder;
}
#anoSeleccionada{
    font-size: 12px;
}
.accordion-item{
    max-width: 1000px;
}

#table{     
    margin-top: 25px;
    margin-bottom: 20px;
    text-align: center;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    -moz-box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    max-height: 400px;
    overflow: auto;
}
.table thead th{
    top: 0;
    position: sticky;   
    z-index: 0; 
    background: white;
    -webkit-box-shadow: inset 0px -28px 98px -104px rgba(0,0,0,1);
    -moz-box-shadow: inset 0px -28px 98px -104px rgba(0,0,0,1);
    box-shadow: inset 0px -28px 98px -104px rgba(0,0,0,1);
}

#table::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

#table::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

#table::-webkit-scrollbar-thumb {
  background-color: #d8d3d3;
  border-radius: 5px;
}


.table thead tr th{
    font-size: 13px;
    font-weight: bolder;
    height: 40px;
    vertical-align: middle;
    min-width: 80px;
}

.table span{
    font-size: 20px;
    cursor: pointer;
}
.table tbody tr{
    height: 15px;
    vertical-align: middle;
    color: #808591;
}
.table tbody tr td{
    font-size: 12px;
}


</style>