import { useStore } from 'vuex'
import {computed} from 'vue'

const useAutentication = () =>{

    const store = useStore()

    const guardarInformacionInicial = async (data) =>{
        const resp = await store.dispatch('usuarios/guardarInformacionInicial',data)
        return resp
    }
    const verificarCodigoCorreo = async (usu_codigocorreo) =>{
        const resp = await store.dispatch('usuarios/verificarCodigoCorreo',usu_codigocorreo)
        return resp
    }
    const verificarIngreso = async (datos) =>{
        const resp = await store.dispatch('usuarios/verificarIngreso',datos)
        return resp
    }
    const obtenerToken = async () =>{
        const resp = await store.dispatch('usuarios/obtenerToken')
        return resp
    }


    return{
        guardarInformacionInicial,
        verificarCodigoCorreo,
        verificarIngreso,
        obtenerToken,
        datosVerificacion: computed(() => store.getters['usuarios/datosVerificacion']),
        dataSesion: computed(() => store.getters['usuarios/dataSesion']),
        informacionRegistro: computed(() => store.getters['usuarios/informacionRegistro']),

    }
}

export default useAutentication