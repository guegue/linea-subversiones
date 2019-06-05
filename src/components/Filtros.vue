<template>
    <!-- Portfolio filters -->
    <div class="section section-filters">
        <div class="section_wrapper clearfix">
            <!--  Filter Area -->
            <div id="Filters" class="column one ">
                <ul class="filters_buttons">
                    <li class="label">
                        Filter by
                    </li>
                    <li class="categories">
                        <a class="open" href="#"><i class="icon-docs"></i>Categories<i
                                class="icon-down-dir"></i></a>
                    </li>
                    <li class="tags">
                        <a class="open" href="#"><i class="icon-tag"></i>Tags<i
                                class="icon-down-dir"></i></a>
                    </li>
                    <li class="authors">
                        <a class="open" href="#"><i class="icon-user"></i>Authors<i
                                class="icon-down-dir"></i></a>
                    </li>
                    <li class="reset">
                        <a class="close" data-rel="*" href="javascript:;"><i class="icon-cancel"></i>Show
                            all</a>
                    </li>
                </ul>
                <div class="filters_wrapper">
                    <ul class="categories">
                        <li>
                            <a data-rel=".category-earth" href="javascript:;">Earth</a>
                        </li>
                        <li>
                            <a data-rel=".category-planets" href="javascript:;">Planets</a>
                        </li>
                        <li>
                            <a data-rel=".category-technology" href="javascript:;">Technology</a>
                        </li>
                        <li>
                            <a data-rel=".category-universe" href="javascript:;">Universe</a>
                        </li>
                        <li class="close">
                            <a href="#"><i class="icon-cancel"></i></a>
                        </li>
                    </ul>
                    <ul class="tags">
                        <li>
                            <a data-rel=".tag-framework" href="javascript:;">Framework</a>
                        </li>
                        <li>
                            <a data-rel=".tag-grid" href="javascript:;">Grid</a>
                        </li>
                        <li>
                            <a data-rel=".tag-motion" href="javascript:;">Motion</a>
                        </li>
                        <li>
                            <a data-rel=".tag-video" href="javascript:;">Video</a>
                        </li>
                        <li>
                            <a data-rel=".tag-wordpress" href="javascript:;">Wordpress</a>
                        </li>
                        <li class="close">
                            <a href="#"><i class="icon-cancel"></i></a>
                        </li>
                    </ul>
                    <ul class="authors">
                        <li>
                            <a data-rel=".author-admin" href="#">admin</a>
                        </li>
                        <li class="close">
                            <a href="#"><i class="icon-cancel"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Filtros"
    }
</script>

<style scoped>

</style>