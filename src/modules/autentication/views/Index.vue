<template lang="">
    <section class="h-100 gradient-form" id="contenedorTotal">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100" id="centrar">
                <div class="col-md-10">
                    <div class="card rounded-4 text-black m-4" id="carta">
                        <div class="row g-0">
                            <div class="col-lg-12">
                                <div class="card-body p-md-5 mx-md-4">
                                    <div class="text-center">
                                    <img src="@/assets/companyI.png"
                                        style="width: 130px;" alt="logo">
                                    <h4 class="mt-1 mb-3 pb-1"></h4>
                                    </div>
                                    <form id="formulario">
                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example11">Dirección de correo.</label>
                                        <input type="email" id="correoIngresoPlataorma" class="form-control"
                                        placeholder="correo" />
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form2Example22">Contraseña</label>
                                            <input type="password" id="contrasenaIngresoPlataorma" class="form-control" placeholder="contraseña" />
                                        </div>
                                        <div class="text-center pt-1 mb-2 pb-1" id="contendedorIngreso">
                                            <button  @click="verificarIngreso()" class="btn btn-primary btn-block mb-3" type="button">Ingresar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>
<script>
import { useRouter } from 'vue-router'
import useAutentication from '@/modules/autentication/helpers/useAutentication'
import useAlerts from '@/modules/usuarios/helpers/useAlerts'


export default {

    
    setup(){
        const router = useRouter()   
        const { verificarIngreso, dataSesion, informacionRegistro } = useAutentication()
        const { ToastAutentication  } = useAlerts()


        return{
            verificarIngreso,
            dataSesion,
            informacionRegistro,

            verificarIngreso :async() =>{
                let datos = {
                    correo : document.getElementById("correoIngresoPlataorma").value,
                    contrasena : document.getElementById("contrasenaIngresoPlataorma").value
                }
                await verificarIngreso(datos)
                switch (informacionRegistro.value) {
                    case 1:
                        router.push({name:'registro'})
                        break
                    default:
                        ToastAutentication.fire({
                        icon: 'error',
                        html: '<p style="font-size:15px; font-weight:bolder">¡Contraseña errada!</p> <p style="font-size:12px;">La contraseña ingresada se encuentra incorrecta, favor valida las credenciales ingresadas.</p>'})
                        break;
                    }
                    
            },
            goRoute: ( param )=>{
                router.push({name:param})
            }

        }
    }
    
}
</script>
<style scoped>
#contenedorTotal{
    background: #F5F7FA;    
}
#carta{
    -webkit-box-shadow: -1px 0px 12px -3px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 0px 12px -3px rgba(0,0,0,0.75);
box-shadow: -1px 0px 12px -3px rgba(0,0,0,0.75);
}
#textoInformación{
    text-align: justify ;
    color: black;
    font-size: 10.5px;
}
#tituloInformación{
    text-align: center ;
    font-weight: bolder;
    color: black;
    font-size: 12.5px;
}
#formulario label{
    font-size: 12px;
    font-weight: bolder;
}
#formulario input{
    font-size: 12px;
}
#contendedorIngreso{
    display: grid;
}
#contendedorIngreso button{
    background: rgb(250, 199, 60);
    color: black;
    border: none;
    font-size: 14px;
}
#contenedorRegistro button{
    /* border: none; */
    color: rgb(0, 0, 0);
    background: rgb(255, 238, 213);
    border: 1px solid rgb(179, 167, 167);
    height: 25px;
}
button:hover{
    -webkit-box-shadow: -1px 0px 12px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 0px 12px -3px rgba(0,0,0,0.75);
    box-shadow: -1px 0px 12px -3px rgba(0,0,0,0.75);
    font-weight: bolder;
}
.gradient-custom-2 {
    /* background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(41,61,54,1) 85%); */

    background: rgb(245,180,0);
    background: linear-gradient(90deg, rgba(245,180,0,1) 16%, rgba(237,189,57,1) 93%);
}

@media (min-width: 768px) {
    .gradient-form {
        height: 100vh !important;
    }
}

    
</style>