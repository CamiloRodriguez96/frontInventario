import { useStore } from 'vuex'
import {computed} from 'vue'

const useFormularioDetalle = () =>{

    const store = useStore()

    const obtenerDatos = async ( numeroPagina) =>{
        const resp = await store.dispatch('formularioDetalle/obtenerDatos' , numeroPagina)
        return resp
    }
    const obtenerDatosTodos = async ( texto ) =>{
        const resp = await store.dispatch('formularioDetalle/obtenerDatosTodos', texto )
        return resp
    }

    const obtenerDatosGetForm = async ( texto ) =>{
        const resp = await store.dispatch('formularioDetalle/obtenerDatosGet', texto )
        return resp
    }

    const obtenerDatosForm = async ( texto ) =>{
        const resp = await store.dispatch('formularioDetalle/obtenerDatosForm', texto )
        return resp
    }
    const obtenerTodosDatos = async () =>{
        const resp = await store.dispatch('formularioDetalle/obtenerTodosDatos')
        return resp
    }

    const obtenerId = async ( id ) =>{
        const resp = await store.dispatch('formularioDetalle/obtenerId', id )
        return resp
    }
    const obtenerCantidadPaginas = async ( ) =>{
        const resp = await store.dispatch('formularioDetalle/obtenerCantidadPaginas')
        return resp
    }
    const irPaginaAnterior = async ( ) =>{
        const resp = await store.dispatch('formularioDetalle/irPaginaAnterior')
        return resp
    }
    const crear = async ( proceso ) =>{
        const resp = await store.dispatch('formularioDetalle/crear', proceso)
        return resp
    }
    const editar = async ( dato ) =>{
        const resp = await store.dispatch('formularioDetalle/editar', dato)
        return resp
    }
    const borrar = async ( proceso ) =>{
        const resp = await store.dispatch('formularioDetalle/borrar', proceso)
        return resp
    }



    return{
        obtenerDatos,
        obtenerId,
        obtenerCantidadPaginas,
        obtenerDatosForm,
        irPaginaAnterior,
        obtenerDatosTodos,
        borrar,
        crear,
        editar,
        obtenerDatosGetForm,
        obtenerTodosDatos,
        datosState: computed(() => store.getters['formularioDetalle/datosState']),
        datosStateForm: computed(() => store.getters['formularioDetalle/datosState']),
        cantidadPaginaActual: computed(() => store.getters['formularioDetalle/cantidadPaginaActual']),
        datosCantidadPaginasState: computed(() => store.getters['formularioDetalle/datosCantidadPaginasState']),
        datosPorId: computed(() => store.getters['formularioDetalle/datosPorId']),
        idActual: computed(() => store.getters['formularioDetalle/idActual']),
    }
}

export default useFormularioDetalle