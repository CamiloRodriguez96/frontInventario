import proveedorApi from '@/api/proveedorApi'

const numeroElementosPorPagina = 5

export const obtenerDatos = async ({ commit } , numeroPagina) => {
    let { data } = await proveedorApi.post('/stock',{
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
    
    let { data } = await proveedorApi.post('/stock',{
        "opcion" : "informacionTotal",
        texto,
        numeroDePagina,
        numeroElementosPorPagina       
    })    
    commit('actualizarInformacionData', { data , numeroPagina:datos.numeroDePagina})
}
export const obtenerDatosGetingreso = async ({ commit } , texto) => {
    let { data } = await proveedorApi.get('/stock')    
    commit('actualizarInformacionDataGet', { data})
}
export const obtenerCantidadPaginas = async ({ commit } , texto) => {
    let { data } = await proveedorApi.post('/stock',{
        "opcion" : "cantidadDePaginas",
        numeroElementosPorPagina,
        texto
    })    
    commit('actualizarCantidadPaginas', { data })
}

export const crear = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/stock',{
        "opcion" : "crear",
        datos
    })   
}

export const editar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.put('/stock',{  
        datos
    })    
}

export const borrar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/stock',{  
        "opcion" : "borrar",  
        "crt_id" : datos,
        "crt_estado" : 'I'
    })    
}

export const obtenerId = async ({ commit } , id) => {
    let { data } = await proveedorApi.post('/stock',{  
        "opcion" : "obtenerId",  
        "crt_id" : id
    })    
    commit( 'modificarDataId' , {data,id})
}

export const obtenerPeriodos = async ({ commit }) => {
    let { data } = await proveedorApi.post('/stock',{  
        "opcion" : "ingresoSoloNombre"
    })    
    commit( 'actualizarPeriodos' , {data})
}