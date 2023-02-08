import { useStore } from 'vuex'
import {computed} from 'vue'

const useEmpresa = () =>{

    const store = useStore()

    const obtenerDatos = async ( numeroPagina) =>{
        const resp = await store.dispatch('proceso/obtenerDatos' , numeroPagina)
        return resp
    }
    const obtenerDatosTodos = async ( texto ) =>{
        const resp = await store.dispatch('proceso/obtenerDatosTodos', texto )
        return resp
    }

    const obtenerId = async ( id ) =>{
        const resp = await store.dispatch('proceso/obtenerId', id )
        return resp
    }
    const obtenerCantidadPaginas = async ( ) =>{
        const resp = await store.dispatch('proceso/obtenerCantidadPaginas')
        return resp
    }
    const irPaginaAnterior = async ( ) =>{
        const resp = await store.dispatch('proceso/irPaginaAnterior')
        return resp
    }
    const crear = async ( proceso ) =>{
        const resp = await store.dispatch('proceso/crear', proceso)
        return resp
    }
    const editar = async ( dato ) =>{
        const resp = await store.dispatch('proceso/editar', dato)
        return resp
    }
    const borrar = async ( proceso ) =>{
        const resp = await store.dispatch('proceso/borrar', proceso)
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
        datosState: computed(() => store.getters['proceso/datosState']),
        cantidadPaginaActual: computed(() => store.getters['proceso/cantidadPaginaActual']),
        datosCantidadPaginasState: computed(() => store.getters['proceso/datosCantidadPaginasState']),
        datosPorId: computed(() => store.getters['proceso/datosPorId']),
        idActual: computed(() => store.getters['proceso/idActual']),
    }
}

export default useEmpresa