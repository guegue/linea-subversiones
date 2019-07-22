<template>
    <!-- Footer-->
    <footer id="Footer" class="clearfix">
        <!-- Footer copyright-->
        <div class="footer_copy">
            <div class="container">
                <div class="column one">

                 
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                year: null,
            }
        },
        mounted() {
            this.year = new Date().getFullYear();
        }
    }
</script>

<style scoped>

</style>
