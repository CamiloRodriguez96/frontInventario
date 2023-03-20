import { useStore } from 'vuex'
import {computed} from 'vue'

const usePeriodo = () =>{

    const store = useStore()

    const obtenerDatos = async ( numeroPagina) =>{
        const resp = await store.dispatch('criticidad/obtenerDatos' , numeroPagina)
        return resp
    }
    const obtenerDatosTodos = async ( texto ) =>{
        const resp = await store.dispatch('criticidad/obtenerDatosTodos', texto )
        return resp
    }
    const obtenerDatosGetCriticidad = async ( texto ) =>{
        const resp = await store.dispatch('criticidad/obtenerDatosGetCriticidad', texto )
        return resp
    }
    const obtenerPeriodos = async ( texto ) =>{
        const resp = await store.dispatch('criticidad/obtenerPeriodos', texto )
        return resp
    }

    const obtenerId = async ( id ) =>{
        const resp = await store.dispatch('criticidad/obtenerId', id )
        return resp
    }
    const obtenerCantidadPaginas = async (texto ) =>{
        const resp = await store.dispatch('criticidad/obtenerCantidadPaginas',texto)
        return resp
    }
    const irPaginaAnterior = async ( ) =>{
        const resp = await store.dispatch('criticidad/irPaginaAnterior')
        return resp
    }
    const crear = async ( proceso ) =>{
        const resp = await store.dispatch('criticidad/crear', proceso)
        return resp
    }
    const editar = async ( dato ) =>{
        const resp = await store.dispatch('criticidad/editar', dato)
        return resp
    }
    const borrar = async ( proceso ) =>{
        const resp = await store.dispatch('criticidad/borrar', proceso)
        return resp
    }



    return{
        obtenerDatos,
        obtenerDatosGetCriticidad,
        obtenerId,
        obtenerCantidadPaginas,
        irPaginaAnterior,
        obtenerDatosTodos,
        borrar,
        crear,
        editar,
        obtenerPeriodos,
        datosState: computed(() => store.getters['criticidad/datosState']),
        datosStateCriticidad: computed(() => store.getters['criticidad/datosState']),
        cantidadPaginaActual: computed(() => store.getters['criticidad/cantidadPaginaActual']),
        datosCantidadPaginasState: computed(() => store.getters['criticidad/datosCantidadPaginasState']),
        datosPorId: computed(() => store.getters['criticidad/datosPorId']),
        idActual: computed(() => store.getters['criticidad/idActual']),
        dataPeriodo: computed(() => store.getters['criticidad/dataPeriodo']),
    }
}

export default usePeriodo