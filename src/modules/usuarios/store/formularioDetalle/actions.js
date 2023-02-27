import proveedorApi from '@/api/proveedorApi'

const numeroElementosPorPagina = 3

export const obtenerTodosDatos = async ({ commit } , texto) => {
    let { data } = await proveedorApi.get('/formularioDetalle')
    commit('actualizarInformacionDataGet', { data})
}
export const obtenerDatosGet = async ({ commit } , texto) => {
    let { data } = await proveedorApi.post('/formularioDetalle',{
        "opcion" : "informacionTotalForm",
        texto
    })    
    commit('actualizarInformacionDataGet', { data})
}
export const obtenerDatos = async ({ commit } , numeroPagina) => {
    let { data } = await proveedorApi.post('/formularioDetalle',{
        "opcion" : "informacionPorPagina",
        "numeroDePagina" : numeroPagina,
        numeroElementosPorPagina
    })    
    commit('actualizarInformacionData', { data, numeroPagina})
}
export const obtenerDatosTodos = async ({ commit }, texto) => {
    let { data } = await proveedorApi.post('/formularioDetalle',{
        "opcion" : "informacionTotal",
        texto,
        "numeroDePagina" : 1,
        numeroElementosPorPagina       
    })    
    commit('actualizarInformacionData', { data})
}
export const obtenerDatosForm = async ({ commit }, texto) => {
    let { data } = await proveedorApi.post('/formularioDetalle',{
        "opcion" : "informacionTotalForm",
        texto,
        "numeroDePagina" : 1,
        numeroElementosPorPagina       
    })    
    commit('actualizarInformacionData', { data})
}
export const obtenerCantidadPaginas = async ({ commit }) => {
    let { data } = await proveedorApi.post('/formularioDetalle',{
        "opcion" : "cantidadDePaginas",
        numeroElementosPorPagina
    })    
    commit('actualizarCantidadPaginas', { data })
}

export const crear = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/formularioDetalle',{
        "opcion" : "crear",
        datos
    })    
}

export const editar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.put('/formularioDetalle',{  
        datos
    })    
}

export const borrar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/formularioDetalle',{  
        "opcion" : "borrar",  
        "fod_id" : datos,
        "fod_borrado" : 1
    })    
}

export const obtenerId = async ({ commit } , id) => {
    let { data } = await proveedorApi.post('/formularioDetalle',{  
        "opcion" : "obtenerId",  
        "fod_id" : id
    })    
    commit( 'modificarDataId' , {data,id})
}
