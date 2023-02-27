import { useStore } from 'vuex'
import {computed} from 'vue'

const useProveedorVista = () =>{

    const store = useStore()

    const obtenerDatosProveedor = async (token) =>{
        const resp = await store.dispatch('proveedorVista/obtenerDatosProveedor',token)
        return resp
    }

    const guardarDatosProveedor = async (token) =>{
        const resp = await store.dispatch('proveedorVista/guardarDatosProveedor',token)
        return resp
    }

    const guardarFormulario = async (datos) =>{
        const resp = await store.dispatch('proveedorVista/guardarFormulario',datos)
        return resp
    }

    const obtenerDatosProveedorFormulario = async (datos) =>{
        const resp = await store.dispatch('proveedorVista/obtenerDatosProveedorFormulario',datos)
        return resp
    }

    return{
        obtenerDatosProveedor,
        guardarFormulario,
        obtenerDatosProveedorFormulario,
        guardarDatosProveedor,
        dataProveedores: computed(() => store.getters['proveedorVista/dataProveedores']),
        dataProveedoresFormulario: computed(() => store.getters['proveedorVista/dataProveedoresFormulario']),

    }
}

export default useProveedorVista