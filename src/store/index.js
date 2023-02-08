import { createStore } from "vuex";
import proveedor from '../modules/usuarios/store/proveedor'
import ajustes from '../modules/usuarios/store/ajustes'
import proceso from '../modules/usuarios/store/proceso'

const store = createStore({
    modules:{
        proveedor,
        ajustes,
        proceso
    }
})

export default store