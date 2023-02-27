import { useStore } from 'vuex'
import {computed} from 'vue'

const useAjustes = () =>{

    const store = useStore()

    const actualizarCliente = async (cliente) =>{
        const resp = await store.dispatch('ajustes/modificarDatos',cliente)
        return resp
    }
    const restablecerColores = async (cliente) =>{
        const resp = await store.dispatch('ajustes/restablecerColores',cliente)
        return resp
    }

    const obtenerCliente = async () =>{
        const resp = await store.dispatch('ajustes/obtenerDatosCliente')
        return resp
    }

    return{
        actualizarCliente,
        obtenerCliente,
        restablecerColores,
        datosCliente: computed(() => store.getters['ajustes/datosCliente']),
        datosClienteMostrar: computed(() => store.getters['ajustes/datosClienteMostrar']),

    }
}

export default useAjustes