import proveedorApi from '@/api/proveedorApi'

const numeroElementosPorPagina = 3

export const obtenerDatos = async ({ commit } , numeroPagina) => {
    let { data } = await proveedorApi.post('/proceso',{
        "opcion" : "informacionPorPagina",
        "numeroDePagina" : numeroPagina,
        numeroElementosPorPagina
    })    
    commit('actualizarInformacionData', { data, numeroPagina})
}
export const obtenerDatosTodos = async ({ commit }, texto) => {
    let { data } = await proveedorApi.post('/proceso',{
        "opcion" : "informaciónTotal",
        texto,
        "numeroDePagina" : 1,
        numeroElementosPorPagina       
    })    
    commit('actualizarInformacionData', { data})
}
export const obtenerCantidadPaginas = async ({ commit }) => {
    let { data } = await proveedorApi.post('/proceso',{
        "opcion" : "cantidadDePaginas",
        numeroElementosPorPagina
    })    
    commit('actualizarCantidadPaginas', { data })
}

export const crear = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/proceso',{
        "opcion" : "crear",
        datos
    })    
}

export const editar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.put('/proceso',{  
        datos
    })    
}

export const borrar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/proceso',{  
        "opcion" : "borrar",  
        "id" : datos
    })    
}

export const obtenerId = async ({ commit } , id) => {
    let { data } = await proveedorApi.post('/proceso',{  
        "opcion" : "obtenerId",  
        "id" : id
    })    
    commit( 'modificarDataId' , {data,id})
}

