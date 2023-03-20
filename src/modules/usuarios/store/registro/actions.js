import proveedorApi from '@/api/proveedorApi'

const numeroElementosPorPagina = 5

export const obtenerDatos = async ({ commit } , numeroPagina) => {
    let { data } = await proveedorApi.post('/producto',{
        "opcion" : "informacionTotal",
        "numeroDePagina" : numeroPagina,
        numeroElementosPorPagina,
        texto: ''
    })    
    commit('actualizarInformacionData', { data, numeroPagina})

}
export const obtenerDatosTodos = async ({ commit }, datos) => {
    let texto = datos.texto
    let numeroDePagina = datos.numeroDePagina
    
    let { data } = await proveedorApi.post('/producto',{
        "opcion" : "informacionTotal",
        texto,
        numeroDePagina,
        numeroElementosPorPagina       
    })    
    commit('actualizarInformacionData', { data , numeroPagina:datos.numeroDePagina})
}
export const obtenerDatosGetregistro = async ({ commit } , texto) => {
    let { data } = await proveedorApi.post('/producto',{
        "opcion" : "datosSoloNombre",
    })    
    commit('actualizarInformacionDataGet', { data})
}
export const obtenerCantidadPaginas = async ({ commit } , texto) => {
    let { data } = await proveedorApi.post('/producto',{
        "opcion" : "cantidadDePaginas",
        numeroElementosPorPagina,
        texto
    })    
    commit('actualizarCantidadPaginas', { data })
}

export const crear = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/producto',{
        "opcion" : "crear",
        datos
    })    
}

export const editar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.put('/producto',{  
        datos
    })    
}

export const borrar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/producto',{  
        "opcion" : "borrar",  
        "crt_id" : datos,
        "crt_estado" : 'I'
    })    
}

export const obtenerId = async ({ commit } , id) => {
    let { data } = await proveedorApi.post('/producto',{  
        "opcion" : "obtenerId",  
        "crt_id" : id
    })    
    commit( 'modificarDataId' , {data,id})
}

export const obtenerPeriodos = async ({ commit }) => {
    let { data } = await proveedorApi.post('/producto',{  
        "opcion" : "registroSoloNombre"
    })    
    commit( 'actualizarPeriodos' , {data})
}