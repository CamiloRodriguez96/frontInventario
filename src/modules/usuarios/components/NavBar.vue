<template>
    <div class="sideBar">        
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
import useAjustes from '../helpers/useAjustes'

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
    
.sideBar{
    height: 55px;
    background-color: white;
    box-shadow: 3px 3px #E1E3E7, -1em 0 0.3em #E1E3E7;
} 

@media (max-width: 600px) {  
    .sideBar #contenerBrand a{
     display: none;
    }
    #buscador{
        display: none;
    }


}
.sideBar #contenerBrand a{
    font-size: 20px;
}

#empresa{
    font-size: 25px;
    font-weight: bolder;
}


#opciones input{
    height: 25px;
    font-size: 13px;
}

#opciones span{
    font-size: 23px;
    color: black;
    cursor: pointer;
}
#opciones span:hover{
    font-size: 24px;
    color: black;
}

 

</style>