<template>
    <div class="navBar">        
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div id="contenerBrand" class="ms-3">
                    <a class="navbar-brand" href="#" id="empresa">Grupo Activos SAS</a> 
                </div>    
                <div id="opciones">
                    <ul class="nav justify-content-end me-3 mt-2">
                        <form class="d-flex" role="search">
                            <input id="buscador" class="form-control me-2 mb-1" type="search" placeholder="Buscar.." aria-label="Search">
                        </form>
                        <div class="items">
                            <span @click="goRoute('ajustes')" class="material-symbols-outlined me-2" id="iconoNav">settings</span>
                            <span @click="goRoute('notificaciones')" class="material-symbols-outlined me-2" id="iconoNav">notifications_active</span>
                            <span class="material-symbols-outlined" id="iconoNav" >expand_more</span>
                        </div>
                    </ul>  
               </div>          
            </div>
        </nav>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import useAjustes from '@/modules/usuarios/helpers/useAjustes'

export default {

    setup(){
        const router = useRouter()

        const { obtenerCliente, datosCliente } = useAjustes()

        onMounted( async () => {
            await obtenerCliente()
            document.getElementById("empresa").text = datosCliente.value['razonSocial']
        })

        return{
            goRoute: ( param )=>{
                router.push({name:param})
            }
        }
    }
    
}
</script>
<style scoped>
    
.navBar{
    height: 41px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    -moz-box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);
    box-shadow: 0px 0px 5px 1px rgba(170,171,174,1);   
} 

@media (max-width: 600px) { 
    .navBar #contenerBrand a{
     display: none;
    }
    #buscador{
        display: none;
    }
}
.navBar #contenerBrand a{
    font-size: 15px;
    font-weight: bolder;
}
#opciones input{
    height: 25px;
    font-size: 10px;
}
#opciones span{
    font-size: 20px;
    color: black;
    cursor: pointer;
}
#opciones span:hover{
    font-size: 24px;
    color: black;
} 

</style>