<template>
    <!-- Main Content -->
    <div id="Content">
        <div class="content_wrapper clearfix">
            <div class="sections_group">
                <div class="extra_content">
                    <div class="section the_content no_content">
                        <div class="section_wrapper">
                            <div class="the_content_wrapper"></div>
                        </div>
                    </div>
                </div>

                <Filtro></Filtro>

                <div class="section">
                    <div class="section_wrapper clearfix">
                        <!-- One full width row-->
                        <div class="column one-second column_blog"
                             v-for="i in 5" :key="i">
                            <div class="blog_wrapper isotope_wrapper">
                                <div class="posts_group lm_wrapper photo col-3">
                                    <div class="post-item isotope-item clearfix post-2275 post format-standard has-post-thumbnail category-earth tag-grid">
                                        <div class="date_label">
                                            May 9, 2014
                                        </div>
                                        <div class="image_frame post-photo-wrapper scale-with-grid">
                                            <div class="image_wrapper">
                                                <a href="javascript:;">
                                                    <div class="mask"></div>
                                                    <img width="1200" height="480"
                                                         src="https://www.peru.travel/perupaismasrico/latam/assets/images/facebook_share_1200x630.jpg"
                                                         class="scale-with-grid wp-post-image" alt="home_space_blog3"/>
                                                </a>
                                                <div class="image_links double">
                                                    <a href="images/home_space_blog3-1200x800.jpg" class="zoom"
                                                       rel="prettyphoto"><i class="icon-search"></i></a><a
                                                        href="javascript:;" class="link"><i class="icon-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="post-desc-wrapper">
                                            <div class="post-desc">
                                                <div class="post-head">
                                                    <div class="post-meta clearfix">
                                                        <div class="author-date">
                                                            <span class="vcard author post-author"><span class="label">Published by </span><i
                                                                    class="icon-user"></i> <span class="fn"><a href="#">admin</a></span></span><span
                                                                class="date"><span class="label">at </span><i
                                                                class="icon-clock"></i> <span class="post-date updated">May 9, 2014</span></span>
                                                        </div>
                                                        <div class="category">
                                                            <span class="cat-btn">Categories <i
                                                                    class="icon-down-dir"></i></span>
                                                            <div class="cat-wrapper">
                                                                <ul class="post-categories">
                                                                    <li>
                                                                        <a href="javascript:;"
                                                                           rel="category tag">Earth</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="post-footer">
                                                        <div class="button-love">
                                                            <span class="love-text">Do you like it?</span><a href="#"
                                                                                                             class="mfn-love "
                                                                                                             data-id="2275"><span
                                                                class="icons-wrapper"><i
                                                                class="icon-heart-empty-fa"></i><i
                                                                class="icon-heart-fa"></i></span><span
                                                                class="label">82</span></a>
                                                        </div>
                                                        <div class="post-links">
                                                            <i class="icon-doc-text"></i><a href="javascript:;"
                                                                                            class="post-more">Read
                                                            more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post-title">
                                                    <h2 class="entry-title"><a href="javascript:;">Vestibulum ante ipsum
                                                        primis</a></h2>
                                                </div>
                                                <div class="post-excerpt">
                                                    <p class="big">
                                                        Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                        consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                                        sint occaecat cupidatat non proident, sunt in culpa qui officia
                                                        deserunt mollit anim id est laborum.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Filtro from '../components/Filtros'

    export default {
        name: "Container-Article",
        components: {
            Filtro
        },
        data() {
            return {
                arreglo: [1, 2, 3, 4, 5]
            }
        }
    }
</script>

<style scoped>

</style>