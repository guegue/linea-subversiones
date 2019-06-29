<template>
    <!-- Footer-->
    <footer id="Footer" class="clearfix">
        <!-- Footer copyright-->
        <div class="footer_copy">
            <div class="container">
                <div class="column one">

                    <div class="copyright">
                        &copy; {{year}} BeSpace - BeTheme. Muffin group - HTML by <a rel="nofollow"
                                                                                 href="javascript:;">BeantownThemes</a>
                    </div>
                    <!--Social info area-->
                    <ul class="social"></ul>
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
