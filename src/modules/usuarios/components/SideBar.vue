<template lang="">
    <div id="sideBar" class="sideBar shadow-lg bg-body-tertiary">
        <div id="contenedorSide" class="compress">
            <span @click="openSideBar" id="letra" class="openSidebar material-symbols-outlined" >menu</span>
            <div class="line"></div>
            <div class="contenedorEmpresa mb-3" >
                <img id="logoEmpresa" src="@/assets/companyB.png">
            </div>
            <div class="contenedorPerfil mt-3">
                <div class="menuPerfil">
                    <img src="@/assets/icono.png" >
                    <div id="datosPerfil">
                        <h4>Camilo Rodriguez</h4>
                        <h5>Cliente-Administrador</h5>
                    </div>
                </div>
            </div>
            <div class="contenedorBuscador mt-3">
                <div id="buscadorProveedor">
                    <input id="buscadorProveedorTexto" type="text" placeholder="Buscar">
                    <span class="material-symbols-outlined" >search</span>
                </div>
            </div>
            <div class="line"></div>
            <h6 id="letra" class="menu mt-5">MENU</h6>
            <div id="options">
                <div @click="goRoute('inicio')" id="option"> <span id="letra" class="material-symbols-outlined me-2">home</span> <h5 id="letra">Inicio</h5></div>
                <div @click="goRoute('formulario')" id="option"> <span id="letra" class="material-symbols-outlined me-2">description</span> <h5 id="letra">Formularios</h5></div>
                <div @click="goRoute('proveedor')" id="option"> <span id="letra" class="material-symbols-outlined me-2">clinical_notes</span> <h5 id="letra">Proveedores</h5></div>
                <div @click="goRoute('usuario')" id="option"> <span id="letra" class="material-symbols-outlined me-2 mb-2">manage_accounts</span> <h5 id="letra">Usuarios</h5></div>
                <div class="line"></div>
            </div>

            <h6 id="letra" class="menu mt-4">PERFIL</h6>
            <div id="options">
                    <div @click="goRoute('procesos')" id="option"> <span id="letra" class="material-symbols-outlined me-2">apartment</span> <h5 id="letra">Empresa</h5></div>
                    <div @click="goRoute('ajustes')" id="option"> <span id="letra" class="material-symbols-outlined me-2 mb-2">manage_accounts</span> <h5 id="letra">Ajustes</h5></div>
                    <div class="line"></div>
            </div>
        </div>
    </div>

</template>
<script>
import { useRouter } from 'vue-router'
import {onMounted} from 'vue'
import useAjustes from '../helpers/useAjustes'

export default {
    setup(){
        const router = useRouter()   
        const { obtenerCliente, datosCliente  } = useAjustes()
        
        onMounted( async() => {
            await obtenerCliente()
            // document.getElementById("sideBar").style.background = datosCliente.value['colorSide']
            // document.querySelectorAll("#letra").forEach(element => {
            //     element.style.color = datosCliente.value['colorLetra']

            // }); 
        })
        

        return{
            openSideBar: ()=>{
                let sideBar = document.getElementById("contenedorSide")
                sideBar.classList.toggle("extend")
                sideBar.classList.toggle("compress")
            },
            goRoute: ( param )=>{
                router.push({name:param})
            }

        }
    }
}
</script>
<style scoped>

/* Clase extendida */

