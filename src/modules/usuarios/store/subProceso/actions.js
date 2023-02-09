import proveedorApi from '@/api/proveedorApi'

const numeroElementosPorPagina = 3

export const obtenerDatos = async ({ commit } , numeroPagina) => {
    let { data } = await proveedorApi.post('/subProceso',{
        "opcion" : "informacionPorPagina",
        "numeroDePagina" : numeroPagina,
        numeroElementosPorPagina
    })    
    commit('actualizarInformacionData', { data, numeroPagina})
}
export const obtenerDatosTodos = async ({ commit }, texto) => {
    let { data } = await proveedorApi.post('/subProceso',{
        "opcion" : "informaciónTotal",
        texto,
        "numeroDePagina" : 1,
        numeroElementosPorPagina       
    })    
    commit('actualizarInformacionData', { data})
}
export const obtenerCantidadPaginas = async ({ commit }) => {
    let { data } = await proveedorApi.post('/subProceso',{
        "opcion" : "cantidadDePaginas",
        numeroElementosPorPagina
    })    
    commit('actualizarCantidadPaginas', { data })
}

export const crear = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/subProceso',{
        "opcion" : "crear",
        datos
    })    
}

export const editar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.put('/subProceso',{  
        datos
    })    
}

export const borrar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/subProceso',{  
        "opcion" : "borrar",  
        "id" : datos
    })    
}

export const obtenerId = async ({ commit } , id) => {
    let { data } = await proveedorApi.post('/subProceso',{  
        "opcion" : "obtenerId",  
        "id" : id
    })    
    commit( 'modificarDataId' , {data,id})
}

