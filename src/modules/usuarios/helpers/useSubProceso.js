import { useStore } from 'vuex'
import {computed} from 'vue'

const useSubProceso = () =>{

    const store = useStore()

    const obtenerDatos = async ( numeroPagina) =>{
        const resp = await store.dispatch('subProceso/obtenerDatos' , numeroPagina)
        return resp
    }
    const obtenerDatosTodos = async ( texto ) =>{
        const resp = await store.dispatch('subProceso/obtenerDatosTodos', texto )
        return resp
    }

    const obtenerId = async ( id ) =>{
        const resp = await store.dispatch('subProceso/obtenerId', id )
        return resp
    }
    const obtenerCantidadPaginas = async ( ) =>{
        const resp = await store.dispatch('subProceso/obtenerCantidadPaginas')
        return resp
    }
    const irPaginaAnterior = async ( ) =>{
        const resp = await store.dispatch('subProceso/irPaginaAnterior')
        return resp
    }
    const crear = async ( proceso ) =>{
        const resp = await store.dispatch('subProceso/crear', proceso)
        return resp
    }
    const editar = async ( dato ) =>{
        const resp = await store.dispatch('subProceso/editar', dato)
        return resp
    }
    const borrar = async ( proceso ) =>{
        const resp = await store.dispatch('subProceso/borrar', proceso)
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
        datosState: computed(() => store.getters['subProceso/datosState']),
        cantidadPaginaActual: computed(() => store.getters['subProceso/cantidadPaginaActual']),
        datosCantidadPaginasState: computed(() => store.getters['subProceso/datosCantidadPaginasState']),
        datosPorId: computed(() => store.getters['subProceso/datosPorId']),
        idActual: computed(() => store.getters['subProceso/idActual']),
    }
}

export default useSubProceso