<template lang="">
    <div id="sideBar">
        <div id="contenedorSide" class="compress">
            <span @click="openSideBar" id="openSidebar" class="material-symbols-outlined">menu</span>
            <div class="line"></div>
            <div class="contenedorEmpresa mb-4" >
                <img id="logoEmpresa" src="@/assets/companyB.png">
            </div>
            <div class="contenedorPerfil mt-3">
                <div class="menu">
                    <img src="@/assets/icono.png" >
                    <div id="datosPerfil">
                        <h4>Camilo Rodriguez</h4>
                        <h5>Cliente-Administrador</h5>
                    </div>
                </div>
            </div>
            <div class="contenedorBuscador mt-4">
                <div id="buscadorProveedor">
                    <input type="text" placeholder="Buscar">
                    <span class="material-symbols-outlined">search</span>
                </div>
            </div>
            <div class="line"></div>
            <h5 id="menu" class="mt-4">MENU</h5>
            <div id="options">
                <div @click="goRoute('inicio')" id="option"> <span class="material-symbols-outlined me-2">home</span> <h5>Inicio</h5></div>
                <div @click="goRoute('formulario')" id="option"> <span class="material-symbols-outlined me-2">description</span> <h5>Formularios</h5></div>
                <div @click="goRoute('proveedor')" id="option"> <span class="material-symbols-outlined me-2">clinical_notes</span> <h5>Proveedores</h5></div>
                <div @click="goRoute('usuario')" id="option"> <span class="material-symbols-outlined me-2 mb-2">manage_accounts</span> <h5>Usuarios</h5></div>
                <div class="line"></div>
            </div>

            <h5 id="menu" class="mt-4">PERFIL</h5>
            <div id="options">
                    <div @click="goRoute('cliente')" id="option"> <span class="material-symbols-outlined me-2">apartment</span> <h5>Empresa</h5></div>
                    <div @click="goRoute('ajustes')" id="option"> <span class="material-symbols-outlined me-2 mb-2">manage_accounts</span> <h5>Ajustes</h5></div>
                    <div class="line"></div>
            </div>
        </div>
    </div>

</template>
<script>
import { useRouter } from 'vue-router'

export default {
    setup(){
        const router = useRouter()
        

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
#sideBar .extend{
    background: #303840;
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
#sideBar .extend #openSidebar{
    font-size: 35px;
    margin-left: 200px;
    font-size: 30px;
    margin-top: 15px;
    color: #8A9199;
    cursor: pointer;
}
#sideBar .extend .contenedorPerfil{
    display: grid;
    place-items: center;
    cursor: pointer;

}
#sideBar .extend .contenedorPerfil .menu{
    background-color: #FFFFFF;
    height: 60px;
    width: 220px;
    border-radius: 30px;
    display: flex;
}
#sideBar .extend .contenedorPerfil .menu img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 5px;
    margin-left: 10px;
}
#sideBar .extend .contenedorPerfil .menu h4{
    font-size: 17px;
    margin-top: 10px;
}
#sideBar .extend .contenedorPerfil .menu h5{
    font-size: 15px;
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
    height: 40px;
    background-color: #272C33;
    border-radius: 10px;
}
#sideBar .extend #buscadorProveedor input{    
    background-color: #272C33;
    border: 0;
    color: #808283;
    margin-left: 15px;
    outline: none;    
}
#sideBar .extend #buscadorProveedor span{
    color: #808283;
    cursor: pointer;
}
#sideBar .extend #menu{
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
    font-size: 17px;
    color: #808283;
}
#sideBar .extend #option span{
    font-size: 25px;
    color: #808283;
}
#sideBar .extend #option:hover h5{
    color: white;
    font-weight: bolder;
}
#sideBar .extend #option:hover span{
    color: white;
    font-weight: bolder;
}
#sideBar .extend #option:hover {
    cursor: pointer;
    margin-left: 0px;
    background-color: #272C33;
}
#sideBar .extend .contenedorPerfil .menu:hover{
    border-radius: 25px;
}

#sideBar .extend #buscadorProveedor:hover {
    width: 225px;
    border-radius: 5px;
}

/* Clase Comprimida ---------------------------*/

#sideBar .compress{
    background: #303840;
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
#sideBar .compress #openSidebar{
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
#sideBar .compress .contenedorPerfil .menu{
    background-color: #FFFFFF;
    height: 60px;
    width: 80px;
    border-radius: 30px;
    display: flex;
    margin-top: -10px;
}
#sideBar .compress .contenedorPerfil .menu img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 5px;
    margin-left: 15px;
}
#sideBar .compress .contenedorPerfil .menu h4{
    display: none;
}
#sideBar .compress .contenedorPerfil .menu h5{
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
    height: 40px;
    background-color: #272C33;
    border-radius: 10px;
}
#sideBar .compress #buscadorProveedor input{    
    background-color: #272C33;
    border: 0;
    margin-left: 15px;
    outline: none;   
    width: 40px; 
    font-size: 12px;
}
#sideBar .compress #buscadorProveedor span{
    color: #808283;
    cursor: pointer;
}
#sideBar .compress #menu{
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
    font-size: 25px;
    color: #808283;
}
#sideBar .compress #option:hover span{
    color: white;
    font-weight: bolder;
}
#sideBar .compress #option:hover {
    cursor: pointer;
    background-color: #272C33;
    margin-left: 10px;
}
#sideBar .compress .contenedorPerfil .menu:hover{
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