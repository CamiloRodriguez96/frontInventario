<template>
    <div>
        <div class="card mb-3">
            <div class="card-body">
            <h5 class="card-title text-center">Proveedores por Aceptar </h5>
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Proceso</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                            <td>Sodexo</td>
                            <td>Bonos</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Blessed</td>
                            <td>Dotación</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td>Reyvelt</td>
                            <td>Medicos</td>
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
    height: 250px;    
}
.card-body h5{
    font-weight: bolder;
}

table{
    text-align: center;
}
table thead{
    background-color: #e45e3c;
    color: white;
}

    
</style>