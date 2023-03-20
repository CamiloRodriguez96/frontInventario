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
                            <nav class="navbar navbar-expand-md bg-body-tertiary">
                                <div class="container-fluid">
                                    <button class="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse ms-3" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li scope="col" @click="goRoute('criticidad')" id="criticidad" > Criticidad</li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>  
                        </div>          
                    </div>
                </nav>
                <div id="tablas" class="col-lg-11 mt-3 ps-3">
                    <router-view></router-view>                     
                </div>
            </div>
        </div>
       </div>           
    </div>
</template>
<script>

import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue';


export default {

    setup(){

        onMounted( async() => {
        
        })
        const router = useRouter()   

        return{
            goRoute: async( param )=>{
                await router.push({name:param})
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
    border-bottom: 1px solid #e1e2e6;
    gap: 5px;
    margin-top: 10px;

}
#opciones ul li{
    cursor: pointer;
    padding-right: 5px;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    min-width: 80px;
    text-align: center;
}
#opciones ul li:hover{
    font-weight: bolder;
    -webkit-box-shadow: -1px 2px 20px 0px rgba(0,0,0,0.64);
    -moz-box-shadow: -1px 2px 20px 0px rgba(0,0,0,0.64);
    box-shadow: -1px 2px 20px 0px rgba(0,0,0,0.64);
}
.linkactivo{
    color: rgb(255, 136, 0);
    font-weight: bold;
}


</style>