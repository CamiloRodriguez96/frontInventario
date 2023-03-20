import proveedorApi from '@/api/proveedorApi'

export const verificarIngreso = async ({ commit }, datos) => {
    let opcion = "verificarCorreo";
    let { data } = await proveedorApi.post('/usuarios',{
        opcion,
        datos
    })
    commit('actualizarInformacionRegistro',{data})
}





