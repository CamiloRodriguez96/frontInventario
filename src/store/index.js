import { createStore } from "vuex";
import proveedor from '../modules/usuarios/store/proveedor'

const store = createStore({
    modules:{
        proveedor
    }
})

export default store