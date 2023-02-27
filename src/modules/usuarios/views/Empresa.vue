<template lang="">
    <div class="menus">
        <div id="card">        
            <div class="card">
            <h5 class="card-header" >Condiciones de la empresa</h5>
            <div class="card-body"></div>
            <div class="row">
                <nav class="col-md-8">
                    <div class="container-fluid">
                        <div id="opciones" enter-class="navbar-expand-md">
                            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                                <div class="container-fluid">
                                    <button class="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse ms-3" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li scope="col" @click="goRoute('procesos')" > Procesos</li>
                                        <li scope="col" @click="goRoute('periodos')" > Periodos</li>
                                        <li scope="col" @click="goRoute('subProcesos')" > Sub Procesos</li>  
                                        <li scope="col" @click="goRoute('formularioInicial')" > Formulario</li>
                                        <li scope="col" @click="goRoute('formularioDetalle')" > Detalle del Formulario</li>
                                    </ul>
                                    </div>
                                </div>
                                </nav>  
                        </div>          
                    </div>
                </nav>
                <div id="tablas" class="col-md-8 mt-3">
                    <router-view></router-view>                     
                </div>
            </div>
        </div>
       </div>           
    </div>
</template>
<script>

import { useRouter } from 'vue-router'
import useFormulario from '../helpers/useFormulario';
import useFormularioDetalle from '../helpers/useFormularioDetalle';
import { onMounted, reactive } from 'vue';


export default {

    setup(){

        onMounted( async() => {
        await obtenerFormularios()
        })
        const router = useRouter()   
        const { obtenerFormularios } = useFormulario()
        const { obtenerDatosTodos } = useFormularioDetalle()

        return{
            obtenerFormularios,
            obtenerDatosTodos,
            goRoute: ( param )=>{
                router.push({name:param})
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
#opciones ul{
    padding: 5px;
    border-bottom: 1px solid #e1e2e6;
}
#opciones ul li{
    cursor: pointer;
    margin-right: 30px;
    font-weight: bolder;
    color: #65676e;
}
#opciones ul li:hover{
    color: coral;
}



</style>