#sideBar{
    overflow-y: auto; 
    background-color: #303840;
}
#sideBar .extend{
    width: 250px;
    height: 100vh;    
}
#sideBar .extend .contenedorEmpresa {
    display: grid;
    place-items: center;
}#sideBar .extend .contenedorEmpresa #logoEmpresa{
    width: 100px;
    height: 35px;
}
#sideBar .extend .openSidebar{
    font-size: 30px;
    margin-left: 200px;
    margin-top: 15px;
    cursor: pointer;
    color: white;    
}
#sideBar .extend .contenedorPerfil{
    display: grid;
    place-items: center;
    cursor: pointer;
}
#sideBar .extend .contenedorPerfil .menuPerfil{
    background-color: #FFFFFF;
    height: 50px;
    width: 220px;
    border-radius: 23px;
    display: flex;
}
#sideBar .extend .contenedorPerfil .menuPerfil img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 5px;
    margin-left: 10px;
}
#sideBar .extend .contenedorPerfil .menuPerfil h4{
    font-size: 11px;
    margin-top: 13px;
}
#sideBar .extend .contenedorPerfil .menuPerfil h5{
    font-size: 12px;
    margin-top: -5px;
    color: #AAABAE ;
}
#sideBar .extend .contenedorBuscador {
    display: grid;
    place-items: center;
}
#sideBar .extend #buscadorProveedor {
    display: flex;
    place-items: center;
    width: 220px;
    height: 35px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 10px;
}
#sideBar .extend #buscadorProveedor input{    
    background-color: transparent;
    border: 0;
    color: #808283;
    margin-left: 15px;
    outline: none;    
    font-size: 11px;
    margin-right: 30px;
}
#sideBar .extend #buscadorProveedor span{
    color: #808283;
    cursor: pointer;
}
#sideBar .extend .menu{
    color: #808283;
    font-weight: bolder;
    margin: 10px;
    margin-left: 20px;
}
#sideBar .extend #option {
    display: flex;
    padding: 5px;
    margin-left: 25px;
}
#sideBar .extend #option h5{
    font-size: 11px;
    color: #808283;
    margin-top: 5px;
}
#sideBar .extend #option span{
    font-size: 20px;
    color: #808283;
}
#sideBar .extend #option:hover h5{
    color: white;
    font-weight: bolder;
}
#sideBar .extend #option:hover span{
    color: white;
    font-weight: bolder;
    margin-left: 19px;
}
#sideBar .extend #option:hover {
    cursor: pointer;
    margin-left: 0px;
    background-image: linear-gradient(
      rgba(253, 253, 253, 0.15), 
      rgba(255, 255, 255, 0.15)
    );
}
#sideBar .extend .contenedorPerfil .menuPerfil:hover{
    border-radius: 25px;
}

#sideBar .extend #buscadorProveedor:hover {
    width: 225px;
    border-radius: 5px;
}

/* Clase Comprimida ---------------------------*/

#sideBar .compress{
    width: 100px;
    height: 100vh;    
}
#sideBar .compress .contenedorEmpresa {
    display: grid;
    place-items: center;
}#sideBar .compress .contenedorEmpresa #logoEmpresa{
    width: 75px;
    height: 25px;
    margin-top: 10px;
}
#sideBar .compress .openSidebar{
    margin-left: 35px;
    font-size: 30px;
    margin-top: 15px;
    color: #8A9199;
    cursor: pointer;
}
#sideBar .compress .contenedorPerfil{
    display: grid;
    place-items: center;
    cursor: pointer;
}
#sideBar .compress .contenedorPerfil .menuPerfil{
    background-color: #FFFFFF;
    height: 60px;
    width: 80px;
    border-radius: 25px;
    display: flex;
}
#sideBar .compress .contenedorPerfil .menuPerfil img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 20px;
}
#sideBar .compress .contenedorPerfil .menuPerfil h4{
    display: none;
}
#sideBar .compress .contenedorPerfil .menuPerfil h5{
    display: none;
}
#sideBar .compress .contenedorBuscador {
    display: grid;
    place-items: center;
    
}
#sideBar .compress #buscadorProveedor {
    display: flex;
    place-items: center;
    width: 80px;
    height: 35px;
    background-color: white;
    border-radius: 10px;
}
#sideBar .compress #buscadorProveedor input{    
    background: transparent; 
    border: 0;
    margin-left: 15px;
    outline: none;   
    width: 40px; 
    font-size: 10px;
}
#sideBar .compress #buscadorProveedor span{
    color: #808283;
    cursor: pointer;
}
#sideBar .compress .menu{
    color: #808283;
    font-weight: bolder;
    margin: 10px;
    margin-left: 20px;
}
#sideBar .compress #option {
    display: flex;
    padding: 5px;
    margin-left: 25px;
}
#sideBar .compress #option h5{
    display: none;
}
#sideBar .compress #option span{
    font-size: 20px;
    color: #808283;
}
#sideBar .compress #option:hover span{
    color: white;
    font-weight: bolder;
    margin-left: 19px;
}
#sideBar .compress #option:hover {
    cursor: pointer;
    background-image: linear-gradient(
      rgba(253, 253, 253, 0.15), 
      rgba(255, 255, 255, 0.15)
    );
    margin-left: 0px;
    text-align: center;
    font-size: 10px;
}

#sideBar .compress .contenedorPerfil .menuPerfil:hover{
    border-radius: 25px;
}
#sideBar .compress #buscadorProveedor:hover {
    width: 85px;
    border-radius: 5px;
}
.line{
    border-bottom: 1px transparent #4643DF;
    
}
    
</style>