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

export const actualizarPeriodos = ( state , {data }) =>{
    if(data) state.periodo = data
}

