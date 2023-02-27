import proveedorApi from '@/api/proveedorApi'

export const cambiarEstado = async ({ commit } , form) => {
    let { data } = await proveedorApi.post('/formularioProceso',{
        "opcion" : "cambiarEstado",
        form
    })    
}

export const obtenerEstado = async ({ commit } , form) => {
    let { data } = await proveedorApi.get('/formularioProceso')
    commit('actualizarData', { data })
}
