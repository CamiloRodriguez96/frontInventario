import proveedorApi from '@/api/proveedorApi'

export const modificarDatos = async ({ commit } , cliente) => {
    let { data } = await proveedorApi.put('/usuarios',{
        cliente
    })    
}

export const obtenerDatosCliente = async ({ commit }) => {
    let { data } = await proveedorApi.get('/usuarios')
    commit('actualizarCliente',{data}) 
}


