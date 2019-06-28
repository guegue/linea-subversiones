<template>
    <div class="img-container">
<!--        <img src="@/assets/MachuPicchu.jpg" alt="MachuPicchu.jpg">-->
        <h1>Linea de tiempo</h1>
    </div>
</template>

<script>
    export default {
        name: "SliderPortada",
        data(){
            return  {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .img-container{
        background-color: #0c182c;
        position: relative;
        width: 100%;
        height: 550px;
    }
    .img-container img{
        object-fit: cover;
        width: 100%;
        height: 550px !important;
    }

    .img-container h1{
        position: absolute;
        top: 20px;
        left: 20px;
        color: white;
    }
</style>