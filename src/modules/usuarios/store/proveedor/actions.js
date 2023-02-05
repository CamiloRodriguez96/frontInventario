import proveedorApi from '@/api/proveedorApi'

export const obtenerCantidadProveedor = async ({ commit }) => {
    let opcion = "cantidadProveedores";
    let { data } = await proveedorApi.post('/proveedor',{
        opcion
    })
    commit('cantidadActualizarProveedores',{data})
}
export const obtenerCantidadProveedorPendientes = async ({ commit }) => {
    let opcion = "cantidadProveedoresPendientes";
    let { data } = await proveedorApi.post('/proveedor',{
        opcion
    })
    commit('cantidadActualizarProveedoresPendientes',{data})
}
export const obtenerCantidadProcesos = async ({ commit }) => {
    let opcion = "cantidadProcesos";
    let { data } = await proveedorApi.post('/proceso',{
        opcion
    })
    commit('cantidadActualizarProceso',{data})
}