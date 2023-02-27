import axios from "axios"

const proveedorApi = axios.create({
    // baseURL : "http://localhost/api",    
    baseURL : "http://127.0.0.1:8000/api",    
})

export default proveedorApi