import { useStore } from 'vuex'
import {computed} from 'vue'

const usePeriodo = () =>{

    const store = useStore()

    const obtenerDatos = async ( numeroPagina) =>{
        const resp = await store.dispatch('ingreso/obtenerDatos' , numeroPagina)
        return resp
    }
    const obtenerDatosTodos = async ( texto ) =>{
        const resp = await store.dispatch('ingreso/obtenerDatosTodos', texto )
        return resp
    }
    const obtenerDatosGetingreso = async ( texto ) =>{
        const resp = await store.dispatch('ingreso/obtenerDatosGetingreso', texto )
        return resp
    }
    const obtenerPeriodos = async ( texto ) =>{
        const resp = await store.dispatch('ingreso/obtenerPeriodos', texto )
        return resp
    }
    const obtenerId = async ( id ) =>{
        const resp = await store.dispatch('ingreso/obtenerId', id )
        return resp
    }
    const obtenerCantidadPaginas = async (texto ) =>{
        const resp = await store.dispatch('ingreso/obtenerCantidadPaginas',texto)
        return resp
    }
    const crear = async ( proceso ) =>{
        const resp = await store.dispatch('ingreso/crear', proceso)
        return resp
    }
    const editar = async ( dato ) =>{
        const resp = await store.dispatch('ingreso/editar', dato)
        return resp
    }
    const borrar = async ( proceso ) =>{
        const resp = await store.dispatch('ingreso/borrar', proceso)
        return resp
    }
    return{
        obtenerDatos,
        obtenerDatosGetingreso,
        obtenerId,
        obtenerCantidadPaginas,
        obtenerDatosTodos,
        borrar,
        crear,
        editar,
        obtenerPeriodos,
        datosState: computed(() => store.getters['ingreso/datosState']),
        datosStateingreso: computed(() => store.getters['ingreso/datosState']),
        cantidadPaginaActual: computed(() => store.getters['ingreso/cantidadPaginaActual']),
        datosCantidadPaginasState: computed(() => store.getters['ingreso/datosCantidadPaginasState']),
        datosPorId: computed(() => store.getters['ingreso/datosPorId']),
        idActual: computed(() => store.getters['ingreso/idActual']),
        dataPeriodo: computed(() => store.getters['ingreso/dataPeriodo']),
    }
}

export default usePeriodo