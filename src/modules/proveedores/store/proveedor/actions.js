import proveedorApi from '@/api/proveedorApi'

export const obtenerDatosProveedor = async ({ commit }, prv_token) => {
    let opcion = "proveedorPorToken";
    let { data } = await proveedorApi.post('/proveedorpl',{
        opcion,
        prv_token:123
    })
    data = data[0]
    commit('actualizarDataProveedor',{data})
}

export const guardarFormulario = async ({ commit }, datos) => {
    let opcion = "guardarFormulario";
    let { data } = await proveedorApi.post('/proveedordoc',{
        opcion,
        datos
    })
}

export const guardarDatosProveedor = async ({ commit }, datos) => {
    let opcion = "guardarDatosProveedor";
    let { data } = await proveedorApi.post('/proveedorpl',{
        opcion,
        datos
    })
    commit('actualizarDataProveedor',{data})
}

export const obtenerDatosProveedorFormulario = async ({ commit }, prv_num) => {
    let opcion = "proveedorPorTokenFormulario";
    let { data } = await proveedorApi.post('/proveedordoc',{
        opcion,
        prv_num:'123',
    })
    commit('actualizarFormularioProveedor',{data})
}
