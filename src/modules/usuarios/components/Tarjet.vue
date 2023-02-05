<template lang="">
    <div>        
        <div class="row row-cols-1 row-cols-lg-3 g-3">
            <div class="col">
                <div class="card h-100">
                    <div id="carta" class="card-body" >
                        <div id="cartaDetalle">
                             <span class="material-symbols-outlined">production_quantity_limits</span><h5 class="card-title">Cantidad de Proveedores:</h5><h4 style=" background-color: #00979C;">{{ cantidadProveedores }}</h4>
                        </div>    
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <div id="carta" class="card-body" >
                        <div id="cartaDetalle">
                             <span class="material-symbols-outlined">folder_open</span><h5 class="card-title">Cantidad Pendientes:</h5><h4 style=" background-color: #e45e3c;">{{ cantidadProveedoresPendientes }}</h4>
                        </div>    
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <div id="carta" class="card-body" >
                        <div id="cartaDetalle">
                             <span class="material-symbols-outlined">account_tree</span><h5 class="card-title">Cantidad de procesos:</h5><h4  style=" background-color: #E4A93C;">{{cantidadProcesos}}</h4>
                        </div>    
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
import useProveedor from '../helpers/useProveedor';
import { onMounted } from 'vue';

export default {
    setup(){
        const { obtenerCantidadProveedor,cantidadProveedores,obtenerCantidadProveedorPendientes,cantidadProveedoresPendientes,cantidadProcesos, obtenerCantidadProcesos  } = useProveedor()

        onMounted(() => {
            obtenerCantidadProveedorPendientes()
            obtenerCantidadProveedor()
            obtenerCantidadProcesos()

        })

        return{
            obtenerCantidadProveedor,
            obtenerCantidadProveedorPendientes,
            obtenerCantidadProcesos,
            cantidadProveedores,
            cantidadProveedoresPendientes,
            cantidadProcesos
        }
    }
    
}
</script>
<style scoped>

#carta{
    display: grid;
    place-items: end;
}

#cartaDetalle{
    display: flex;    
}

.card-title{
    font-weight: bolder;
}

.card-body span{
    margin-right: 12px;
}

#cartaDetalle h4{
    padding: 3px;
    border-radius: 5px;   
    font-weight: bolder;
    color: white;
    font-size: 19px;
    width: 50px;
    margin-left: 10px;
    text-align: center;
}
</style>