import { useStore } from 'vuex'
import {computed} from 'vue'

const useFormularioProceso = () =>{

    const store = useStore()

    const cambiarEstado = async ( data ) =>{
        const resp = await store.dispatch('formularioProceso/cambiarEstado' , data)
        return resp
    }
    const obtenerEstado = async ( data ) =>{
        const resp = await store.dispatch('formularioProceso/obtenerEstado' , data)
        return resp
    }

    return{
        cambiarEstado,
        obtenerEstado,
        datosStateFormulario: computed(() => store.getters['formularioProceso/datosState']),
    }
}

export default useFormularioProceso