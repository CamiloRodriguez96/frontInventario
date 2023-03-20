import { useStore } from 'vuex'
import {computed} from 'vue'

const usePeriodo = () =>{

    const store = useStore()

    const obtenerDatos = async ( numeroPagina) =>{
        const resp = await store.dispatch('registro/obtenerDatos' , numeroPagina)
        return resp
    }
    const obtenerDatosTodos = async ( texto ) =>{
        const resp = await store.dispatch('registro/obtenerDatosTodos', texto )
        return resp
    }
    const obtenerDatosGetregistro = async ( texto ) =>{
        const resp = await store.dispatch('registro/obtenerDatosGetregistro', texto )
        return resp
    }
    const obtenerPeriodos = async ( texto ) =>{
        const resp = await store.dispatch('registro/obtenerPeriodos', texto )
        return resp
    }

    const obtenerId = async ( id ) =>{
        const resp = await store.dispatch('registro/obtenerId', id )
        return resp
    }
    const obtenerCantidadPaginas = async (texto ) =>{
        const resp = await store.dispatch('registro/obtenerCantidadPaginas',texto)
        return resp
    }
    const crear = async ( proceso ) =>{
        const resp = await store.dispatch('registro/crear', proceso)
        return resp
    }
    const editar = async ( dato ) =>{
        const resp = await store.dispatch('registro/editar', dato)
        return resp
    }
    const borrar = async ( proceso ) =>{
        const resp = await store.dispatch('registro/borrar', proceso)
        return resp
    }
    return{
        obtenerDatos,
        obtenerDatosGetregistro,
        obtenerId,
        obtenerCantidadPaginas,
        obtenerDatosTodos,
        borrar,
        crear,
        editar,
        obtenerPeriodos,
        datosState: computed(() => store.getters['registro/datosState']),
        datosStateregistro: computed(() => store.getters['registro/datosState']),
        cantidadPaginaActual: computed(() => store.getters['registro/cantidadPaginaActual']),
        datosCantidadPaginasState: computed(() => store.getters['registro/datosCantidadPaginasState']),
        datosPorId: computed(() => store.getters['registro/datosPorId']),
        idActual: computed(() => store.getters['registro/idActual']),
        dataPeriodo: computed(() => store.getters['registro/dataPeriodo']),
    }
}

export default usePeriodo