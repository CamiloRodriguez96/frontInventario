import { useStore } from 'vuex'
import {computed} from 'vue'

const useProveedor = () =>{

    const store = useStore()

    const obtenerCantidadProveedor = async () =>{
        const resp = await store.dispatch('proveedor/obtenerCantidadProveedor')
        return resp
    }
    const obtenerCantidadProveedorPendientes = async () =>{
        const resp = await store.dispatch('proveedor/obtenerCantidadProveedorPendientes')
        return resp
    }
    const obtenerCantidadProcesos = async () =>{
        const resp = await store.dispatch('proveedor/obtenerCantidadProcesos')
        return resp
    }

    return{
        obtenerCantidadProveedor,
        obtenerCantidadProveedorPendientes,
        obtenerCantidadProcesos,
        cantidadProveedores: computed(() => store.getters['proveedor/cantidadProveedores']),
        cantidadProveedoresPendientes: computed(() => store.getters['proveedor/cantidadProveedoresPendientes']),
        cantidadProcesos: computed(() => store.getters['proveedor/cantidadProcesos'])
    }
}

export default useProveedor