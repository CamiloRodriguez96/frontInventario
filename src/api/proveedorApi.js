import axios from "axios"

const proveedorApi = axios.create({
    baseURL : "http://localhost/api"    
})

export default proveedorApi