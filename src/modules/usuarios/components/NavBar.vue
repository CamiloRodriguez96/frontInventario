<template>
    <div class="sideBar">        
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div id="contenerBrand" class="ms-3">
                    <a class="navbar-brand" href="#" id="empresa">Activos SAS</a> 
                </div>    
                <div id="opciones">
                    <ul class="nav justify-content-end me-3 mt-2">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 mb-1" type="search" placeholder="Buscar Proveedor" aria-label="Search">
                        </form>
                        <span @click="goRoute('ajustes')" class="material-symbols-outlined me-2">settings</span>
                        <span @click="goRoute('notificaciones')" class="material-symbols-outlined me-2">notifications_active</span>
                        <span class="material-symbols-outlined">expand_more</span>
                    </ul>  
               </div>          
            </div>
        </nav>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'

export default {

    setup(){
        const router = useRouter()

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
    background-color: white;
    box-shadow: 3px 3px #E1E3E7, -1em 0 0.3em #E1E3E7;
} 

#empresa{
    font-size: 25px;
    font-weight: bolder;

}
#opciones span{
    font-size: 30px;
    color: #64696F;
    cursor: pointer;
}
#opciones span:hover{
    font-size: 35px;
    color: black;
}

 

</style>