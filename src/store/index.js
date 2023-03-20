import { createStore } from "vuex";
import ajustes from '../modules/usuarios/store/ajustes'
import registro from '../modules/usuarios/store/registro'
import ingreso from '../modules/usuarios/store/ingreso'
import usuarios from '../modules/autentication/store/autentication'

const store = createStore({
    modules:{
        ajustes,
        registro,
        ingreso,
        usuarios
    }
})

export default store