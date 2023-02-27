import { useStore } from 'vuex'
import {computed} from 'vue'

const useFormulario = () =>{

    const store = useStore()

    const obtenerDatos = async ( numeroPagina) =>{
        const resp = await store.dispatch('formulario/obtenerDatos' , numeroPagina)
        return resp
    }
    const obtenerDatosTodos = async ( texto ) =>{
        const resp = await store.dispatch('formulario/obtenerDatosTodos', texto )
        return resp
    }
    const obtenerDatosGet = async ( texto ) =>{
        const resp = await store.dispatch('formulario/obtenerDatosGet', texto )
        return resp
    }

    const obtenerId = async ( id ) =>{
        const resp = await store.dispatch('formulario/obtenerId', id )
        return resp
    }
    const obtenerCantidadPaginas = async ( ) =>{
        const resp = await store.dispatch('formulario/obtenerCantidadPaginas')
        return resp
    }
    const irPaginaAnterior = async ( ) =>{
        const resp = await store.dispatch('formulario/irPaginaAnterior')
        return resp
    }
    const crear = async ( proceso ) =>{
        const resp = await store.dispatch('formulario/crear', proceso)
        return resp
    }
    const editar = async ( dato ) =>{
        const resp = await store.dispatch('formulario/editar', dato)
        return resp
    }
    const borrar = async ( proceso ) =>{
        const resp = await store.dispatch('formulario/borrar', proceso)
        return resp
    }
    const obtenerFormularios = async ( proceso ) =>{
        const resp = await store.dispatch('formulario/obtenerFormularios', proceso)        
        return resp   
    }

    return{
        obtenerDatos,
        obtenerId,
        obtenerCantidadPaginas,
        irPaginaAnterior,
        obtenerDatosTodos,
        obtenerFormularios,
        obtenerDatosGet,
        borrar,
        crear,
        editar,
        datosState: computed(() => store.getters['formulario/datosState']),
        cantidadPaginaActual: computed(() => store.getters['formulario/cantidadPaginaActual']),
        datosCantidadPaginasState: computed(() => store.getters['formulario/datosCantidadPaginasState']),
        datosPorId: computed(() => store.getters['formulario/datosPorId']),
        idActual: computed(() => store.getters['formulario/idActual']),
        formularios: computed(() => store.getters['formulario/formularios']),
    }
}

export default useFormulario