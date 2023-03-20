<template>
    <div class="navBar">        
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div id="contenerBrand" class="ms-3">
                    <a class="navbar-brand" href="#" id="empresa"></a> 
                </div>    
                <div id="opciones">
                    <ul class="nav justify-content-end me-3 mt-2">
                        <div class="items">
                            <span @click="goRoute('index')" class="material-symbols-outlined ms-3 fw-bold" id="itemNavbar" >logout</span>
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

export default {

    setup(){
        const router = useRouter()

        onMounted( async () => {
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
    
#botonNotificacion{
    background-color: transparent; border: none;
}
#numeroIcono{
    background-color: #303840;
    font-size: 8px;
}


.navBar{
    height: 47px;
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
    margin-left: 115px;
}
#opciones input{
    height: 25px;
    font-size: 10px;
}
#opciones #itemNavbar{
    font-size: 25px;
    color: #303840;
    cursor: pointer;
}
#opciones input:hover{
    -webkit-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    -moz-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
}
#opciones #itemNavbar:hover{
    border-radius: 40%;
    -webkit-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    -moz-box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
    box-shadow: 0px 0px 5px 3px rgba(148,145,148,1);
} 

</style>