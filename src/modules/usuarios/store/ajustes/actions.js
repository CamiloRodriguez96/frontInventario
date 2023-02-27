import proveedorApi from '@/api/proveedorApi'

export const modificarDatos = async ({ commit } , cliente) => {
    let { data } = await proveedorApi.put('/nitCliente',{
        cliente
    })    
}

export const obtenerDatosCliente = async ({ commit }) => {
    let { data } = await proveedorApi.get('/nitCliente')
    data = data[0]
    commit('actualizarCliente',{data})  
}

export const restablecerColeres = async ({ commit } , cliente) => {
    let { data } = await proveedorApi.put('/nitCliente',{
        cliente
    })    
}

