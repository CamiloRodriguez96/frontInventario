import axios from "axios"

const proveedorApi = axios.create({
    baseURL : "http://localhost/proyecto/api"
})

export default proveedorApi