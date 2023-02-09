import { createStore } from "vuex";
import proveedor from '../modules/usuarios/store/proveedor'
import ajustes from '../modules/usuarios/store/ajustes'
import proceso from '../modules/usuarios/store/proceso'
import subProceso from '../modules/usuarios/store/subProceso'

const store = createStore({
    modules:{
        proveedor,
        ajustes,
        proceso,
        subProceso
    }
})

export default store