import { createStore } from "vuex";
import proveedor from '../modules/usuarios/store/proveedor'
import ajustes from '../modules/usuarios/store/ajustes'
import proceso from '../modules/usuarios/store/proceso'
import subProceso from '../modules/usuarios/store/subProceso'
import periodo from '../modules/usuarios/store/periodo'
import formulario from '../modules/usuarios/store/formulario'
import formularioDetalle from '../modules/usuarios/store/formularioDetalle'
import formularioProceso from '../modules/usuarios/store/formularioProceso'
import proveedorVista from '../modules/proveedores/store/proveedor'

const store = createStore({
    modules:{
        proveedor,
        ajustes,
        proceso,
        subProceso,
        periodo,
        formulario,
        formularioDetalle,
        formularioProceso,
        proveedorVista
    }
})

export default store