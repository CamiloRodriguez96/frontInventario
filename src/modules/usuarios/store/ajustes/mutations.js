export const actualizarCliente = (state, { data }) =>{  
    state.mostrar = true
    if(data.nit_td) state.tipoDocumento = data.nit_td
    if(data.nit_nombre) state.razonSocial = data.nit_nombre
    if(data.nit_num) state.nit = data.nit_num
    if(data.nit_direccion) state.direccion = data.nit_direccion
    if(data.nit_telefono) state.telefono = data.nit_telefono
    if(data.nit_logo) state.logo = data.nit_logo
    if(data.nit_colorSide) state.colorSide = data.nit_colorSide
    if(data.nit_colorLetra) state.colorLetra = data.nit_colorLetra
    if(data.nit_colorFondo) state.colorFondo = data.nit_colorFondo

}