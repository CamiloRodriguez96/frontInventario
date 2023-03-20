export const actualizarDatosVerificacion = (state, {data }) =>{    
    if(data) state.datosVerificacion = data
}
export const actualzarToken = (state, { data }) =>{    
    if(data) state.token = data
}
export const actualizarInformacionRegistro = (state, { data }) =>{    
    state.informacionRegistro = data
}
