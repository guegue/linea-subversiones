<template>
    <div class="img-container">
        <img src="@/assets/MachuPicchu.jpg" alt="MachuPicchu.jpg">
        <h1>Machu Picchu</h1>
    </div>
</template>

<script>
    export default {
        name: "SliderPortada",
        data(){
            return  {
                data:[
                    '<div class="contenedor"><img src="https://www.arcomountainguide.com/wp-content/uploads/2018/01/gardasee-arco-mountain-guide.jpg" alt="img1"></div>',
                    '<div class="contenedor"><img src="https://www.territorysupply.com/wp-content/uploads/2017/12/badass-mountain-names-1150x750.jpg" alt="img2"></div>',
                    '<div class="contenedor"><img src="https://cloudfront.ualberta.ca/-/media/science/news/2019/apr/canadian-mountain-network.jpg" alt="img3"></div>',
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .img-container{
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
        color: #636467;
    }
</style>