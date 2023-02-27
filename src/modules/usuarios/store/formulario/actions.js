import proveedorApi from '@/api/proveedorApi'

const numeroElementosPorPagina = 3

export const obtenerDatosGet = async ({ commit }) => {
    let { data } = await proveedorApi.get('/formulario')    
    commit('actualizarInformacionDataGet', { data})
}

export const obtenerDatos = async ({ commit } , numeroPagina) => {
    let { data } = await proveedorApi.post('/formulario',{
        "opcion" : "informacionPorPagina",
        "numeroDePagina" : numeroPagina,
        numeroElementosPorPagina
    })    
    commit('actualizarInformacionData', { data, numeroPagina})
}
export const obtenerDatosTodos = async ({ commit }, texto) => {
    let { data } = await proveedorApi.post('/formulario',{
        "opcion" : "informacionTotal",
        texto,
        "numeroDePagina" : 1,
        numeroElementosPorPagina       
    })    
    console.log(data)
    commit('actualizarInformacionData', { data})
}
export const obtenerCantidadPaginas = async ({ commit }) => {
    let { data } = await proveedorApi.post('/formulario',{
        "opcion" : "cantidadDePaginas",
        numeroElementosPorPagina
    })    
    commit('actualizarCantidadPaginas', { data })
}

export const crear = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/formulario',{
        "opcion" : "crear",
        datos
    })    
}

export const editar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.put('/formulario',{  
        datos
    })    
}

export const borrar = async ({ commit } , datos) => {
    let { data } = await proveedorApi.post('/formulario',{  
        "opcion" : "borrar",  
        "for_id" : datos,
        "for_borrado" : 1
    })    
}

export const obtenerId = async ({ commit } , id) => {
    let { data } = await proveedorApi.post('/formulario',{  
        "opcion" : "obtenerId",  
        "for_id" : id
    })    
    commit( 'modificarDataId' , {data,id})
}

export const obtenerFormularios = async ({ commit }) => {
    let { data } = await proveedorApi.post('/formulario',{  
        "opcion" : "formularioSoloNombre"
    })    
    commit( 'actualizarFormularios' , {data})
}
