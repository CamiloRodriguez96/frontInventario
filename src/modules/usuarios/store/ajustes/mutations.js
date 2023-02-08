export const actualizarCliente = (state, { data }) =>{  
    data = data[0]
    if(data.razonSocial) state.razonSocial = data.razonSocial
    if(data.nit) state.nit = data.nit
    if(data.direccion) state.direccion = data.direccion
    if(data.telefono) state.telefono = data.telefono
    if(data.logo) state.logo = data.logo
    if(data.colorSide) state.colorSide = data.colorSide
    if(data.colorLetra) state.colorLetra = data.colorLetra
    if(data.colorFondo) state.colorFondo = data.colorFondo
}
