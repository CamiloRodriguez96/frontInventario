import proveedorApi from '@/api/proveedorApi'

const numeroElementosPorPagina = 3

export const obtenerDatos = async ({ commit } , numeroPagina) => {
    let { data } = await proveedorApi.post('/proveedorpl',{
        "opcion" : "informacionPorPagina",
        "numeroDePagina" : numeroPagina,
        numeroElementosPorPagina
    })    
    commit('actualizarInformacionData', { data, numeroPagina})
}
export const obtenerDatosTodos = async ({ commit }, texto) => {
    let { data } = await proveedorApi.post('/proveedorpl',{
        "opcion" : "informacionTotal",
        texto,
        "numeroDePagina" : 1,
        numeroElementosPorPagina       
    })    
    commit('actualizarInformacionData', { data})
}
export const obtenerCantidadPaginas = async ({ commit }) => {
    let { data } = await proveedorApi.post('/proveedorpl',{
        "opcion" : "cantidadDePaginas",
        numeroElementosPorPagina
    })    
    commit('actualizarCantidadPaginas', { data })
}

export const crear = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/proveedorpl',{
        "opcion" : "crear",
        datos
    })    
}

export const editar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.put('/proveedorpl',{  
        datos
    })    
}

export const borrar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/proveedorpl',{  
        "opcion" : "borrar",  
        "pro_id" : datos,
        "pro_borrado" : 1
    })    
}

export const obtenerId = async ({ commit } , id) => {
    let { data } = await proveedorApi.post('/proveedorpl',{  
        "opcion" : "obtenerId",  
        "pro_id" : id
    })    
    commit( 'modificarDataId' , {data,id})
}

