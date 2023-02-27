export const actualizarInformacionData = ( state , {data,numeroPagina }) =>{
    if(numeroPagina) state.paginaActual = numeroPagina
    if(data) state.data = data
}
export const modificarDataId = ( state , {data,id}) =>{
    if(id) state.id = id   
    if(data) state.dataId = data   
}
export const actualizarCantidadPaginas = ( state , {data }) =>{
    if(data) state.cantidadPaginas = data
    state.paginaActual = 1
}
export const actualizarProcesosActual = ( state , {data }) =>{
    if(data) state.procesos = data
}

export const actualizarSubProcesos = ( state , {data }) =>{
    if(data) state.nombres = data

}