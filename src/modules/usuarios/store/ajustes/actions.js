import proveedorApi from '@/api/proveedorApi'

export const modificarDatos = async ({ commit } , cliente) => {
    let { data } = await proveedorApi.put('/cliente',{
        cliente
    })    
}

export const obtenerDatosCliente = async ({ commit }) => {
    let { data } = await proveedorApi.get('/cliente')
    commit('actualizarCliente',{data}) 
}

export const restablecerColeres = async ({ commit } , cliente) => {
    let { data } = await proveedorApi.put('/cliente',{
        cliente
    })    
}

