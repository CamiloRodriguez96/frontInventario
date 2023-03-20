<template>    
    <div  id="menus">
        <router-view></router-view>
    </div>
</template>
<script>


export default {

    setup(){
        
        return{
        
        }
    }
}
</script>
<style scoped>
#menus{
    background-color: #F5F7FA;
}    
.content{    
    margin-left:130px; margin-right:30px;  margin-top:25px;  
}

</style>