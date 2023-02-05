export const cantidadActualizarProveedores = (state, {data }) =>{    
    if(data) state.cantidadProveedores = data
}
export const cantidadActualizarProveedoresPendientes = (state, { data }) =>{    
    if(data) state.cantidadProveedorP = data
}
export const cantidadActualizarProceso = (state, {data }) =>{    
    if(data) state.cantidadProcesos = data
}