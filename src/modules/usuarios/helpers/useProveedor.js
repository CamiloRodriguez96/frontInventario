import { useStore } from 'vuex'
import {computed} from 'vue'

const useProveedor = () =>{

    const store = useStore()

    const obtenerDatos = async ( numeroPagina) =>{
        const resp = await store.dispatch('proveedor/obtenerDatos' , numeroPagina)
        return resp
    }
    const obtenerDatosTodos = async ( texto ) =>{
        const resp = await store.dispatch('proveedor/obtenerDatosTodos', texto )
        return resp
    }
    const obtenerId = async ( id ) =>{
        const resp = await store.dispatch('proveedor/obtenerId', id )
        return resp
    }
    const obtenerCantidadPaginas = async ( ) =>{
        const resp = await store.dispatch('proveedor/obtenerCantidadPaginas')
        return resp
    }
    const irPaginaAnterior = async ( ) =>{
        const resp = await store.dispatch('proveedor/irPaginaAnterior')
        return resp
    }
    const crear = async ( proveedor ) =>{
        const resp = await store.dispatch('proveedor/crear', proveedor)
        return resp
    }
    const editar = async ( dato ) =>{
        const resp = await store.dispatch('proveedor/editar', dato)
        return resp
    }
    const borrar = async ( proveedor ) =>{
        const resp = await store.dispatch('proveedor/borrar', proveedor)
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
        datosState: computed(() => store.getters['proveedor/datosState']),
        cantidadPaginaActual: computed(() => store.getters['proveedor/cantidadPaginaActual']),
        datosCantidadPaginasState: computed(() => store.getters['proveedor/datosCantidadPaginasState']),
        datosPorId: computed(() => store.getters['proveedor/datosPorId']),
        idActual: computed(() => store.getters['proveedor/idActual']),
    }
}

export default useProveedor