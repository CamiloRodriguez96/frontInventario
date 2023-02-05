<template>
    <div>
        <div class="card mb-3">
            <div class="card-body">
            <h5 class="card-title text-center">Listado Proveedores</h5>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Proceso</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Información</th>
                        <th scope="col">Editar</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                            <td>Sodexo</td>
                            <td>Bonos</td>
                            <td>sodexo@gmail.com</td>
                            <td>I</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Reyvelt</td>
                            <td>Medicos</td>
                            <td>reyvelt@gmail.com</td>
                            <td>I</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td>Blessed</td>
                            <td>Dotación</td>
                            <td>blessed@gmail.com</td>
                            <td>I</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                        <th scope="row">1</th>
                            <td>Sodexo</td>
                            <td>Bonos</td>
                            <td>sodexo@gmail.com</td>
                            <td>I</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Reyvelt Medicina Especializada En saliud</td>
                            <td>Medicos</td>
                            <td>reyvelt@gmail.com</td>
                            <td>I</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td>Blessed</td>
                            <td>Dotación</td>
                            <td>blessed@gmail.com</td>
                            <td>I</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td>Blessed</td>
                            <td>Dotación</td>
                            <td>blessed@gmail.com</td>
                            <td>I</td>
                            <td>Edit</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            </div>    
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.card-body{
    height: 450px;    
}
.card-body h5{
    font-weight: bolder;
}
table{
    text-align: center;
}
table thead{
    background-color: #00979C;
    color: white;

}
    
</style>