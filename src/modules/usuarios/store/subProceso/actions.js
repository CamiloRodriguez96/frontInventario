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
        "opcion" : "informacionTotal",
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
        "spr_id" : datos,
        "borrado" : 1
    })    
}
export const obtenerId = async ({ commit } , id) => {
    let { data } = await proveedorApi.post('/subProceso',{  
        "opcion" : "obtenerId",  
        "spr_id" : id
    })    
    commit( 'modificarDataId' , {data,id})
}
export const obtenerProcesos = async ({ commit }) => {
    let { data } = await proveedorApi.post('/procesopl',{  
        "opcion" : "procesoSoloNombre"
    })    
    commit( 'actualizarProcesosActual' , {data})
}

export const obtenerSubProcesos = async ({ commit }) => {
    let { data } = await proveedorApi.post('/subProceso',{  
        "opcion" : "subProcesoSoloNombre"
    })    
    commit( 'actualizarSubProcesos' , {data})
}