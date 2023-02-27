import { useStore } from 'vuex'
import {computed} from 'vue'

const usePeriodo = () =>{

    const store = useStore()

    const obtenerDatos = async ( numeroPagina) =>{
        const resp = await store.dispatch('periodo/obtenerDatos' , numeroPagina)
        return resp
    }
    const obtenerDatosTodos = async ( texto ) =>{
        const resp = await store.dispatch('periodo/obtenerDatosTodos', texto )
        return resp
    }
    const obtenerPeriodos = async ( texto ) =>{
        const resp = await store.dispatch('periodo/obtenerPeriodos', texto )
        return resp
    }

    const obtenerId = async ( id ) =>{
        const resp = await store.dispatch('periodo/obtenerId', id )
        return resp
    }
    const obtenerCantidadPaginas = async ( ) =>{
        const resp = await store.dispatch('periodo/obtenerCantidadPaginas')
        return resp
    }
    const irPaginaAnterior = async ( ) =>{
        const resp = await store.dispatch('periodo/irPaginaAnterior')
        return resp
    }
    const crear = async ( proceso ) =>{
        const resp = await store.dispatch('periodo/crear', proceso)
        return resp
    }
    const editar = async ( dato ) =>{
        const resp = await store.dispatch('periodo/editar', dato)
        return resp
    }
    const borrar = async ( proceso ) =>{
        const resp = await store.dispatch('periodo/borrar', proceso)
        return resp
    }



    return{
        obtenerDatos,
        obtenerId,
        obtenerCantidadPaginas,
        irPaginaAnterior,
        obtenerDatosTodos,
        borrar,
        crear,
        editar,
        obtenerPeriodos,
        datosState: computed(() => store.getters['periodo/datosState']),
        cantidadPaginaActual: computed(() => store.getters['periodo/cantidadPaginaActual']),
        datosCantidadPaginasState: computed(() => store.getters['periodo/datosCantidadPaginasState']),
        datosPorId: computed(() => store.getters['periodo/datosPorId']),
        idActual: computed(() => store.getters['periodo/idActual']),
        dataPeriodo: computed(() => store.getters['periodo/dataPeriodo']),
    }
}

export default usePeriodo